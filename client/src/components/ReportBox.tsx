import './ReportBox.scss';
import lock from '../styles/images/lock.svg'
import report2 from '../styles/images/report2.svg'
import report3 from '../styles/images/report3.svg'
import report4 from '../styles/images/report4.svg'
import report5 from '../styles/images/report5.svg'

export default function ReportBox() {

	return(
		<div className="report">
			<div className='report-inner'>
				<h2>금전 피해를 입으셨나요?</h2>
				<p>혹시라도 토스에서 금전 피해를 입으셨다면 신고해주세요. 앞으로 고객님이 안심하고 토스를 쓰실 수 있도록, 토스의 잘못이 아니라도 피해 금액을 보상해드려요.</p>
			
				<div className="report-btns">
					<button> <span><img src={lock}/></span><span>토스 계정을 잠시 잠그고 싶어요</span></button>
					<button className='secondBtn'> <span><img src={report2}/></span> <span>명의 도용 신고</span></button>
					<button className='secondBtn'> <span><img src={report3}/></span> <span>보이스피싱 신고</span></button>
					<button className='secondBtn'> <span><img src={report4}/></span> <span>휴대폰 불법개통 신고</span></button>
					<button className='secondBtn'> <span><img src={report5}/></span> <span>중고거래 사기 신고</span></button>
				</div>
			</div>
		</div>
	)
}