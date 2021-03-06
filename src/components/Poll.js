import React,{useState} from 'react';

const Poll = () => {
    
    //==== Show poll ====
    let [show,setShow] = useState(false);

    let showPoll = (e)=>{

        let target = e.target;
        let grinHearts = document.querySelector('.fa-grin-hearts');
        let smileBeam = document.querySelector('.fa-smile-beam');
        let meh = document.querySelector('.fa-meh');
        let frown = document.querySelector('.fa-frown');
        let angry =  document.querySelector('.fa-angry');

        if(target.classList.contains('far')){
            setShow(true)
        }

        if(target.classList.contains('fa-grin-hearts')){
            smileBeam.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="green";
            answer.emoji="5";
            setAnswer({...answer});
        }else if(target.classList.contains('fa-smile-beam')){
            grinHearts.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="blue";
            answer.emoji="4";
            setAnswer({...answer});
        }else if(target.classList.contains('fa-meh')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="black";
            answer.emoji="3";
            setAnswer({...answer});
        }else if(target.classList.contains('fa-frown')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="yellow";
            answer.emoji="2";
            setAnswer({...answer});
        }else if(target.classList.contains('fa-angry')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            target.style.color="red";
            answer.emoji="1";
            setAnswer({...answer});
        }
    }

    // show  positive or negative answer Selection
    let [showBtn,setShowBtn] = useState(true);

    let positivePoints = ()=>{
        setShowBtn(true);
    }
    let negativePoints = ()=>{
        setShowBtn(false);
    }

    // Receive user input information
    let [answer,setAnswer] = useState({

        emoji:"",
        positivePoints:[],
        negativePoints:[],
        description:"",

    })

    const positiveOrNegativePoints = (sign,id,e)=>{
        if(sign==="positive"){

            let item = answer.positivePoints.indexOf(id);
            if(item<0){
                answer.positivePoints.push(id);
                setAnswer({...answer});
                e.target.style.backgroundColor="#9ee7a4";
                e.target.style.color="rgb(85, 85, 85)";
            }else{
                answer.positivePoints.splice(item,1);
                setAnswer({...answer});
                e.target.style.backgroundColor="white";
                e.target.style.color="black";
            }
        }else{
            let item = answer.negativePoints.indexOf(id);
            if(item<0){
                answer.negativePoints.push(id);
                setAnswer({...answer});
                e.target.style.backgroundColor="#f08080";
                e.target.style.color="rgb(85, 85, 85)";
            }else{
                answer.negativePoints.splice(item,1);
                setAnswer({...answer});
                e.target.style.backgroundColor="white";
                e.target.style.color="black";
            }
        }
    }

    // text Area value
    let textArea = (e)=>{
        answer.description=e.target.value;
        setAnswer({...answer});
    }

    // show message after submited form
    const submitBtn = (e)=>{
        e.preventDefault();
        let ms=document.querySelector('#message');
        ms.style.display="block";
        console.log(answer);
        setTimeout(() => {
            ms.style.display="none";
        }, 2000);
    }

    return (
        <div>
            <div className="container">
                <div className="poll">
                    <div className="text-box">
                        <h3>?????????? ??????????</h3>
                        <p>???????? ?????? ?????????? ?????????? ?????????? ?????????? ?????? ???? ?????? ???? ?????????????? ???????? ????????????????</p>
                    </div>

                    <div className="poll-box">
                        <p>???? ?????? ?????????? ???????? ?????? ?????? ???????? ????????</p>
                        <div className="icones" onClick={showPoll}>
                            <i className="far fa-grin-hearts"></i>
                            <i className="far fa-smile-beam"></i>
                            <i className="far fa-meh"></i>
                            <i className="far fa-frown"></i>
                            <i className="far fa-angry"></i>
                        </div>
                        {show ? <div className="answer">
                            <button className="btn positive-btn" onClick={positivePoints}>???????? ????????</button>
                            <button className="btn negative-btn" onClick={negativePoints}>???????? ????????</button>
                            <div className="answer-Selection">

                                {showBtn ? 
                                    <div className="positive-answer-Selection">
                                        <ul>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",1)}>???????????????? ????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",2)}>???????? ??????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",3)}>???????? ??????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",4)}>?????????? ????????????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",5)}>?????????? ???? ??????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"positive",6)}>?????????? ??????????</li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="negative-answer-Selection">
                                        <ul>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",1)}>???????????????? ????????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",2)}>???????? ?????? ??????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",3)}>???????? ??????????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",4)}>?????????? ????????????????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",5)}>?????????? ???? ??????????</li>
                                            <li onClick={positiveOrNegativePoints.bind(this,"negative",6)}>?????????? ??????????????</li>
                                        </ul>
                                    </div>
                                }
                                
                                </div>
                                <textarea id="text-area"  rows="10" placeholder="?????? ?????? ???? ???????? ???????? ..." onChange={textArea} value={answer.description}></textarea>
                                <div id="submit-btn">
                                    <button id="submit" onClick={submitBtn}>?????? ??????????????</button>
                                </div>
                                <p id="message">???????? ?????? ?????? ?????????? .</p>
                            </div> 
                        : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poll;
