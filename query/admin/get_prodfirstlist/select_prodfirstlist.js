const selectprodfirstlist =`
SELECT pin_seq_no as prod_code, pin_prod_name as prod_name, pin_plc_code as plc_code  
FROM product_info  
WHERE 1=1 
	AND pin_is_use = 'Y'
	AND pin_prod_type = 'PGC001'
	AND pin_prod_depth = 1
ORDER BY pin_order_no ASC
`

module.exports = selectprodfirstlist;