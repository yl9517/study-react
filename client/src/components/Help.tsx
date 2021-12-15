import './Help.scss';

export default function Help() {
  return (
    <div className="help-wrap">
      <div className='help-inner'>

        <h2>무엇을 도와드릴까요? </h2>
        <input className="input__field" placeholder="이용법, 혜택, 불편함 등 무엇이든 검색해보세요" aria-label="이용법, 혜택, 불편함 등 무엇이든 검색해보세요" id="input-1"></input>
        <ul>
          <li>토스뱅크 통장 금리 변경 안내 </li>
          <li>토스유스카드 어떻게 사용하나요? </li>
          <li>토스유스카드 얼마나 쓸 수 있나요? </li>
        </ul>
        <a href="#">자주 묻는 질문 전체보기</a>
      </div>
    </div>
  )
}