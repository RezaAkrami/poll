import React from 'react';

const Poll = () => {
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
                        <div className="icones">
                            <i class="far fa-grin-hearts"></i>
                            <i class="far fa-smile-beam"></i>
                            <i class="far fa-meh"></i>
                            <i class="far fa-frown"></i>
                            <i class="far fa-angry"></i>
                        </div>
                        <div className="answer">
                            <button className="btn positive-btn">نکات مثبت</button>
                            <button className="btn negative-btn">نکات منفی</button>
                            <div className="answer-Selection">
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
                                
                            </div>
                            <textarea id="text-area"  rows="10" placeholder="متن خود را وارد کنید ..."></textarea>
                            <div id="submit-btn">
                                <button id="submit">ثبت نظرسنجی</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poll;
