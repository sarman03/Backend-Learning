import express from 'express'

const app= express();

const port= process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Hello World') 
}) 



app.get('/api/jokes', (req, res)=>{
   const jokes= [
        {
            id:1,
            title: 'Joke 1',
            content: 'this is joke 1'
        },{
            id:2,
            title: 'Joke 2',
            content: 'this is joke 2'
        },{
            id:3,
            title: 'Joke 3',
            content: 'this is joke 3'
        },{
            id:4,
            title: 'Joke 4',
            content: 'this is joke 4'
        },{
            id:5,
            title: 'Joke 5',
            content: 'this is joke 5'
        }
    ]

    res.send(jokes);
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
