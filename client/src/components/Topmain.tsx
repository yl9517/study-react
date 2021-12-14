import './Topmain.scss';

export default function Topmain() {

    return (
        <div className="topmain">
            <div className="topmain-inner">
                <h1>토스 고객센터에서
                    <br/>
                    24시간 상담받을 수 있어요!</h1>

                <div className="tel-box">
                    <div>
                        <p>피해·사기 상담</p>
                        <h4>1661-4905</h4>
                    </div>
                    <div className='line'></div>
                    <div>
                        <p>일반 상담</p>
                        <h4>1599-4905</h4>
                    </div>
                </div>

                <div className='waiting'>
                    현재 상담대기
                    <span>보통</span>
                </div>
                <div className='img-box'>
                    <img
                        src={'https://core-cdn-fe.toss.im/image/optimize/?src=https://static.toss.im/3d/appc' +
                                'ards-call-hand.png?&w=1920&q=75'}/>
                </div>
            </div>
        </div>
    )
}