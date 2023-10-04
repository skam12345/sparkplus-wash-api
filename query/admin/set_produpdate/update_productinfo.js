const updateproductinfo = (prod_name, prod_fee, is_use, dc_fee, seq_no) =>`
UPDATE product_info SET 
	pin_prod_name 	= "${prod_name}",
	pin_prod_fee	= "${prod_fee}",
	pin_is_use		= "${is_use}",
	pin_dc_fee		= "${dc_fee}"
WHERE pin_seq_no	= "${seq_no}"
`

module.exports = updateproductinfo;