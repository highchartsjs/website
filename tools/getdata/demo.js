



Array.prototype.getLast = function() {
	return this[this.length -1]
}
let demos = []
document.querySelectorAll('#content .row').forEach(demoCategory => {

	let h2 = demoCategory.querySelector('.title h2'),
		a,
		isNew,
		name;
	if(!h2) {
		return false;
	}
	let category = {
		name: h2.innerText,
		code: h2.id,
		children: []
	}
	demoCategory.querySelectorAll('.demo').forEach(demo => {
		a = demo.children[0];
		name = demo.querySelector('.footer-container').innerText;
		isNew = undefined;
		if(demo.querySelector('.newDemoIcon')) {
			name =  name.replace('New', '');
			isNew = true;
		}
		category.children.push({
			code: a.href.split('/').getLast(),
			isNew: isNew,
			name: demo.querySelector('.footer-container').innerText,
			img: demo.querySelector('.img-thumbnail').src
		});
	});

	demos.push(category);
});

console.log(JSON.stringify(demos, undefined, '  '));