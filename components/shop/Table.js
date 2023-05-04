import { LicenseType } from '@/data/shop/index';
import Icon, { Question } from '@/components/shop/Icon';
import Tooltip from '@/components/shop/Tooltip';

function HeaderRow({ title, desc, hidden }) {
	return <div role="row" class="Product-list-outer-row row">
		<div role="rowheader" class="Product-list-mobile-sticky-column gx-0 col-3">
			<div class="Product-list-category">
				{hidden ? <span className='visually-hidden'>title</span> : title}
				{desc && <Tooltip title={title} detail={desc}></Tooltip>}
			</div>
		</div>
		<div role="presentation" class="gx-0 col-lg-9 col-sm-12 col-9">
			<div role="presentation" class="Product-list-row row">
				<div role="cell" class="Product-list-column col-3"></div>
				<div role="cell" class="Product-list-column col-3"></div>
				<div role="cell" class="Product-list-column col-3"></div>
				<div role="cell" class="Product-list-column col-3"></div>
			</div>
		</div>
	</div>
}


function Columns() {
	return <div role="presentation" class="gx-0 col-lg-9 col-sm-12 col-9">
		<div role="presentation" class="Product-list-row row">
			{
				LicenseType.map((lt, i) =>
					<div role="cell" class="Product-list-column col-3">
						<div class="Product-list-feature">
							<Icon></Icon>
						</div>
					</div>
				)
			}
		</div>
	</div>
}

function HeaderColumn({ title, desc, link }) {
	return <div role="rowheader" class="Product-list-mobile-sticky-column gx-0 col-3">
		<div class="Product-list-feature-name">
			<span class="Product-list-feature-name-content">{link ? <a href={link} target="_blank">{title}</a> : title}</span>
			<Tooltip title={title} detail={desc} />
		</div>
	</div>
}

function ColumnWrapper({ children }) {
	return < div role = "presentation" class="gx-0 col-lg-9 col-sm-12 col-9" >
		<div role="presentation" class="Product-list-row row">{children}</div></div >
}


function Row({ children }) {
	return <div role="row" class="Product-list-outer-row row" >{children}</div>
}
export { Row, Columns, HeaderRow, HeaderColumn, ColumnWrapper };