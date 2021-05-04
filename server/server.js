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

const PORT = process.env.PORT || 1221;

var isLoggedIn = false
var User;
var currentMarks = 0;

// GET requests :-
// login
app.get('/isloggedin', (req, res) => {
    if(isLoggedIn){
        res.json('true')
    }
    else{
        res.json('false')
    }
})

// Logout
app.get('/logout', (req, res) => {
    isLoggedIn = false;
    console.log('Logged out');
    res.send('Logged out successfully')
})

// Get All Quiz
app.get('/getallquiz', async (req, res) => {
    try{
        const userId = User.id
        console.log(userId);
        const allQuiz = await pool.query("SELECT * FROM quiz");
        // const student = await pool.query(
        //     `SELECT * FROM student WHERE email = $1`,
        //     [email]);
        console.log(allQuiz);

        let quizList = []
        if(allQuiz.rows.length > 0){
            for(let i=0; i<allQuiz.rows.length; i++){
                console.log(i);
                quizList.push(allQuiz.rows[i]);
            }
        }
        else{
            console.log('0 quiz fetched');
        }
        
        res.json(quizList);
        console.log(quizList);
    }
    catch (err){
        console.log(err)
    }
})

// get user details
app.get('/getstudentdetails', (req, res) => {
    if(!User){
        res.json('NONE')
    }
    else{
        res.json(User)
    }
})

// checkquiz/id
app.get('/checkquiz/:id', async (req, res) => {
    const id = req.params.id;

    const query1 = await pool.query("SELECT * FROM quiz");
    const quiz = query1.rows[id-1]
    const query2 = await pool.query("SELECT * FROM appeared WHERE stid = $1", [User.id]);

    for (let i=0; i<query2.rows.length; i++){
        if(quiz.id == query2.rows[i].qzid){
            res.json("Aleady Appeared")
        }
    }

    res.json("Not Appeared")
})
// get qustion details
app.get('/question/:id/:qid', async (req, res) => {
    const id = req.params.id;
    const qid = req.params.qid;

    const query = await pool.query(
        "SELECT * FROM question WHERE quizid = $1", [id]
    )

    res.json(query.rows[qid-1]);
    console.log(query.rows[qid-1]);
})

// Increase Indivisual marks
app.get('/correct', (req, res) => {
    currentMarks = currentMarks + 10
    res.json('Done')
})

// Increase and get Marks
app.get('/improve-marks/:id', async (req, res) => {
    const query = await pool.query("UPDATE student SET total_marks = total_marks + $1 WHERE id = $2", [currentMarks, User.id]);

    const marks = currentMarks

    res.json(marks)
})

// add appeared quiz
app.get('/endquiz/:id', async (req, res) => {
    const id = req.params.id;

    const allappeared = await pool.query("SELECT * FROM appeared");
    const i = allappeared.rows.length
    const query = await pool.query("INSERT INTO appeared (id, stid, qzid, marks) VALUES ($1, $2, $3, $4)", [i, User.id, id, currentMarks]);

    console.log(query.rows[0]);
    currentMarks = 0

    res.json(query.rows[0])
})

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

// login
app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    const student = await pool.query(
        `SELECT * FROM student WHERE email = $1`,
        [email]);
    if (student.rows.length == 0){
        console.log('No User with email')
        res.send('No User with email')
    }

    else {
        const newStudent = student.rows[0]
        await bcrypt.compare(password, newStudent.password, (err, isMatched) => {
            if(err){
                res.send(err.message);
            }

            if (isMatched) {
                isLoggedIn = true
                User = newStudent
                console.log(newStudent)
                res.json('true')
            }
            else {
                console.log('Password incorrect')
                res.send('Password incorrect')
            }
        })
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