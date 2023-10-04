const selectfleetlist = `
SELECT mun_mem_no as fleet_no, mun_name as fleet_name 
FROM mem_user 
WHERE 1 = 1 
	AND mun_mem_type <> 'MMT001'
ORDER BY mun_name ASC
`
module.exports = selectfleetlist;