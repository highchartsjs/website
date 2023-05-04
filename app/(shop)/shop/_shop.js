


import Breadcrumb from '@/components/Breadcrumb.js';
import Accordion from '@/components/Accordion.js';

import ShopSerivce from '@/service/ShopService';

import Shop from '@/components/shop/Shop';


export async function getData() {
	return {
		faq: await ShopSerivce.getFAQ()
	}
};

const Pages = ['index', 'configure-license', 'checkout'];

export { Pages };

export default async function ShopPage(props) {
	const data = await getData();

	data.step = Pages.indexOf(props.params.step);

	return <main class="App-section  container" id="main">
		<Shop props={data} />
	</main >
};
