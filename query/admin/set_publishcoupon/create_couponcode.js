const createcouponcde = (coupon_type) => `
SELECT CONCAT(DATE_FORMAT(NOW(),'%Y%m%d'),RIGHT("${coupon_type}",2),CAST(CAST(rand()*100000000 as UNSIGNED) as CHAR)) as coupon_code
`
module.exports = createcouponcde;
