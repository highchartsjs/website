// import "@styles/index.scss";
import "@styles/boostrap.css";
// import '@styles/fa.css';
import '/assets/font-awesome/css/font-awesome.css';
import "@styles/highcharts.css";
import Header from "@components/Header";
import Footer from '@components/Footer';
export default function RootLayout({ children, params }) {
	return (
		<html lang="en">
			<body>
				<Header/>
				{children}
				<Footer/>
			</body>
		</html>
	);
}