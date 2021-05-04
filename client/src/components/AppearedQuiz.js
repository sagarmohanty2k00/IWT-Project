import React, { useState } from 'react'

function AppearedQuiz(props) {
    const [qzid, setQzid] = useState(0)
    const quiz_link = '/appear'

    const quiz_list = [
        { name: "sagar" },
        { name: "Anwesha" },
        { name: "Anwesha" },
        { name: "Anwesha" },
        { name: "Anwesha" },
    ];
    return (
        <div className="box-container__big">
            <center>
                <h1 className="greeting mb-5">Hi {props.name} You have appeared {props.number+1} quizes.</h1>
            </center>

            <div className="row body">
                {quiz_list.map((quiz, i) => (
                    <div id={i} className="mt-3 mb-3 col-lg-3 col-md-4 col-md-6 col-12">
                        <div className="card m-auto">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href={'/result/'+i} ><button className="card-link btn btn-success" onClick={() => {
                                    console.log({i});
                                    setQzid(i);
                                    // setMode('appear-quiz')
                                } }>result</button></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default AppearedQuiz
