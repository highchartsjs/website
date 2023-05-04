'use client'

import LicenseChooser from '@/components/shop/LicenseChooser';
import FAQ from '@/components/shop/FAQ';
import OrderProgress, { NavHeader } from '@/components/shop/OrderProgress';
import LicenseConfiguration from '@/components/shop/LicenseConfiguration';
import LicenseCheckout from '@/components/shop/LIcenseCheckout';
import { LicenseType, LicensePeroid } from '@/data/shop/index';
import StoreHelper from '@/helper/store';
import Advantage from '@/components/shop/Advantage';


import { useEffect, useState } from 'react';


const Step = [{
	name: '选择',
	title: '选择授权种类',
	desc: '选择一个授权类型并在下一步进行配置，有任何疑问，您可以查阅 <a href="/#faq">常见问题</a> 或直接  <a href="/contact">联系我们</a>',
	code: 'index',
	dataKey: ['peroid', 'type'],
	_render: (data, callback) => {
		return <LicenseChooser callback={callback} />
	}
}, {
	name: '配置',
	title: (data) => {
		return LicenseType[data.type].name + ' 授权配置'
	},
	dataKey: ['add', 'python', 'seats'],
	valiate(data) {
		return data.peroid !== undefined && data.type !== undefined;
	},
	_render: (data, callback) => {
		return <LicenseConfiguration props={data} callback={callback} />
	},
	desc: (data) => {
		return '您选择了 <b>' + LicensePeroid[data.peroid].title + '</b>，<a href="/shop/' + Step[0].code + '">返回重新选择</a>？'
	},
	code: 'configure-license',
}, {
	title: '填写必要的信息',
	desc: '是否已经有账号？登录后更快捷',
	valiate(data) {
		return data.seats !== undefined;
	},
	_render: (data, callback) => {
		return <LicenseCheckout />
	},
	name: '结算',
	code: 'checkout'
}, {
	name: '完成'
}];

export { Step }

function Header({ current, data }) {

	let stepObj = Step[current],
		title = typeof stepObj.title === 'string' ? stepObj.title : stepObj.title(data),
		desc = typeof stepObj.desc === 'string' ? stepObj.desc : stepObj.desc(data);

	return <div class="Header">
		<div class="Header-top">
			<h2 class="h1">
				{title}
			</h2>
		</div>
		<div class="Header-description">
			<div class="Header-description-container">
				<p dangerouslySetInnerHTML={{ __html: desc }}></p>
			</div>
		</div>
	</div>
}

function Shop({ props }) {

	let [step, setStep] = useState(props.step | 0);
	let [loading, setLoading] = useState(true);
	let [data, setData] = useState(null);

	function goto(nextData) {
		let isNext = nextData !== undefined;
		let targetStep = step + (isNext ? 1 : -1);
		let targetUrl = Step[targetStep].code;
		window.history.pushState({}, Step[targetStep].title, '/shop/' + targetUrl);

		if (isNext) {
			// TODO: 后续数据覆盖
			let newData = step === 0 ? { ...nextData } : {
				...data,
				...nextData
			};
			StoreHelper.set(newData);
			setData(newData);
		}
		setStep(targetStep);
	};

	useEffect(() => {
		let storeData = StoreHelper.get();
		if (step !== 0 && !storeData) {
			console.log('redirect');
			return false;
		} else if (Step[step].valiate && !Step[step].valiate(storeData)) {
			console.log('redirect1');
			return false;
		}
		setData(storeData);
		setLoading(false);
	}, []);

	return <>
		{
			loading ? <div className='loading'>Loading</div> :
				<>
					<OrderProgress Step={Step} current={step} />

					<div className="App-section Shop-content">
						<Header current={step} data={data}></Header>
						{Step[step]._render(data, (stepData) => {
							goto(stepData);
						})}
						{step === 1 && <Advantage />}
						{(step === 0 || step === 1) && <FAQ data={props.faq} />}
					</div>
				</>
		}

	</>
}

export default Shop;
