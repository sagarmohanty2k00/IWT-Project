import React, { useState } from 'react'

function Dashboard(props) {
    const [qzid, setQzid] = useState(0)

    const quiz_list = [
        { name: "sagar" },
        { name: "Anwesha" },
        { name: "Anwesha" },
        { name: "Anwesha" },
        { name: "Anwesha" },
    ];

    // const question_list = [
    //     {
    //         id: 1,
    //         q : 'what is this?',

    //         a: 'cat',
    //         b: 'dog',
    //         c: 'apple',
    //         d: 'ball',

    //         ans: 'a'
    //     },
    //     {
    //         id: 2,
    //         q : 'what is this?',

    //         a: 'cat',
    //         b: 'dog',
    //         c: 'apple',
    //         d: 'ball',

    //         ans: 'a'
    //     },
    //     {
    //         id: 3,
    //         q : 'what is this?',

    //         a: 'cat',
    //         b: 'dog',
    //         c: 'apple',
    //         d: 'ball',

    //         ans: 'b'
    //     },
    //     {
    //         id: 4,
    //         q : 'what is this?',

    //         a: 'cat',
    //         b: 'dog',
    //         c: 'apple',
    //         d: 'ball',

    //         ans: 'b'
    //     },
    //     {
    //         id: 5,
    //         q : 'what is this?',

    //         a: 'cat',
    //         b: 'dog',
    //         c: 'apple',
    //         d: 'ball',

    //         ans: 'b'
    //     },
    // ]

    // const [mode, setMode] = useState('view-ersult') // can be 'appear-quiz' 'view-result' 'view-appeared-quiz' 'leaderboard' 'profile'

        return (
            <div className="body">
                <h1 className="Greeting mb-5">Hi {props.name} You have {props.number} quiz to appear</h1>

                <div className="row">
                    {quiz_list.map((quiz, i) => (
                        <div id={i} className="mt-3 mb-3 col-lg-3 col-md-4 col-md-6 col-12">
                            <div className="card m-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="card-link btn btn-success" onClick={() => {
                                        console.log({i});
                                        setQzid(i);
                                        // setMode('appear-quiz')
                                    } }>Appear</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        );


    // if (mode === 'appeared-quiz'){
    //     return (
    //         <div className="body">
    //             <h1 className="Greeting mb-5">Hi {props.name} You have {props.number} quiz to appear</h1>

    //             <div className="row">
    //                 {quiz_list.map((quiz, i) => (
    //                     <div id={i} className="mt-3 mb-3 col-lg-3 col-md-4 col-md-6 col-12">
    //                         <div className="card m-auto">
    //                             <div className="card-body">
    //                                 <h5 className="card-title">Card title</h5>
    //                                 <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //                                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //                                 <button className="card-link btn btn-success" onClick={() => {
    //                                     console.log({i});
    //                                     setQzid(i);
    //                                     setMode('appear-quiz')
    //                                 } }>Appear</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>

    //         </div>
    //     );
    // }

    // else if (mode === 'view-result'){
    //     return (
    //         <div className="body">
    //             <h1>Result of {qzid}</h1>
    //         </div>
    //     );
    // }

    // else if (mode === 'appear-quiz'){
    //     const check = (id, optselected) => {
    //         document.getElementById(id).color('green')
    //     }
    //     return (
    //         <div className="body">
    //             {question_list.map((question, i) => (
    //                 <div className="question">
    //                     <h3>{i+1}. {question.q}</h3>
    //                     <form className='question__apear' action="#">
    //                         <div className="row">
    //                             <div className="form-check col-6">
    //                                 <input onChange={() => {
    //                                     if (document.getElementById('a'+(question.id)).value === question.ans) {
    //                                         document.getElementById('l'+(question.id)).style = "color: green;";
    //                                     }
    //                                     else{
    //                                         document.getElementById('l'+(question.id)).style = "color: red;";
    //                                         if(document.getElementById('a'+(question.id+1)).value === question.ans){
    //                                             document.getElementById('l'+(question.id+1)).style = "color: green;";
    //                                         }
    //                                         else if(document.getElementById('a'+(question.id+2)).value === question.ans){
    //                                             document.getElementById('l'+(question.id+2)).style = "color: green;";
    //                                         }
    //                                         else{
    //                                             document.getElementById('l'+(question.id+3)).style = "color: green;";
    //                                             console.log(question.ans)
    //                                             console.log('l'+(question.id+3))
    //                                         }
    //                                     }
    //                                 }} 
    //                                 className="form-check-input" type="radio" name="flexRadioDefault" value="a"  id={'a'+(question.id)} />
    //                                 <label id={'l'+(question.id)} value="a" className="form-check-label" for="flexRadioDefault1">
    //                                     {question.a}
    //                                 </label>
    //                             </div>
    //                             <div className="form-check col-6">
    //                                 <input onChange={() => {
    //                                     console.log(`Selected 1 ${question.id}`)
    //                                 }} className="form-check-input" type="radio" name="flexRadioDefault" value="b" id={'a'+(question.id+1)} />
    //                                 <label id={'l'+(question.id+1)} value="b" className="form-check-label" for="flexRadioDefault2">
    //                                     {question.b}
    //                                 </label>
    //                             </div>
    //                             <div className="form-check col-6">
    //                                 <input onChange={() => {
    //                                     console.log(`Selected 1 ${question.id}`)
    //                                 }} className="form-check-input" type="radio" name="flexRadioDefault" value="c" id={'a'+(question.id+2)} />
    //                                 <label id={'l'+(question.id+2)} value="c" className="form-check-label" for="flexRadioDefault1">
    //                                     {question.c}
    //                                 </label>
    //                             </div>
    //                             <div className="form-check col-6">
    //                                 <input onChange={() => {
    //                                     console.log(`Selected 1 ${question.id}`)
    //                                 }} className="form-check-input" type="radio" name="flexRadioDefault" value="d" id={'a'+(question.id+3)} />
    //                                 <label id={'l'+(question.id+3)} value="d" className="form-check-label" for="flexRadioDefault1">
    //                                     {question.d}
    //                                 </label>
    //                             </div>
    //                         </div>
    //                     </form>
    //                 </div>
    //             ))}
    //         </div>
    //     );
    // }
}

export default Dashboard
