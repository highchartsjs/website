import Header from "../components/header";
import "../styles/index.scss";
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header></Header>
				{children}
				<script src="/js/common.js" async=""></script>
			</body>
		</html>
	);
}