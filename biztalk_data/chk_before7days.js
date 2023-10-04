const chkbefore7days = (car_no, membership_end_date , get_date, pay_product, option_product, update_date , start_date, end_date, membership_pay) =>`
스파크플러스(중리점) 세차장 입니다.
${car_no}님, 안녕하세요.

월멤버쉽 갱신 관련 사전 고지 전달 드립니다.
${membership_end_date} 이후 아래와 같이 자동 갱신됨을 고지 드립니다.

■ 차량번호: ${car_no}
■ 구매일시: ${get_date}
■ 구매내역: ${pay_product}
■ 옵션내역: ${option_product}
■ 갱신일시: ${update_date}
■ 멤버쉽 기간: ${start_date} ~ ${end_date} 
■ 결제예정금액: ${membership_pay} 
`
module.exports = chkbefore7days;