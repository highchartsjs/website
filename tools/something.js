// get Product or integrations Features data
let coreFeatures = '';
$0.childNodes.forEach(node => {
	coreFeatures+= `- title: ${node.querySelector('h3').innerText}
  content: ${node.querySelector('.card-body p').innerHTML.replace(/\n/g, ' ')}
`
})
console.log(coreFeatures);



// - title: 实用的标准功能
//   description: Highcharts Gantt 默认包括许多先进和有用的功能，如里程碑、完成百分比阴影、当前日指示和活动之间的关系
//   cover: /uploads/feature-gantt-features.png


let features = '';
$0.childNodes.forEach(node => {

	features += `- title: ${node.querySelector('h3').innerText}
  description: ${node.querySelector('.card-text').innerHTML.replace(/\n/g, ' ')}
  cover: ${node.querySelector('img').src}
`
});
console.log(features);