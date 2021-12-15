// import './Head.scss';
import toss from '../styles/images/toss.png';
import styled from 'styled-components';

export default function Header() {

  const HeaderWrap = styled.div`
    width: 100%;
    background-color: #eef6f3;

    & > header {
      width: 100%;
      height: 100%;
      margin: auto;
      max-width: 1140px;
      margin: 0 auto;
      height: 50px;
      display: flex;
      align-items: center;

      .toss-logo {
          width: 100px;
      }
      ul {
        list-style: none;
        display: flex;
        max-height: 100%;
        justify-content: flex-end;
        flex: 1;
        align-items: center;

        li {
          margin-left: 20px;
          padding: 10px 12px;
          align-items: center;
          font-size: 15px;
        }
      }
    }
  `;


  return (
    // <div className='header-wrap'>
    <HeaderWrap>
      <header>
        <img src={toss} className='toss-logo' />

        <span>고객센터</span>

        <ul>
          <li>자주 묻는 질문</li>
          <li>피해 사건 신고</li>
          <li>토스의 보안</li>
        </ul>
      </header>
    </HeaderWrap>
  )
}