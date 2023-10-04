const updatecouponinfo = (coupon_code) =>`
UPDATE coupon_info set 
	cin_is_use = 'N',
	cin_use_date = NOW() 
WHERE cin_coupon_code = "${coupon_code}"
`

module.exports = updatecouponinfo;