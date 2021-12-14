import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './prop/button';

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
      
      <header> 
        <span>고객센터</span>
        <ul>
          <li>자주 묻는 질문</li>
          <li>피해 사건 신고</li>
          <li>토스의 보안</li>
        </ul>  
      </header>

      <div className="topmain">
        <div className="topmain-inner">
          <h1>토스 고객센터에서 <br/>
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

          <div className='waiting'> 현재 상담대기 <span>보통</span></div>
          <div className='img-box'>            
            <img src={'https://core-cdn-fe.toss.im/image/optimize/?src=https://static.toss.im/3d/appcards-call-hand.png?&w=1920&q=75'} />
          </div>
        </div>
      </div>
    
      <div className="report">
        <div className='report-inner'>
          <h2>금전 피해를 입으셨나요?</h2>
          <p>혹시라도 토스에서 금전 피해를 입으셨다면 신고해주세요. 앞으로 고객님이 안심하고 토스를 쓰실 수 있도록, 토스의 잘못이 아니라도 피해 금액을 보상해드려요.</p>
        
          <div className="report-btns">
            <button>토스 계정을 잠시 잠그고 싶어요</button>
            <button>명의 도용 신고</button>
            <button>보이스피싱 신고</button>
            <button>휴대폰 불법개통 신고</button>
            <button>중고거래 사기 신고</button>
          </div>
        </div>
      </div>

      <div className="third-box">
        <h2>토스 안심보상제를 알려드릴게요</h2>
        <p>사칭, 보이스피싱 또는 중고거래 피해를 입으셨나요? <br/>
        너무 걱정하지 마세요. 토스 안심보상제가 있어요.</p>
        <Button width={100}>더 알아보기</Button>
      </div>

      <div className="help-box">
        <h2>무엇을 도와드릴까요? </h2>

        <ul>
          <li><Button width={600}>토스뱅크 통장 금리 변경 안내 </Button></li>
          <li><Button width={600}>토스유스카드 어떻게 사용하나요? </Button></li>
          <li><Button width={600}>토스유스카드 얼마나 쓸 수 있나요? </Button></li>
        </ul>
        자주 묻는 질문 전체보기
      </div>

      <div className="otherHelp-box">
        <h3>문제가 아직 해결되지 않았다면 <br/>
        언제든 연락해주세요</h3>
        <p>24시간 토스 고객센터 1599-4905</p>
      </div>

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