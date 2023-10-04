const express = require('express');
const route = express.Router();

const headerAuthChk = require('../middleware/header_Authchk').headerchkauth;
var bodyParser = require('../node_modules/body-parser');
route.use(bodyParser.urlencoded({extended:true}));
route.use(bodyParser.json());


const getnoticemain = require('../controller/admin/get_noticeMain');
const chklogin = require('../controller/admin/chk_login');
const getlogininfo = require('../controller/admin/get_loginInfo');
const getstatic = require('../controller/admin/get_statics');
const getpaysum = require('../controller/admin/get_paySum');
const getcodelist = require('../controller/admin/get_CodeList');
const getcodesublist = require('../controller/admin/get_codeSubList');
const getpaylist = require('../controller/admin/get_payList');
const setpaycancel = require('../controller/admin/set_payCancel');

const getusesum = require('../controller/admin/get_useSum');
const getuselist = require('../controller/admin/get_useList');

const getmemlist = require('../controller/admin/get_memList');
const getmemdetail = require('../controller/admin/get_memDetail');
const setupdatemem = require('../controller/admin/set_updateMem');
const getmemsum = require('../controller/admin/get_memSum');

const getmembershiplist = require('../controller/admin/get_membershipList');
const getmembershipdetail = require('../controller/admin/get_membershipDetail');
const setmembershipupdate = require('../controller/admin/set_updateMembership');
const getmembershipSum = require('../controller/admin/get_membershipSum');

const getnoticelist = require('../controller/admin/get_noticeList');
const getnoticedetail = require('../controller/admin/get_noticeDetail');
const setnoticeinsert = require('../controller/admin/set_noticeInsert');
const setupdatenotice = require('../controller/admin/set_updateNotice');
const getnoticesum = require('../controller/admin/get_noticeSum');
const setnoticedelete = require('../controller/admin/set_noticeDelete');

const getadminlist = require('../controller/admin/get_adminList');
const setadminupdate = require('../controller/admin/set_adminUpdate');
const setadmininsert = require('../controller/admin/set_adminInsert');
const getadmindetail = require('../controller/admin/get_adminDetail');
const getadminsum = require('../controller/admin/get_adminSum');

const getpromotionlist = require('../controller/admin/get_promotionList');
const getpromotiondetail = require('../controller/admin/get_promotionDetail');
const getpromotionsum = require('../controller/admin/get_promotionSum');
const setpromotionupdate = require('../controller/admin/set_promotionUpdate');

const getcouponlist = require('../controller/admin/get_couponList');
const getcouponsum = require('../controller/admin/get_couponSum');
const setpublishcoupon = require('../controller/admin/set_publishCoupon');
const setcouponex = require('../controller/admin/set_couponEx');
const setcouponuse = require('../controller/admin/set_CouponUse');
const getcouponexlist = require('../controller/admin/get_couponExList');

const getprodfirstlist = require('../controller/admin/get_prodFirstList');
const getprodmenulist = require('../controller/admin/get_prodMenuList');
const getprodsum = require('../controller/admin/get_prodSum');
const getprodlist = require('../controller/admin/get_prodList');
const setprodupdate = require('../controller/admin/set_prodUpdate');
const getproddetail = require('../controller/admin/get_prodDetail');

const getmembershippaylist = require('../controller/admin/get_MembershipPayList');
const setmembershippay = require('../controller/admin/set_MembershipPay');
const setwashpay = require('../controller/admin/set_Washpay');
const setapprovalpay = require('../controller/admin/set_ApprovalPay');
const getmembershipsnslist = require('../controller/admin/get_MembershipSnsList');

const getfleetlist = require('../controller/admin/get_fleetList');
const getfleetcarlist = require('../controller/admin/get_fleetCarList');
const setfleetcardelete = require('../controller/admin/set_fleetCarDelete');
const setfleetcarinsert = require('../controller/admin/set_fleetCarInsert');

const getwashctl = require('../controller/admin/get_washctl');
const setwashctl = require('../controller/admin/set_washctl');

