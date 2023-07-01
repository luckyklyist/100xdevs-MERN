import express from 'express';
import router from './index.routes';

const app = express();
app.use(express.json());

app.use(router);

const PORT=3002;


let COURSES = [];


app.listen(PORT, () => {
  console.log(`Server running at the port ${PORT}`);
});
