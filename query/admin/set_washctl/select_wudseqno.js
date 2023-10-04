const selectwudseqno = (car_no) =>`
SELECT wud_seq_no FROM wash_use_data 
WHERE wud_car_no = "${car_no}"
AND left(now(),10) = left(wud_reg_date, 10)
ORDER BY wud_seq_no DESC 
LIMIT 1
`

module.exports = selectwudseqno;