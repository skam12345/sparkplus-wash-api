const getonetimewash = (car_no, get_date, pay_product, option_product, pay_fee, approval_no) =>`
스파크플러스(중리점) 세차장 입니다.
${car_no}님, 안녕하세요.

구매하신 1회권 정보를 안내 드립니다.

■ 차량번호: ${car_no}
■ 구매일시: ${get_date}
■ 구매내역: ${pay_product}
■ 옵션내역: ${option_product}
■ 결제금액: ${pay_fee}
■ 결제승인번호: ${approval_no}
 
1회권 구매 내역은 모바일 앱 결제내역에서 확인 가능합니다.
1회권 사용시 현장에서 결제내역의 QR Code를 사용해 주세요.
`

module.exports = getonetimewash;