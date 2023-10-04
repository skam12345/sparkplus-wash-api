const selectcodelist = (code_type) =>`
SELECT cin_code as code, cin_code_name as code_name 
FROM code_info  
WHERE 1=1 
	AND cin_is_use = 'Y'
	AND cin_code LIKE "${code_type}%"
ORDER BY cin_code ASC, cin_sort_no ASC
`

module.exports = selectcodelist;