import './Head.scss';
import toss from '../styles/images/toss.png';

export default function Header() {

    return (
        <div className='header-wrap'>
            <header className='head-container'>
                <img src={toss} className='toss-logo'/>

                <span>고객센터</span>

                <ul>
                    <li>자주 묻는 질문</li>
                    <li>피해 사건 신고</li>
                    <li>토스의 보안</li>
                </ul>
            </header>
        </div>
    )
}