
import "@styles/autoptimize.css";
async function Contact() {
	return <div id="full-width-page-wrapper">
		<div id="content">
			<main class="site-main" id="main" role="main">
				<div class="content-fluid">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-6 pb-3 pt-2">
								<h1> Contact</h1>
								<p>Looking for a way to contact us? We’d love to help you. Here’s how you can reach us…</p>
							</div>
						</div>
					</div>
				</div>
				<div class="content-fluid mb-4">
					<div class="container">
						<div class="row ">
							<div class="col-12 col-md-8 px-0-mobile pb-3">
								<div class="accordion accordion-parent" id="accordion-parent-">
									<div class="card">
										<div class="card-header p-0" id="heading1-">
											<div class="d-flex align-items-center mx-1 ">
												<h3> <button class="btn btn-link btn-block text-left acc-btn" type="button" data-target="#collapse1-" aria-expanded="true" aria-controls="collapse1-"> <i class="fa arrow mx-1 fa-caret-down" aria-hidden="true"></i>Technical Support</button></h3>
											</div>
										</div>
										<div id="collapse1-" class="mx-1 pl-2 collapse show" aria-labelledby="heading1-" data-parent="#accordion-parent-">
											<div class="card-body ml-1 pl-0">
												<p>Our technical team is available on several platforms
													and there is a good chance you will find what you are looking for on our
													Support Page.</p><a href="/support" class="btn mb-0 mt-1 btn-small btn-primary"> Go to Support</a>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header p-0" id="heading2-">
											<div class="d-flex align-items-center mx-1  top-border">
												<h3> <button class="btn btn-link btn-block text-left acc-btn" type="button" data-target="#collapse2-" aria-expanded="false" aria-controls="collapse2-"> <i class="fa arrow mx-1 fa-caret-right" aria-hidden="true"></i>Sales Inquiries</button></h3>
											</div>
										</div>
										<div id="collapse2-" class="mx-1 pl-2 collapse" aria-labelledby="heading2-" data-parent="#accordion-parent-">
											<div class="card-body ml-1 pl-0">
												<p>Would you like to speak to a sales representative? Submit a sales inquiry form to get in touch with our Sales team.</p> <a href="https://shop.highsoft.com/contact" class="btn btn-primary mb-0 mt-1 btn-small"> Submit a sales inquiry</a>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header p-0" id="heading3-">
											<div class="d-flex align-items-center mx-1  top-border">
												<h3> <button class="btn btn-link btn-block text-left acc-btn" type="button" data-target="#collapse3-" aria-expanded="false" aria-controls="collapse3-"> <i class="fa arrow mx-1 fa-caret-right" aria-hidden="true"></i>Compliance &amp; GDPR</button></h3>
											</div>
										</div>
										<div id="collapse3-" class="mx-1 pl-2 collapse" aria-labelledby="heading3-" data-parent="#accordion-parent-">
											<div class="card-body ml-1 pl-0">
												<p>Use this form to submit an European Union General
													Protection Regulation (GDPR) request. Data Subject Request Form use this
													link to review our Privacy Policy.</p> <a href="/data-subject-request-form/" class="btn mb-0 mt-1 btn-small btn-primary">Submit
														a GDPR request</a>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header p-0" id="heading4-">
											<div class="d-flex align-items-center mx-1  top-border">
												<h3> <button class="btn btn-link btn-block text-left acc-btn" type="button" data-target="#collapse4-" aria-expanded="false" aria-controls="collapse4-"> <i class="fa arrow mx-1 fa-caret-right" aria-hidden="true"></i>Other Inquiries</button></h3>
											</div>
										</div>
										<div id="collapse4-" class="mx-1 pl-2 collapse" aria-labelledby="heading4-" data-parent="#accordion-parent-">
											<div class="card-body ml-1 pl-0">
												<p>Are you looking for our company information, pricing, product information, or our terms and conditions information?&nbsp;<a href="https://shop.highcharts.com/customer-service">Please refer to our customer service page</a>&nbsp;or<a href="https://shop.highcharts.com/#faq"> check out our frequently asked questions.</a></p>
											</div>
										</div>
									</div>
									<div class="card">
										<div class="card-header p-0" id="heading5-">
											<div class="d-flex align-items-center mx-1  top-border">
												<h3> <button class="btn btn-link btn-block text-left acc-btn" type="button" data-target="#collapse5-" aria-expanded="false" aria-controls="collapse5-"> <i class="fa arrow mx-1 fa-caret-right" aria-hidden="true"></i>Company Address</button></h3>
											</div>
										</div>
										<div id="collapse5-" class="mx-1 pl-2 collapse" aria-labelledby="heading5-" data-parent="#accordion-parent-">
											<div class="card-body ml-1 pl-0">
												<p><strong>Visit us in Vik</strong> <br /> Highsoft AS <br />Sentrumsgata
													44<br /> 6893, Vik i Sogn<br />Norway</p>
												<p><strong>Visit us in Bergen</strong> <br /> Highsoft AS <br />Lars Hilles gate 30<br /> 5008, Bergen<br />Norway</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-12 col-md-4 pb-3 d-flex flex-column justify-content-center justify-content-md-start"> <img decoding="async" class="bot-icon align-self-md-start pl-md-2" src="https://wp-assets.highcharts.com/svg/icon_bot_purple.svg" alt="" /></div>
						</div>
					</div>
				</div>
				<div id="empty-container desktop-version" class="bkgnone"></div>
			</main>
		</div>
	</div>
};

export default Contact;