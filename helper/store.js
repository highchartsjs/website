

const ShopDataKey = 'shop';

const StoreHelper = {

	get: function () {
		let data = localStorage.getItem(ShopDataKey);
		if (data) {
			try {
				return JSON.parse(data);
			} catch (err) {
				return null;
			}
		}
	},

	set: function (data) {
		let storeData = StoreHelper.get() || {};
		for (let key in data) {
			storeData[key] = data[key];
		}
		localStorage.setItem(ShopDataKey, JSON.stringify(storeData));
	}
}

export default StoreHelper;