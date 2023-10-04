const selectmembershipsum = (start_date, end_date, reg_type, use_status, car_no) =>`
SELECT COUNT(a.mpd_seq_no) as account_seq  
FROM membership_pay_data a LEFT JOIN code_info b ON a.mpd_reg_type = b.cin_code 
	LEFT JOIN code_info c ON a.mpd_use_status = c.cin_code 
	LEFT JOIN product_info d ON a.pin_seq_no = d.pin_seq_no 
WHERE 1=1  
    AND LEFT(a.mpd_start_date,10) >= "${start_date}" AND LEFT(a.mpd_start_date,10) <= "${end_date}" 
    AND b.cin_code LIKE "${reg_type}%"
    AND c.cin_code LIKE "${use_status}%"
    AND a.mpd_car_no LIKE "%${car_no}%"
`
module.exports = selectmembershipsum;