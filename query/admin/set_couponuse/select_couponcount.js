const selectcounponcount = (coupon_code, coupon_type) =>`
SELECT COUNT(*) AS coupon_count FROM coupon_info 
WHERE cin_coupon_code = "${coupon_code}"
AND cin_coupon_type =  "${coupon_type}"
`
module.exports = selectcounponcount;