const getstaticstimesale = require('../controller/admin/get_staticsTimeSale');
const getstaticstimeuse = require('../controller/admin/get_staticsTimeUse');
const getstaticsdaysale = require('../controller/admin/get_staticsDaySale');

const opengate = require('../controller/admin/control_opengate');
const closegate = require('../controller/admin/control_closegate')

route.use("/admin/getNoticeMain", headerAuthChk, getnoticemain.getnoticemain);
route.use("/admin/chkLogin", headerAuthChk, chklogin.chklogin);
route.use("/admin/getLoginInfo", headerAuthChk, getlogininfo.getlogininfo);
route.use("/admin/getStatic", headerAuthChk, getstatic.getstatics);
route.use("/admin/getPaySum", headerAuthChk, getpaysum.getpaysum);
route.use("/admin/getCodeList", headerAuthChk, getcodelist.getcodelist);
route.use("/admin/getCodeSubList", headerAuthChk, getcodesublist.getcodesublist);
route.use("/admin/getPayList", headerAuthChk, getpaylist.getpaylist);
route.use("/admin/setPayCancel", headerAuthChk, setpaycancel.setpaycancel);

route.use("/admin/getUseSum", headerAuthChk, getusesum.getusesum);
route.use("/admin/getUseList", headerAuthChk, getuselist.getuselist);
route.use("/admin/getMemList", headerAuthChk, getmemlist.getmemlist);
route.use("/admin/getMemDetail", headerAuthChk, getmemdetail.getmemdetail);
route.use("/admin/setUpdateMem", headerAuthChk, setupdatemem.setupdatemem);
route.use("/admin/getMemSum", headerAuthChk, getmemsum.getmemsum);

route.use("/admin/getMembershipList", headerAuthChk, getmembershiplist.getmembershiplist);
route.use("/admin/getMembershipDetail", headerAuthChk, getmembershipdetail.getmembershipdetail);
route.use("/admin/setMembershipUpdate", headerAuthChk, setmembershipupdate.setmembershipupdate);
route.use("/admin/getMembershipSum", headerAuthChk, getmembershipSum.getmembershipsum);

route.use("/admin/getNoticeList", headerAuthChk, getnoticelist.getnoticelist);
route.use("/admin/getNoticeDetail", headerAuthChk, getnoticedetail.getnoticedetail);
route.use("/admin/setNoticeInsert", headerAuthChk, setnoticeinsert.setnoticeinsert);
route.use("/admin/setNoticeUpdate", headerAuthChk, setupdatenotice.setupdatenotice);
route.use("/admin/getNoticeSum", headerAuthChk, getnoticesum.getnoticesum);
route.use("/admin/setNoticeDelete", headerAuthChk, setnoticedelete.setnoticedelete);


route.use("/admin/getAdminList", headerAuthChk, getadminlist.getadminlist);
route.use("/admin/setAdminUpdate", headerAuthChk, setadminupdate.setadminupdate);
route.use("/admin/setAdminInsert", headerAuthChk, setadmininsert.setadmininsert);
route.use("/admin/getAdminDetail", headerAuthChk, getadmindetail.getadmindetail);
route.use("/admin/getAdminSum", headerAuthChk, getadminsum.getadminsum);

route.use("/admin/getPromotionList", headerAuthChk, getpromotionlist.getpromotionlist);
route.use("/admin/getPromotionDetail", headerAuthChk, getpromotiondetail.getpromotiondetail);
route.use("/admin/getPromotionSum", headerAuthChk, getpromotionsum.getpromotionsum);
route.use("/admin/setPromotionUpdate", headerAuthChk, setpromotionupdate.setpromotionupdate);

route.use("/admin/getCouponList", headerAuthChk, getcouponlist.getcouponlist);
route.use("/admin/getCouponSum", headerAuthChk, getcouponsum.getcouponsum);
route.use("/admin/setPublishCoupon", headerAuthChk, setpublishcoupon.setpublishcoupon);
route.use("/admin/setCouponEx", headerAuthChk, setcouponex.setcouponex);
route.use("/admin/setCouponUse", headerAuthChk, setcouponuse.setcouponuse);
route.use("/admin/getGiftCouponList", headerAuthChk, getcouponexlist.getcouponexlist);

