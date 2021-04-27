// requires 
const express = require('express');
const pool = require('./db')
const cors = require('cors')
const bcrypt = require('bcrypt');

// app initialize
const app = express();

// app use
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 1234;

var isLoggedIn = true

// GET requests :-
// login
app.get('/isloggedin', (req, res) => {
    if(isLoggedIn){
        res.send('true')
    }
    else{
        res.send('false')
    }
})

// get user details

// get not appeared quiz

// get quiz details

// get appeared quiz details

// get results

// POST requests :-
// register user 
app.post('/register', async(req, res)=>{
    try{
        const { name, email, password } = req.body;
        const pass1 = await bcrypt.hash(password, 10);
        const newStudent = await pool.query(
            "INSERT INTO student (name, email, password) VALUES($1, $2, $3) RETURNING *",[name, email, pass1]
        );
        
        res.json(newStudent.rows[0]);
        console.log(newStudent.rows[0]);
    }
    catch (err){
        console.log(err)
    }
})

// add subject
app.post('/subjects/add', async (req, res)=>{
    try{
    }
    catch(err){
        console.log(err);
    }
})

// add quiz

// add question

// add answer

// add appeared

// PUT requests :-
// update user

app.listen(PORT, ()=>{
    console.log(`Listening ${PORT}`);
})