import './Relief.scss';
import styled from "styled-components"

export default function Relief() {

	const ReliefWrap = styled.div`
	
	`;

	return (

		<div className="relief-wrap">
			<div className="relief-inner">
				<h2>토스 안심보상제를 알려드릴게요</h2>
				<p>사칭, 보이스피싱 또는 중고거래 피해를 입으셨나요? <br/>
						너무 걱정하지 마세요. 토스 안심보상제가 있어요.</p>
				<button>더 알아보기</button>
				<img src={'https://core-cdn-fe.toss.im/image/optimize/?src=https://static.toss.im/3d/appcards-shield-two.png?&w=640&q=75'}/>
			</div>
		</div>
		)
}