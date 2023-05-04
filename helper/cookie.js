
(() => {
	if (!("cookieStore" in window)) {
		return {

		}
	}

	let cookieStore = window.cookieStore;

	// https://www.raymondcamden.com/2023/04/12/using-the-cookie-store-api
	return {
		get: (name) => {
			return cookieStore.get(name);
		},
		set: (name, value, expireDay) => {
			const date = new Date();
			date.setDate(date.getDate() + expireDay);
			cookieStore.set({
				name: name,
				value: value,
				expires: date
			})
		},
		delete: (name) => {
			cookieStore.delete(name);
		}
	};

})();