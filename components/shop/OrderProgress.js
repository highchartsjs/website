

function OrderProgress({ Step, current = 0, callback, canNext }) {

	return <nav aria-label="Order progress" class="Shop-progress-nav" id="shop-progress">
		<ol>
			{Step.map((step, i) => {
				let isDone = false,
					className = '';
				if (i < current) {
					isDone = true;
					className = 'done';
				} else if (i === current) {
					className = 'active';
				}
				return <>
					<li className={className} >
						{
							// TODO: 未填写数据的情况下，无法进行下一步
							step.code === undefined ? <span><span>{i + 1}</span></span> :
								<a aria-current="page" aria-label="Choose" href={'/shop/' + step.code}>
									{className ?
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="Completed step" role="img">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg> :
										<span>{i + 1}</span>}
								</a>
						}
						<span>{step.name}</span>
					</li>
					{i !== Step.length - 1 && <li class={"space" + (isDone ? ' done' : '')} role="presentation"></li>}
				</>
			})}
		</ol>
	</nav>
};

export default OrderProgress;