
const Integrations = [
{
    "name": "Android",
    "code": "android",
    "img": "logoandroid.svg"
},
{
    "name": "Angular",
    "code": "angular",
    "img": "logoangular.svg"
},
{
    "name": "iOS",
    "code": "ios",
    "img": "logoswift.svg"
},
{
    "name": "JavaScript",
    "code": "javascript",
    "img": "logojavascript.svg"
},
{
    "name": ".NET",
    "code": "dotnet",
    "img": "logonet.svg"
},
{
    "name": "NodeJS",
    "code": "node",
    "img": "logonodejs.svg"
},
{
    "name": "Python",
    "code": "python",
	 "isNew": true,
    "img": "logopython.svg"
},
{
    "name": "React",
    "code": "react",
    "img": "logoreact.svg"
},
{
    "name": "TypeScript",
    "code": "typescript",
    "img": "logotypescript.svg"
},
{
    "name": "Vue",
    "code": "vue",
    "img": "logovue.svg"
}];


function IntegrationList({
	className
}) {
	className = className ? ' ' + className : '';
	return <ul id="integrations-list" class="row">
		{
			Integrations.map((integration) =>
				<li class={"card pr-0 col-6  mb-1 border-0" + className} key={integration.code}>
					<div class="row m-0 bkgWhiteLogo">
						<div class="col-8 p-1">
							{integration.isNew && <span id="newBadge" class="badge badge-primary font-weight-light">New</span>}
							<span class="integrationsHeadingSpan mb-0 small-text">Highcharts </span>
							<a class="h5 mt-0 mb-0 font-weight-bold integrationsHeading" href={"/integrations/" + integration.code}>{integration.name}</a>
						</div>
						<div class="col-3 p-0" style={{ "margin": "auto 0px" }}>
							<img class="img bkgWhite integrationimg my-md-1" alt="" src={"/svg/" + integration.img} />
						</div>
					</div>
				</li>
			)
		}
	</ul>
}

export default IntegrationList;

export {Integrations}