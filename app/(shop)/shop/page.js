
import ShopPage from './_shop';

export default async function StepPage() {
	return ShopPage({
		params: {
			step: 'index'
		}
	});
};
