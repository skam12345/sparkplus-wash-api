const updatetemppw = (temp_pwd, mem_no) =>`
UPDATE mem_user SET mun_pwd = HEX(AES_ENCRYPT(${temp_pwd},'WASHCAR'))
WHERE mun_mem_no = "${mem_no}"
`
module.exports = updatetemppw;