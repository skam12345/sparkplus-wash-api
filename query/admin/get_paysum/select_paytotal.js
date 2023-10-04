const selectpaytotal = (start_date, end_date, terminal_type, auth_type, buy_type) =>`
SELECT IFNULL(SUM(a.wpd_pay_fee),0) as amount_fee, COUNT(a.wpd_pay_fee) as account_fee  
FROM wash_pay_data a LEFT JOIN payment_approval b ON a.wpd_seq_no = b.wpd_seq_no
	LEFT JOIN code_info c ON a.wpd_terminal_type = c.cin_code 
	LEFT JOIN code_info d ON a.wpd_auth_type = d.cin_code 
	LEFT JOIN code_info e ON a.wpd_buy_type = e.cin_code 
	LEFT JOIN code_info f ON a.wpd_pay_type = f.cin_code 
WHERE 1=1
	AND LEFT(a.wpd_pay_date,10) >= "${start_date}" AND LEFT(a.wpd_pay_date,10) <= "${end_date}" 
	AND c.cin_code LIKE "${terminal_type}%"
	AND d.cin_code LIKE "${auth_type}%"
	AND e.cin_code LIKE "${buy_type}%"
`

module.exports = selectpaytotal;