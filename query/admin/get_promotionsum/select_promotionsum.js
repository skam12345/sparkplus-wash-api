const selectpromotionsum = (title) =>`
SELECT COUNT(pim_seq_no) as account_fee  
FROM promotion_info a LEFT JOIN code_info b ON a.pim_prom_type = b.cin_code 
WHERE 1=1 
	AND a.pim_prom_title LIKE "%${title}%"
`

module.exports = selectpromotionsum;