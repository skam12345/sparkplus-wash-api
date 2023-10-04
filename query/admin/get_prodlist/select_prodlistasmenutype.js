const selectprodlistasmenutype = (prod_type, is_use, menu_type) =>`
SELECT a.pin_seq_no as seq_no, a.pin_prod_name as prod_name,
	a.pin_prod_fee as prod_fee, b.cin_code_name as prod_type,
	a.pin_is_use as is_use, a.pin_dc_fee as dc_fee,
	LEFT(a.pin_reg_date, 10) as reg_date 
FROM product_info a LEFT JOIN code_info b ON a.pin_prod_type = b.cin_code
WHERE 1=1 
	AND a.pin_prod_type like "%${prod_type}"
	AND a.pin_is_use like "%${is_use}"
    AND a.pin_up_seq like "%${menu_type}"
	AND a.pin_prod_depth = 2
    ORDER BY a.pin_up_seq, a.pin_prod_depth, a.pin_seq_no  ASC 
`

module.exports = selectprodlistasmenutype;