route.use("/admin/getProdFirstList", headerAuthChk, getprodfirstlist.getprodfirstlist);
route.use("/admin/getProdMenuList", headerAuthChk, getprodmenulist.getprodmenulist);
route.use("/admin/getProdSum", headerAuthChk, getprodsum.getprodsum);
route.use("/admin/getProdList", headerAuthChk, getprodlist.getprodlist);
route.use("/admin/setProdUpdate", headerAuthChk, setprodupdate.setprodupdate);
route.use("/admin/getProdDetail", headerAuthChk, getproddetail.getproddetail);

route.use("/admin/getMembershipPayList", headerAuthChk, getmembershippaylist.getmembershippaylist);
route.use("/admin/setMembershipPay", headerAuthChk, setmembershippay.setmempay);
route.use("/admin/setWashPay", headerAuthChk, setwashpay.setwashpay);
route.use("/admin/setApprovalPay", headerAuthChk, setapprovalpay.setapprovalpay);
route.use("/admin/getMembershipSnsList", headerAuthChk, getmembershipsnslist.getmembershipsnslist);

route.use("/admin/getFleetList", headerAuthChk, getfleetlist.getfleetlist);
route.use("/admin/getFleetCarList", headerAuthChk, getfleetcarlist.getfleetcarlist);
route.use("/admin/setFleetCarDelete", headerAuthChk, setfleetcardelete.setfleetcardelete);
route.use("/admin/setFleetCarInsert", headerAuthChk, setfleetcarinsert.setfleetcarinsert);

route.use("/admin/getWashCtl", headerAuthChk, getwashctl.getwashctl);
route.use("/admin/setWashCtl", headerAuthChk, setwashctl.setwashctl);

route.use("/admin/getStaticsTimeSale", headerAuthChk, getstaticstimesale.getstaticstimesale);
route.use("/admin/getStaticsTimeUse", headerAuthChk, getstaticstimeuse.getstaticstimeuse);
route.use("/admin/getStaticsDaySale", headerAuthChk, getstaticsdaysale.getstaticsdaysale);

route.use("/admin/openGate", headerAuthChk, opengate.opengate);
route.use("/admin/closeGate", headerAuthChk, closegate.closegate);


// 비즈톡

const joinpmember = require('../controller/biztalk/join_PMember');
const joinfmember = require('../controller/biztalk/join_FMember');
const approvalfleetmember = require('../controller/biztalk/approvalFleetMember');
const sendcertification = require('../controller/biztalk/send_Certification')

const sendid = require('../controller/biztalk/send_ID');
const sendtemppw = require('../controller/biztalk/send_tempPw');

const getonetimewash = require('../controller/biztalk/get_oneTimeWash');
const getmembershipwash = require('../controller/biztalk/get_membership'); 

const before7days = require('../controller/biztalk/chk_before7Days');

route.use("/biztalk/joinPMember",headerAuthChk, joinpmember.joinpmember);
route.use("/biztalk/joinFMember",headerAuthChk, joinfmember.joinfmember);
route.use("/biztalk/approvalFleetMember", headerAuthChk, approvalfleetmember.approvalfleetmember);
route.use("/biztalk/send_Certification", headerAuthChk, sendcertification.sendcertification);
route.use("/biztalk/sendID", headerAuthChk, sendid.send_id);
route.use("/biztalk/sendTempPw",  sendtemppw.sendtemppw);

route.use("/biztalk/getOnetimeWash",  getonetimewash.getonetimewash);
route.use("/biztalk/getMembershipWash",  getmembershipwash.getmembershipwash);

route.use("/biztalk/before7Days",  before7days.chkbeforesevendays);


//자판기

const qrusechk = require('../controller/vending_machine/qrusechk');
const qramount = require('../controller/vending_machine/qramount');
const qruse = require('../controller/vending_machine/qruse')

route.use("/api/qrUseChk", headerAuthChk, qrusechk.qrusechk);
route.use("/api/qrAmount", headerAuthChk, qramount.qramount);
route.use("/api/qrUse", headerAuthChk, qruse.qruse);

module.exports = route;
