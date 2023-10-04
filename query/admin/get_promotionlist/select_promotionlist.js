const selectpromotionlist = (title) =>
`
SELECT a.pim_prom_title as prom_title, LEFT(a.pim_start_date, 10) as start_date,
	LEFT(a.pim_end_date, 10) as end_date, a.pim_is_use as is_use,
	b.cin_code_name as prom_type_name, LEFT(a.pim_reg_date,10) as reg_date,
	a.pim_seq_no as seq_no  
FROM promotion_info a LEFT JOIN code_info b ON a.pim_prom_type = b.cin_code 
WHERE 1=1 
	AND a.pim_prom_title LIKE "%${title}%"
ORDER BY a.pim_reg_date DESC 
`

module.exports = selectpromotionlist;