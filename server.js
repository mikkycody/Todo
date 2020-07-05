import express from 'express';
import db from './db/db';

//Set up the express app
const app = express();

app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success : 'true',
        message : 'todos retrieved successfully',
        todos   : db
    })
});

const PORT= 3000;
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})