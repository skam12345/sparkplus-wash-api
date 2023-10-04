const getmembershipwash = (car_no, get_date, pay_product, option_product, start_date, end_date,  total_pay, approval_no) =>`
스파크플러스(중리점) 세차장 입니다.
${car_no}님, 안녕하세요.

구매하신 월멤버쉽 정보를 안내 드립니다.

■ 차량번호: ${car_no}
■ 구매일시: ${get_date}
■ 구매내역: ${pay_product}
■ 옵션내역: ${option_product}
■ 멤버쉽 기간: {${start_date} ~ ${end_date}}
■ 결제금액: ${total_pay}
■ 결제승인번호: ${approval_no}
 
월멤버쉽은 정기구독 상품으로써, 완료기간 이후 등록하신 카드로
자동갱신 됩니다. 
`

module.exports = getmembershipwash;