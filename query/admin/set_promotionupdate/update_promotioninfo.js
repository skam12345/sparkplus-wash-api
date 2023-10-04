const updatepromotioninfo = (prom_title, start_date, end_date, is_use, 
    prom_type, prom_contents, seq_no) =>`
    UPDATE promotion_info SET 
	pim_prom_title 		= "${prom_title}",
	pim_start_date		= "${start_date}",
	pim_end_date		= "${end_date}",
	pim_is_use			= "${is_use}",
	pim_prom_type		= "${prom_type}",
	pim_prom_contents	= "${prom_contents}" 
WHERE pim_seq_no	= "${seq_no}"
    `

module.exports = updatepromotioninfo;