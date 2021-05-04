import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Quiz() {
    const { id, qid } = useParams();
    let button = 'NEXT'
    let link = ''

    const [question, setQuestion] = useState({})

    if (parseInt(qid) >= 10){
        button = 'Finish'
        link = '/result/'+id+'/'
    }

    else {
        link = '/appear/'+id+'/'+(parseInt(qid)+1)+'/'
    }

    const initiate = async () => {
        try {
            const query = await fetch(`http://127.0.0.1:1221/question/${id}/${qid}`);
            const result = await query.json()

            setQuestion(result)
        } catch (err) {
            console.log(err.message);
        }
    }
    let ans = ''

    const handleChange = async () => {
        const ansid = 'op'+ans
        const correctop = 'op'+question.correct

        console.log(ans);

        document.getElementById('op11').disabled = true
        document.getElementById('op22').disabled = true
        document.getElementById('op33').disabled = true
        document.getElementById('op44').disabled = true

        if (parseInt(ans) == parseInt(question.correct)){
            document.getElementById(ansid).style.color = 'green'
            const response = await fetch('http://127.0.0.1:1221/correct')
        }
        else{
            document.getElementById(ansid).style.color = 'red'
            console.log(ansid);
            document.getElementById(correctop).style.color = 'green'
        }

        document.getElementById('btn').classList.remove('d-none')

    }

    useEffect(async () => {
        initiate()
    }, []);

    return (
        <div className="box-container__big">
            <h1>Question : {parseInt(qid)}/10</h1>
            <h1>{question.question_text}</h1>

            <div className="options">
                <div className='option-row'>
                    <div>
                        <input type="radio" name="" id="op11" onChange={() =>{
                            ans = '1';
                            handleChange();
                            }} />
                        <label htmlFor="" id="op1">{question.op1}</label>
                    </div>
                    <div>
                        <input type="radio" name="" id="op22" onChange={() =>{
                            ans = '2';
                            handleChange();
                            }} />
                        <label htmlFor="" id="op2">{question.op2}</label>
                    </div>
                </div>

                <div className='option-row'>
                    <div>
                        <input type="radio" name="" id="op33" onChange={() =>{
                            ans = '3';
                            handleChange();
                            }} />
                        <label htmlFor="" id="op3">{question.op3}</label>
                    </div>
                    <div>
                        <input type="radio" name="" id="op44" onChange={() =>{
                            ans = '4';
                            handleChange();
                            }} />
                        <label htmlFor="" id="op4">{question.op4}</label>
                    </div>
                </div>
            </div>
            <button className="btn btn-success d-none">CHECK</button>
            <a href={link} id="btn" className='d-none'>
                <button className="btn btn-primary">{button}</button>
            </a>
        </div>
    )
}

export default Quiz
