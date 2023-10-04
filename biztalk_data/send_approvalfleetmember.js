const sendapprovalfleetmember = (fleet_id, phone_no, approval_date) =>`
스파크플러스(중리점) 세차장 입니다.
${fleet_id}님, 안녕하세요.

회원 가입승인이 이루어졌습니다.

▶ FLEET 아이디: ${fleet_id}
▶ 연락처: ${phone_no}
▶ 신청일시: ${approval_date}
`

module.exports = sendapprovalfleetmember;