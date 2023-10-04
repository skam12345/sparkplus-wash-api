const getcodesublist = (code_type) =>`
SELECT cin_code as code, cin_code_name as code_name 
FROM code_info  
WHERE 1=1 
	AND cin_is_use = 'Y'
	AND cin_grp_cd <> '0'
	AND cin_code LIKE "${code_type}%"
ORDER BY cin_code, cin_sort_no ASC
`

module.exports = getcodesublist;