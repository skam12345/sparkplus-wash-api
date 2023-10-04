const deleteexcouponinfo = (coupon_no) =>`
DELETE FROM coupon_info 
WHERE cin_coupon_code = "${coupon_no}"
`

module.exports = deleteexcouponinfo;