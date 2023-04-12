import '@styles/globals.scss';
import "@styles/code/index.scss";

import Header from '@components/Header';
import Footer from '@components/Footer';

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header nav={null}></Header>
				{children}
				<Footer text="Highchart" className="simple-footer"></Footer>
			</body>
		</html>
	);
}