const selectproddetail = (seq_no) =>`
SELECT pin_prod_name as prod_name, pin_prod_type as prod_type,
	pin_prod_fee as prod_fee, pin_is_use as is_use,
	pin_dc_fee as dc_fee, LEFT(pin_reg_date, 10) as reg_date 
FROM product_info 
WHERE 1=1 
	AND pin_seq_no = "${seq_no}"
`

module.exports = selectproddetail;