
let data = [{
	type: 'ADDITIONAL PRODUCT',
	name: 'Highcharts Maps',
	code: 'highcharts',
	description: 'Create interactive map charts with drill-down and touch support.',
	link: '/products/maps',
	icon: 'https://wp-assets.highcharts.com/svg/icon_map_light.svg'
}, {
	type: 'ADDITIONAL PRODUCT',
	name: 'Highcharts Stock',
	code: 'stock',
	description: 'Create stock or general timeline charts for any web and mobile project.',
	link: '/products/stock',
	icon: 'https://wp-assets.highcharts.com/svg/icon_stock_light_v2.svg'
}, {
	type: 'ADDITIONAL PRODUCT',
	name: 'Highcharts Gantt',
	code: 'gantt',
	description: 'Create interactive charts for allocating and displaying tasks, events, and resources along a timeline.',
	link: '/products/gantt',
	icon: 'https://wp-assets.highcharts.com/svg/icon_gantt_light.svg'
}, {
	type: 'ADDITIONAL PRODUCT',
	name: 'Highcharts Editor',
	code: 'highcharts-editor',
	description: 'Enable less techy developers to create interactive charts on web and mobile platforms.',
	link: '/products/highcharts-editor',
	icon: 'https://wp-assets.highcharts.com/svg/editor-light.svg'
}, {
	type: 'ADD-ON',
	name: 'Export Server',
	code: 'export-server',
	description: 'Allow your users to download the chart as PDF, PNG, JPG or SVG vector images, and more.',
	link: '/docs/export-module/export-module-overview',
	icon: 'https://wp-assets.highcharts.com/svg/exporter-light.svg'
}];


function AddOnBoxes({ current }) {

	return <div class="content-fluid" id="add-on-boxes">
		<div class="container my-3">
			<div class="row">
				<div class="col-12">
					<h2>Robustify Highcharts</h2>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="card-deck justify-content-center">
					{

						data.map(product => {
							return product.code === current ? null :
								<div class="card mb-1">
									<div class="row no-gutters d-flex align-items-center">
										<div class="col-8">
											<div class="card-body pl-1 pl-sm-3 py-1 py-sm-2">
												<h3 class="card-title blogTitle"> <span class="add-on-mini color-greenPunch">{product.type}</span> 
												<a href={product.link}>{product.name}</a></h3>
												<p class="card-text">{product.description}</p>
											</div>
										</div>
										<div class="col-4">
											<img class="prod-img p-1 p-sm-2" src={product.icon} alt="" />
										</div>
									</div>
								</div>
						})
					}
				</div>
			</div>
		</div>
	</div>


};

export default AddOnBoxes;

