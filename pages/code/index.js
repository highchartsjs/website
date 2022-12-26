
import { useEffect, useState } from 'react';
import products from '../../data/products.json';



const Copy = {
	el: null,
	text: null,
	lastButton: null,
	action: (e, isScript) => {
		if (e) {
			Copy.setLastButton(e.target);
		}
		let text = isScript ? `<script src="${Copy.text}"></script>` : Copy.text;
		console.log(text);
		navigator.clipboard.writeText(text);
	},

	setLastButton: (target) => {
		target.innerText = '已复制';
		Copy.timer = setTimeout(() => {
			Copy.resetButton();
		}, 1000);
	},

	resetButton() {
		document.querySelectorAll('.copy button').forEach((button, i) => {
			button.innerText = i === 0 ? '复制链接' : '复制 Script';
		});

	},
	setTarget: (text, rect) => {
		if (!Copy.el) {
			Copy.el = document.querySelector('.copy');
		}
		if (Copy.timer) {
			Copy.timer = clearTimeout(Copy.timer);
			Copy.resetButton();
		}
		Copy.text = text;
		Copy.el.style.left = rect.x + rect.width + 20 + 'px';
		Copy.el.style.top = rect.y + rect.height - 28 + 'px';
		Copy.el.style.display = 'block';
	},
	clearTarget: () => {
		if (Copy.text) {
			Copy.text = null;
			Copy.el.style.display = 'none';
		}
		return false;
	}
};

const Code = function () {

	const [product, setProduct] = useState("highcharts");
	const [version, setVersion] = useState('');
	const [domain, setDomain] = useState('cdn');
	const [data, setData] = useState({
		versions: [],
		files: null,
		domains: {},
		version: ''
	});

	const copy = function (e) {
		let target = e.target;
		Copy.text = target.innerText;
		Copy.action();
	};

	const hover = function (e) {
		let target = e.target;
		if (target.tagName === 'LI') {
			target = target.children[0];
		}
		let rect = target.getBoundingClientRect();
		Copy.setTarget(target.innerText, rect);
		e.stopPropagation();
		e.preventDefault();
	};

	useEffect(() => {
		fetch('/data.json')
			.then(response => response.json())
			.then(json => {
				let versions = [],
					mainVersion = null,
					lastVersion = json.version[0];
				json.version.forEach(d => {
					let main = d.split('.')[0];
					if (mainVersion !== main) {
						versions.push({
							name: main + '.x',
							list: []
						});
						mainVersion = main;
					}

					versions[versions.length - 1].list.push(d);
				});

				setVersion(lastVersion);
				setData({
					versions: versions,
					domains: json.domain,
					files: json.files
				});
			});

		document.body.addEventListener('mouseover', function (e) {
			Copy.clearTarget();
		});
	}, []);

	return <section className="cdn">
		<div className="container">
			<h1>Highcharts 静态资源服务</h1>
			<div className="selector">
				<div className="simple-selector">
					<label>产品</label>
					{
						<select value={product} onChange={(e) => setProduct(e.target.value)}>
							{
								Object.keys(products).map(p =>
									<option key={p} value={p}>{products[p].name}</option>
								)
							}
						</select>
					}
				</div>

				<div className="simple-selector">
					<label>版本</label>
					<select value={version} onChange={e => setVersion(e.target.value)}>{
						data.versions.map(versions => {
							let versionList = versions.list;
							return <optgroup label={versions.name} key={versions.name}>{
								versionList.map(v =>
									<option value={v} key={v}>{v}</option>
								)
							}</optgroup>
						})
					}</select>
					<span>（10 版本以下的文件列表请参考 <a href="http://cdn.hcharts.cn" target="_blank"  rel="noreferrer">http://cdn.hcharts.cn</a>）</span>
				</div>
				{/* <div className="simple-selector">
					<label>域名选择</label>
					<select value={domain} onChange={e => setDomain(e.target.value)}>{
						data.domains && Object.keys(data.domains).map(d => {
							return <option value={d}>{data.domains[d]}</option>
						})
					}</select>
				</div> */}
			</div>
			{
				data.files ?

					<div className="file-list">
						<h2>文件列表</h2>
						{
							data.files[product].map((fileGroup, i) => {
								return <div key={product + '-' + (fileGroup.prefix || i)}>
									<h3>{fileGroup.name}</h3>
									<ul>
										{
											fileGroup.files.map(f => {
												return <li key={product + '-' + (f.substr(f.lastIndexOf('/') + 1).replace('.js', ''))}  onClick={e => copy(e)} onMouseOver={e => hover(e)}>
													<span>https://{data.domains[domain] + '/' + (product === 'highcharts' ? '' : product + '/') + version + '/' + (fileGroup.prefix || '') + f}</span>
												</li>
											})
										}
									</ul>
								</div>
							})
						}
						<div className='copy' onMouseOver={(e) => { e.stopPropagation(); e.preventDefault(); return false }}>
							<button onClick={(e) => Copy.action(e)}>复制链接</button>
							<button onClick={(e) => Copy.action(e, true)}>复制 Script 标签</button>
						</div>
					</div>

					: <div className='loading'>
						<span>loading...</span>
						</div>
			}
		</div>
	</section>

};

export default Code;