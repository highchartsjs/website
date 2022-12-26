'use client'

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const ShopDomain = process.env.NEXT_PUBCLI_SHOPDOMAIN;

import Link from 'next/link';
import Drilldown from './ui/Drilldown';

const options = {
   nav: [/*{
      name: '产品',
      code: 'product',
      items: [{
         name: 'Highcharts JS',
         code: 'highcharts'
      }, {
         name: 'Highcharts Stock',
         code: 'stock'
      }, {
         name: 'Highcharts Maps',
         code: 'maps'
      }, {
         name: 'Highcharts Gantt',
         code: 'gantt'
      },{
         name: "Highcharts iOS",
         code: "ios"
      },{
         name: 'Highcharts Android',
         code: 'android'
      }]
   }, */{
      name: '在线演示',
      code: 'demo',
      items: [{
         name: 'Highcharts 演示',
         code: 'highcharts'
      }, {
         name: 'Highcharts Stock 演示',
         code: 'stock'
      }, {
         name: 'Highcharts Maps 演示',
         code: 'maps'
      }, {
         name: 'Highcharts Gantt 演示',
         code: 'gantt'
      }]
   }, {
      name: '开发者资源',
      code: 'dev',
      items: [{
         name: '使用教程',
         code: '/docs'
      }, {
         name: 'API 文档',
         code: 'api',
         url: 'https://api.highcharts.com.cn/'
      }, {
         name: '更新日志',
         code: '/docs/changelog'
      }, {
         name: '发展规划',
         code: '/docs/roadmap'
      }/*, {
         name: '技术社区',
         url: 'https://forum.jianshukeji.com/c/highcharts'
      }*/]
   },/* {
      name: '服务与支持',
      code: 'support'
   },*/ {
      name: '下载试用',
      code: 'download',
      className: 'nav-try'
   }],
   rightNav: [{
      name: '关于我们',
      code: 'about',
      items: [{
         name: '关于我们',
         code: '/about'
      }, {
         name: '联系方式',
         code: '/about#contact'
      }, {
         name: '新闻动态',
         code: '/news'
      }, {
         name: '合作伙伴',
         code: '/about/parter'
      }]
   }, {
      name: '在线商店',
      code: 'shop',
      url: ShopDomain
   }],
   rightNavOptions: {
      className: 'navbar-right'
   }
};

function Header({ props }) {

   return <header>
      <nav className="navbar navbar-default">
         <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand" href="/"><img src="/images/logo.svg" title="HIGHCHARTS" alt="HIGHCHARTS" /></a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <Drilldown items={options.nav} options={options.rightNavOptions}/>
            </div>
         </div>
      </nav>
		
   </header>
};

export default Header;