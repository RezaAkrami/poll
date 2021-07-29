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
        }else if(target.classList.contains('fa-smile-beam')){
            grinHearts.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="blue";
        }else if(target.classList.contains('fa-meh')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="black";
        }else if(target.classList.contains('fa-frown')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            angry.style.color="#d1d6db";
            target.style.color="yellow";
        }else if(target.classList.contains('fa-angry')){
            grinHearts.style.color="#d1d6db";
            smileBeam.style.color="#d1d6db";
            meh.style.color="#d1d6db";
            frown.style.color="#d1d6db";
            target.style.color="red";
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

    return (
        <div>
            <div className="container">
                <div className="poll">
                    <div className="text-box">
                        <h3>کاربر گرامی</h3>
                        <p>لطفا جهت بهبود کیفیت خدمات ارايه شده به شما در نظرسنجی شرکت بفرمایید</p>
                    </div>

                    <div className="poll-box">
                        <p>بر روی تصویر مورد نظر خود کلیک کنید</p>
                        <div className="icones" onClick={showPoll}>
                            <i className="far fa-grin-hearts"></i>
                            <i className="far fa-smile-beam"></i>
                            <i className="far fa-meh"></i>
                            <i className="far fa-frown"></i>
                            <i className="far fa-angry"></i>
                        </div>
                        {show ? <div className="answer">
                            <button className="btn positive-btn" onClick={positivePoints}>نکات مثبت</button>
                            <button className="btn negative-btn" onClick={negativePoints}>نکات منفی</button>
                            <div className="answer-Selection">

                                {showBtn ? 
                                    <div className="positive-answer-Selection">
                                        <ul>
                                            <li>پاسخگویی سریع</li>
                                            <li>پاسخ تخصصی</li>
                                            <li>قیمت مناسب</li>
                                            <li>رفتار محترمانه</li>
                                            <li>خدمات با کیفیت</li>
                                            <li>رفتار مناسب</li>
                                        </ul>
                                    </div>
                                    :
                                    <div className="negative-answer-Selection">
                                        <ul>
                                            <li>پاسخگویی طولانی</li>
                                            <li>پاسخ غیر تخصصی</li>
                                            <li>قیمت نامناسب</li>
                                            <li>رفتار نامحترمانه</li>
                                            <li>خدمات بی کیفیت</li>
                                            <li>رفتار نامناسب</li>
                                        </ul>
                                    </div>
                                }
                                
                            </div>
                            <textarea id="text-area"  rows="10" placeholder="متن خود را وارد کنید ..."></textarea>
                            <div id="submit-btn">
                                <button id="submit">ثبت نظرسنجی</button>
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poll;
