require ('dotenv').config();
const express= require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter oie!');
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`);
});