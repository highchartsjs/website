let faq = '';
$0.childNodes.forEach(node => {

	faq+=`- title: ${node.querySelector('h4').innerText}
  content: ${node.querySelector('.Faq-content').innerHTML}
`
});
console.log(faq);