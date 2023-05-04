
const PriceTable = {
	// Base and Add
	Main: [
		// Annual
		[
			[160, 316, 788], // highcharts core
			[160, 216, 788], // highcharts stock
			[57, 111, 276],  // highcharts maps
			[33, 64, 158],    // highcharts gantt

		],
		// Perpetual
		[
			[368, 725, 1811],
			[368, 725, 1811],
			[129, 254, 634],
			[74, 145, 363]
		]
	],
	// Python
	Python: [
		// Annual
		[
			[48, 94.8, 236.4],  // core
			[48, 94.8, 236.4],   // stock
			[17.1, 33.3, 82.8],  // maps
			[9.9, 19.2, 47.4],  // gantt
		],
		// Perpetual
		[
			[110.4, 217.5, 543.3],
			[110.4, 217.5, 543.3],
			[38.7, 76.2, 190.2],
			[22.2, 43.5, 108.9]
		]
	]
}

function extend(a, b) {
	if (!b) {
		b = {};
	}
	for (let key in a) {
		if (b[key] !== undefined) {
			a[key] = b[key];
		}
	}
	return a;
};

// 价格计算器
class Caculator {
	constructor(options) {
		// 额外的软件包
		this.addOrder = ['highcharts', 'stock', 'maps', 'gantt'];
		this.setOptions(options);
		// 是否是三合一
		this.bundleDiscount = 0.9;
		this.prices = {};
		this.doCalculate();
	}

	getOptions() {
		return {
			seats: this.seats,
			add: this.add,
			python: this.python
		}
	}

	setOptions(options) {
		this.options = extend({
			peroid: 0,
			type: 0,
			seats: 1,
			python: false,
			add: []
		}, options);
		for (let key in this.options) {
			this[key] = this.options[key];
		}
		this.updateBundle();
	}

	update(options) {
		this.setOptions(options);
		this.doCalculate();
	}

	updateBundle() {
		this.bundle = this.add.length === this.addOrder.length;
	}


	/**
	 * 判断产品编码是否为 Python
	 * @private
	 * */
	isPython(productCode) {
		return productCode === 'python';
	}

	// 增加或减少产品
	addOrPlus(productCode) {
		let isPython = this.isPython(productCode);
		if (isPython) {
			this.python = !this.python;
		} else {
			this.add.includes(productCode) ? this.add = this.add.filter(p => p !== productCode) : this.add.push(productCode);
			this.bundle = this.add.length === 3;
		}
		this.doCalculate();
	}

	// 设置开发者席位
	setSeats(seats) {
		if (seats !== this.seats) {
			this.seats = seats;
			this.doCalculate();
		}
	}

	/**
	 * 计算
	 * @private
	 * */
	doCalculate() {
		// 1. seats add discount
		let seats = PriceTable.Main[this.peroid][0][this.type]; // core
		let discount = 0;
		// 2. python
		let python = PriceTable.Python[this.peroid][0][this.type] * this.seats;

		this.add.forEach((add, i) => {
			let addOrder = this.addOrder.indexOf(add);
			let addPrice = PriceTable.Main[this.peroid][addOrder][this.type];
			seats += addPrice;


			let pythonAddPrice = PriceTable.Python[this.peroid][addOrder][this.type];
			if (this.bundle) {
				discount += addPrice * (1 - this.bundleDiscount) * this.seats;
				python += pythonAddPrice * this.bundleDiscount * this.seats;
			} else {
				python += pythonAddPrice * this.seats;
			}
		});


		// 3. total
		let total = seats * this.seats - discount;
		if (this.python) {
			total += python;
		}

		this.prices = { seats, discount, python, total };

		
	}

	// 获取价格
	getPrice(type) {
		if (this.prices[type] !== undefined) {
			return this.prices[type];
		}

		let productOrder = this.addOrder.indexOf(type);
		if (productOrder !== -1) {
			return PriceTable.Main[this.peroid][productOrder][this.type];
		}
		return 0;
	}

}

export default Caculator;