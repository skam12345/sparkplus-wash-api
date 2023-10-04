const selectprodsumasmenutype = (prod_type, is_use, menu_type) =>`
SELECT COUNT(a.pin_seq_no) as account_product  
FROM product_info a LEFT JOIN code_info b ON a.pin_prod_type = b.cin_code
WHERE 1=1 
	AND a.pin_prod_type = "${prod_type}"
	AND a.pin_is_use = "${is_use}"
	AND a.pin_up_seq = "${menu_type}"
	AND a.pin_prod_depth = 2
`
module.exports = selectprodsumasmenutype;