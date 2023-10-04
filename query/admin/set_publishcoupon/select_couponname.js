const selectcouponname = (coupon_type) =>`
SELECT cin_code_name as coupon_name FROM code_info 
WHERE cin_code = "${coupon_type}"
`

module.exports = selectcouponname;