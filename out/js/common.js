



class Dropdown {
	constructor(target) {
		this.states = false;
		this.target = target;
		this.show();
	}

	show() {
		this.states = true;
		this.target.parentNode.classList.add('show');
		this.target.nextElementSibling.classList.add('show');

	}

	hide() {
		this.states = false;
		this.target.parentNode.classList.remove('show');
		this.target.nextElementSibling.classList.remove('show');
	}
	update(target) {
		if (this.target === target) {
			this.states ? this.hide() : this.show();
		} else {
			this.target && this.hide();
			this.target = target;
			this.show();
		}
	}
};

let dropdownClickHanlder = function (e) {
	let target = e.target,
		count = 0;
	while (target.tagName !== 'BUTTON' && count < 3) {
		target = target.parentNode;
	}

	if (target.tagName === 'BUTTON') {
		if (!window.currentDropdown) {
			window.currentDropdown = new Dropdown(target);
		} else {
			window.currentDropdown.update(target);
		}
		e.stopPropagation();
	} else {
		console.error(`dropdown error: `, target);
	}
};

window.addDropdown = function (el, i) {
	el.addEventListener('click', dropdownClickHanlder, false);
}



window.onload = function () {
	// init all legacy boostrap js components tooltip, collapsed
	console.log('init')

	document.querySelectorAll('.dropdown').forEach((dropdown, i) => {
		window.addDropdown(dropdown, i);
	});

	window.addEventListener('click', () => {
		window.currentDropdown && window.currentDropdown.hide();
	});
}

