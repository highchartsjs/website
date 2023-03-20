// import "@styles/index.scss";
import "@styles/boostrap.css";
// import '@styles/fa.css';
import '/assets/font-awesome/css/font-awesome.css';
import "@styles/highcharts.css";
import Header from "@components/Header";
import Footer from '@components/Footer';
import Head from "@components/Head";
export default function RootLayout({ children, params }) {
	return (
		<html lang="en">
			<Head></Head>
			<body>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}