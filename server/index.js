import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;


app.get('/hello', (req, res) => {
	res.send('Hello world!');
});

app.use(express.static(path.join(__dirname, '/../frontend/dist')));

app.listen(port, function(err) {
	if(err) return console.log(err);
	console.log(`App is listening on ${port}`);
});