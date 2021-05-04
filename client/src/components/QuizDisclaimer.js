import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function QuizDisclaimer() {
    const { id } = useParams();
    
    const [mode, setMode] = useState("appear")

    useEffect(async () => {
        try {
            const query = await fetch (`http://127.0.0.1:1221/checkquiz/:${id}`);
            const result = await query.json()

            console.log(result);

            if(result === 'Aleady Appeared'){
                window.location.assign(`/result/${id}`)
            }
        } catch (err) {
            console.log(err.message);
        }
    }, []);
    
    return (
        <div className="box-container__big">
            <h1>Hello you have not appeared the quiz </h1>
            <a className="btn btn-primary" href={'/appear/'+id+'/1/'} >START</a>
        </div>
    )
}

export default QuizDisclaimer
