const updatecouponinfo = (seq_no) =>`
UPDATE coupon_info SET 
   cin_is_use = 'N'       
WHERE wpd_seq_no = "${seq_no}"
   AND cin_is_use = 'Y'
`

module.exports = updatecouponinfo;