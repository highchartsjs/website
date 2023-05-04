import ShopPage from "../_shop";

import { Pages } from '../_shop';

export async function generateStaticParams() {
	return Pages.reduce((pre, cur) => {
		pre.push({
			step: cur
		});
		return pre;
	}, []);
}



export default async function StepPage(props) {
	return ShopPage(props);
};
