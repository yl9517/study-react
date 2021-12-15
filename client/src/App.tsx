import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Head';
import Topmain from './components/Topmain';
import ReportBox from './components/ReportBox';
import Relief from './components/Relief';
import Help from './components/Help';
import Call from './components/Call';

function App() {
  const alarm = () => {
    alert("Hi~");
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       react
    //       <Button width={100} onClick={alarm}></Button>
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
    //   </header>
    // </div>

    <div>
      <Header></Header>
      <Topmain></Topmain>
      <ReportBox></ReportBox>
      <Relief></Relief>
      <Help></Help>
      <Call></Call>

      <div className="bottom-box">
        <ul>
          <li><b>서비스</b></li>
          <li>공지사항</li>
          <li>자주 묻는 질문</li>
          <li>공동인증서 관리</li>
          <li>계정 일시잠금</li>
          <li>고객센터</li>
          <li>브랜드리소스센터</li>
        </ul>
        <ul>
          <li><b>회사</b></li>
          <li>회사 소개</li>
          <li>토스페이먼츠</li>
          <li>토스인슈어런스</li>
          <li>토스증권</li>
          <li>토스씨엑스</li>
          <li>토스뱅크</li>
          <li>채용</li>
          <li>블로그</li>
          <li>공고</li>
        </ul>
        <ul>
          <li><b>문의</b></li>
          <li>사업 제휴</li>
          <li>광고 문의</li>
          <li>인증 사업 문의</li>
          <li>마케팅·PR</li>
          <li>IR</li>
        </ul>
        <ul>
          <li><b>고객센터</b></li>
          <li>전화: 1599-4905(24시간 연중무휴)</li>
          <li>이메일(고객전용): support@toss.im</li>
          <li>이메일(외부기관전용): support-af@toss.im</li>
          <li>민원 접수</li>
        </ul>
      </div>

      <footer>
        <b>(주)비바리퍼블리카</b>
        <p>사업자 등록번호 : 120-88-01280 | 대표 : 이승건<br/>
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 : 2014-서울강남-03377 사업자정보확인<br/>
          06236 서울특별시 강남구 테헤란로 142, 12층 (역삼동, 아크플레이스)<br/>
          고객센터 : 서울특별시 강남구 테헤란로 133, 8층 (역삼동, 한국타이어빌딩)</p>
      </footer>


    </div>
 
  );
}

export default App;