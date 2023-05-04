
export default function handler(req, res) {
	console.log(req.url);
	res.status(200).json({ msg: 'Hi, Highcharter' })
}