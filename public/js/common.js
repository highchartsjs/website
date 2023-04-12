// window.onload = function() {

// 	let dropdown = document.querySelectorAll('header .dropdown');
// 	console.log(dropdown);

// 	dropdown.forEach(d => {
// 		d.addEventListener('click', activeDropdown);
// 	});
// };

// function activeDropdown(e) {
// 	let target = e.target;
// 	console.log(target);
// 	if(target.tagName === 'BUTTON') {
// 		if(target.parentNode.className.includes('show')) {
// 			target.parentNode.className = target.parentNode.className.replace(' show', '');
// 			target.nextElementSibling.className = target.nextElementSibling.className.replace(' show', '');
// 			target.setAttribute('aria-expanded', false);
// 		} else {
// 			target.parentNode.className += ' show';
// 			target.nextElementSibling.className += ' show';
// 			target.setAttribute('aria-expanded', true);
// 		}
		
// 	}
// }

window.onload = function() {
	// init all legacy boostrap js components tooltip, collapsed
	console.log('init')
}