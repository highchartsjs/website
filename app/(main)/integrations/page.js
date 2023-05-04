


import AddOnBoxes from '@/components/AddOnBoxes';
import Breadcurmb from '@/components/Breadcrumb';
import IntegrationList from '@/components/IntegrationList';

export default function Product() {
	return <>
		<Breadcurmb paths='integrations' drakTheme={true}></Breadcurmb>
		<div id="full-width-page-wrapper">
			<div id="content">
				<main class="site-main" id="main" role="main">
					<div class="product-pages">
						<div class="content-fluid bkgHeroBackground">
							<div class="container">
								<div class="row pb-3">
									<div class="col-12 col-md-6 txtWhite">
										<h1 class="mt-2">Official Highcharts<sup>®</sup> Integrations</h1>
										<p> At Highcharts, we believe that good software tools make developers’
											lives easier.  We’ve found reasons to fall in love with virtually every
											framework out there!</p><p> That’s why we’ve developed official Highcharts integrations for frontend
												frameworks including Angular, React, Vue and more. Or incorporate Highcharts
												as a native component in your mobile or server-side projects with our
												integrations for iOS, Android, PHP, .NET and more.</p><p> Our official integrations come with the quality and support that
													makes Highcharts a favorite in the developer community. Don’t reinvent
													the wheel. Use these integrations in your next project.</p></div>
									<div class="col-12 col-xl-6 text-center"><div class="product-image">
										<img decoding="async" alt="" src="/svg/integrations.svg" /></div></div></div>
							</div>
						</div>
						<div class="content-fluid bkgWhite">
							<div class="container pb-1 pt-3">
								<div class="row">
									<div class="col-md-12">
										<h2>Official Highcharts Integrations</h2>
									</div>
									<div class="col-md-12">
										<IntegrationList className="col-lg-3"></IntegrationList>
									</div>
								</div>
							</div>
						</div>
						<div class="content-fluid">
							<div class="container pb-1 pt-3">
								<div class="row">
									<div class="col-md-12">
										<h2>Feature Support Table</h2>
										<p>The table below shows the Highcharts libraries and features supported by each of our official integrations.</p>
									</div>
									<div class="col-12 pt-2">
										<table class="table table-bordered" id="wrappers-table">
											<thead>
												<tr>
													<th scope="col" class="arrow-cell">
														<div class="arrow"></div>
													</th>
													<th scope="col">Highcharts Core</th>
													<th scope="col">Highcharts Maps</th>
													<th scope="col">Highcharts Stock</th>
													<th scope="col">Highcharts Gantt</th>
													<th scope="col">A11Y</th>
													<th scope="col">Boost</th>
													<th scope="col">Offline Exporting</th>
													<th scope="col">Data Export</th>
													<th scope="col">Draggable Points</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">.NET</th>
													<td class="table-success">yes</td>
													<td class="table-danger">no</td>
													<td class="table-success">yes</td>
													<td class="table-danger">no</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
												<tr>
													<th scope="row">React JS</th>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
												<tr>
													<th scope="row">Vue</th>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
												<tr>
													<th scope="row">Angular</th>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
												<tr>
													<th scope="row">Android</th>
													<td class="table-success">yes</td>
													<td class="table-danger">no</td>
													<td class="table-danger">no</td>
													<td class="table-danger">no</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
												<tr>
													<th scope="row">iOS</th>
													<td class="table-success">yes</td>
													<td class="table-danger">no</td>
													<td class="table-danger">no</td>
													<td class="table-danger">no</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
													<td class="table-success">yes</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<AddOnBoxes/>
					</div>
				</main>
			</div>
		</div>
	</>
};