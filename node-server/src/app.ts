import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
	res.send("Welcome to Spotify API Server");
});

app.listen(3002, () => {
	console.log("Server is running on PORT 3002");
});