import './Head.scss';
import toss from '../styles/images/toss.png';
//import styled from 'styled-components';
import { useEffect, useState } from 'react';
import find from '../styles/images/find.svg'

export default function Header() {
    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false);

    function handleScroll() {
        if (ScrollY > 50) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
          } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
          }
    }
    useEffect(() => {
        function scrollListener() {
          window.addEventListener("scroll", handleScroll);
        } //  window 에서 스크롤을 감시 시작
        
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
      });


  return (
    // <div className='header-wrap'>
    <div className={ScrollActive ? "header-wrap scroll" : "header-wrap"}>
      <header>
        <img src={toss} className='toss-logo' />
        <span>고객센터</span>

        <ul>
          <li>자주 묻는 질문</li>
          <li>피해 사건 신고</li>
          <li>토스의 보안</li>
          <li><img className='find' src={find}/></li>
        </ul>
      </header>
    </div>
  )
}