import Breadcrumb from '@components/Breadcrumb.js';

export default async function Shop(props) {

	return <main>
		{/* <Breadcrumb paths={['shop', 'choose-type']}></Breadcrumb> */}

		<nav aria-label="Order progress" class="Shop-progress-nav" id="shop-progress">
			<ol>
				<li class="active">
					<a aria-label="Choose" href="/" aria-current="page">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-label="Completed step" role="img"><polyline points="20 6 9 17 4 12"></polyline></svg></a><span tabindex="-1">Choose</span></li><li class="space" role="presentation"></li><li class=""><a aria-label="Configure" href="/configure-license"><span aria-hidden="true">2</span></a><span tabindex="-1">Configure</span></li><li class="space" role="presentation"></li><li class=""><a aria-label="Checkout" href="/checkout"><span aria-hidden="true">3</span></a><span tabindex="-1">Checkout</span></li><li class="space" role="presentation"></li><li aria-hidden="true" class=""><span><span>4</span></span><span>Complete</span></li></ol></nav>
	</main>

}