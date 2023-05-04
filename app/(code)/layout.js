import "@/styles/code/index.scss";

import Logo from "@/components/Logo";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Logo/>
				</header>
				{children}
				<footer>
					Copyright &copy; {new Date().getFullYear()}&nbsp;&nbsp;
					<a href="https://www.hcharts.cn/" title="Highcharts 中文官网" target="_blank">Highcharts 中文官网</a>， 
					由 <a href="https://jianshukeji.com?spm=highcharts" target="_blank">简数科技</a> 提供服务， 
					<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备16004892号-6</a>， 
					<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002011664" target="_blank">浙公网安备33011002011664号</a>
				</footer>
			</body>
		</html>
	);
}