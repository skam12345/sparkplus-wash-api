const selectpromotiondetail = (seq_no) =>`
SELECT pim_prom_title as prom_title, LEFT(pim_start_date, 10) as start_date,
	LEFT(pim_end_date, 10) as end_date, pim_is_use as is_use,
	pim_prom_type as prom_type, pim_prom_contents as prom_contents 
FROM promotion_info 
WHERE 1=1 
	AND pim_seq_no = "${seq_no}"
`

module.exports = selectpromotiondetail;