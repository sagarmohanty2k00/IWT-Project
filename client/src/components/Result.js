import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Result(props) {
    const { id } = useParams();
    const passMarks = 30;
    const fullMarks = 100;
    const [marks, setMarks] = useState(20)
    var passOrFail;
    const initiate = async () => {
        const query = await fetch('http://127.0.0.1:1221/improve-marks');
        const q = await query.json();
        setMarks(parseInt(q))
        
        const query1 = await fetch(`http://127.0.0.1:1221/endquiz/${id}`);
        const q1 = await query1.json();
    }
    initiate()

    if (marks >= passMarks) {
        passOrFail = 'PASSED'
    }
    else {
        passOrFail = 'FAILED'
    }

    return (
        <div className="box-container__big">
            <div className="result-page">
                <h1 className="mb-5">RESULT : </h1>
                <h2 className="mb-5">Quiz : Pysics {id}</h2>
                <h2 className="mb-5">Full Marks : {fullMarks}</h2>
                <h2 className="mb-5">Marks : {marks}</h2>
                <h2 className="mb-5">Pass Marks : {passMarks}</h2>
                <h2 className="mx-auto">" YOU HAVE {passOrFail}. "</h2>
            </div>
        </div>
    )
}

export default Result