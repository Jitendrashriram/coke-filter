import React from 'react'
// import cocacan from '../assets/img/coca-can.png'
// import cocashade from '../assets/img/coca-shade.png'
// import flower from '../assets/img/flower.png'
// import flame1 from '../assets/img/flame-1.png'
import bottletop from '../assets/img/bottle-top.png'
import sharewinbg from '../assets/img/circle-bubble-bg.png'

import sharetowinleftweek from '../assets/img/sharetowin-left-week.png'
import sharetowinRightweek from '../assets/img/sharetowin-right-week.png'

// import sharetowinleftcokeb from '../assets/img/sharetowin-right-week-cokeb.png'
// import sharetowinrighcokeb from '../assets/img/sharetowin-left-week-cokeb.png'





import { useNavigate } from 'react-router'

function ShareToWinPage() {
    let navigate = useNavigate()

    return (
        <div className="page sharetowin fl-col align-center just-center">
            <h2 className="sharetowin__header">SHARE TO WIN</h2>
            <div className="sharetowin__group">
                <p className="sharetowin__text">
                    Simply complete and share the challenge on Facebook.
                </p>
                <p className="sharetowin__text">
                    Tell us also who you want to share a Coke with this
                </p>
                <p className="sharetowin__text">
                    CNY and why!
                </p>
            </div>
            <div className="sharetowin__group">
                <p className="sharetowin__text">
                    {/* Top Creative entries will win weekly prizes! */}
                    Top Creative entries will win weekly prizes!
                </p>
            </div>
            {/* <div className="sharetowin__group score__can-img">
                <img src={cocacan} alt="" className="img" />
                <img src={cocashade} alt="" className="shade" />
                <img src={flame1} alt="" className="flame flame-1" />
                <img src={flame1} alt="" className="flame flame-2" />
                <div className="vouchers vouchers--1">
                    VOUCHERS
                    <img src={flower} alt="" className="flower flower--1" />
                    <img src={flower} alt="" className="flower flower--2" />
                </div>
                <div className="vouchers vouchers--2">
                    VOUCHERS
                    <img src={flower} alt="" className="flower flower--1" />
                    <img src={flower} alt="" className="flower flower--2" />
                </div>
                <div className="advert advert--1">
                    <p className="inner-text">Week 2 (17-23 Jan 2022)</p>
                    <p className="inner-text">x50 Coca-Cola Hamper</p>
                </div>
                <div className="advert advert--2">
                    <p className="inner-text">Week 1 (10 -16 Jan 2021)</p>
                    <p className="inner-text">x50 1-year supply of Coca-Cola</p>
                </div>
                <div className="advert advert--3">
                    <p className="inner-text">Week 4 (31-6 Feb 2022)</p>
                    <p className="inner-text">x20 Reunion Dinner Vouchers</p>
                </div>
                <div className="advert advert--4">
                    <p className="inner-text">Week 3 (24 -30 Jan 2022)</p>
                    <p className="inner-text">x50 Yu Sheng Vouchers</p>
                </div>
            </div> */}

          
    <div class="page sharetowin fl-col align-center just-center">
        <div className="sharetowingraph">
            
            <img src={sharewinbg} alt="" className="stwbgraph" /> 

                <div className="stwLeftGrph">
                    <img src={sharetowinleftweek} className="stwLeftGrphimg" />
                    <div className="stwtextwrapL">   
                    <p className="stw-intext">Salmon yu sheng</p>
                    <p className="stw-intext">X Coke Bundle</p>
                    </div>
                    {/* <img src={sharetowinleftcokeb} className="stwLeftGrphimgcoke" />                                  */}
                </div>
                
                <div className="stwRightGrph">
                    <img src={sharetowinRightweek} className="stwrightGrphimg" /> 
                        <div className="stwtextwrapR">
                            <p className="stw-intext">Coke Reunion</p>
                            <p className="stw-intext">Dinner</p>
                        </div>
                    {/* <img src={sharetowinrighcokeb} className="stwLeftGrphimgcoke" />                    */}
                </div>
                           
        </div>

        <div className="sharetowin__group" style={{marginTop: '40px'}}>
            <img src={bottletop} alt="" className="bottletop" />
            <button onClick={() => navigate('/winners')} className="img-btn img-btn--medium">WINNER LIST</button>
        </div>
    </div>

</div>
    )
}

export default ShareToWinPage
