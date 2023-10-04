const sendpmember = (car_no, phone_no, reg_date)=>`
스파크플러스(중리점) 세차장 입니다.
${car_no}님, 안녕하세요.

회원 가입을 축하드립니다.

▶ 차량번호: ${ car_no }
▶ 연락처: ${ phone_no }
▶ 가입일시: ${ reg_date }
`

module.exports = sendpmember;