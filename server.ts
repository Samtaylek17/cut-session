import express from 'express';
import * as path from 'path';

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend/build', 'static'), { extensions: ['js'] }));

app.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'frontend/build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Server running on port 3000'));
