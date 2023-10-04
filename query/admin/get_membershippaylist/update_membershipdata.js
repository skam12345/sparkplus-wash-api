const updatemembershipdata = `
UPDATE membership_pay_data SET 
	mpd_use_status = 'MUS002' 
WHERE LEFT(mpd_start_date,10) < DATE_FORMAT(DATE_SUB(curdate(), INTERVAL 1 month),'%Y-%m-%d')
	AND mpd_use_status = 'MUS001'
	AND mpd_reg_type = 'MRT001'
`

module.exports = updatemembershipdata;