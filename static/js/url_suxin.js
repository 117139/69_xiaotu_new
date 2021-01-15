// 等比例缩放
// $(function(){
// 	if(window.screen.width>472){
// 	  s = window.screen.width / 472;
// 	  document.body.style.zoom = s;
// 	}else{
// 		document.body.style.zoom = 1;
// 	}
// })
window.onresize = function () {
	window.location.href=""
}
function fontsize(designWidth){
  function fontsizeRel(){
    var fontSize = 100;
    //获取屏幕的宽度
    var relWidth=document.documentElement.clientWidth;
		// console.log(relWidth)
		if(750<relWidth){
			relWidth=750
		}
		if(relWidth<320){
			relWidth=320
		}
    // relWidth/designWidth屏幕与设计稿宽度的比值
    var relFontSize=fontSize*relWidth/designWidth;
    document.getElementsByTagName("html")[0].style.fontSize=relFontSize+"px";
  }
  fontsizeRel();
  window.onresize=fontsizeRel;
}
fontsize(750);
/*
*@user: suxin
*@DATE: 2018/8/6
*@TIME: 18:14
*/
/**
 * 常用变量
 * @type {string}
 */
var IPurl = 'http://192.168.2.173:8080/fthWebsiteProject',
appkey = 1;

/**
 * 页面传参
 * @returns {Object}
 */
function getNowCanshu() {
  var aa = window.location.href;//返回当前页面的url
  var urlinfo = aa.replace("#", " ");
  var canshu = function() {
    var ind = urlinfo.indexOf('?');//返回某个指定的字符串值在字符串中首次出现的位置
    var cs = urlinfo.substr(ind + 1);
    var tempobj = new Object();
    var csarr = cs.split("&");
    jQuery.each(csarr, function(i, v) {
      var temparr = v.split("=");
      var objname = temparr[0];
      tempobj[objname] = temparr[1];
    });
    return tempobj;
  }();
  return canshu;
}

/**
 * 常用正则表达式
 * @type {RegExp}
 * 示例：tel.match(TEL_REG)
 */
//手机号
var TEL_REG = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
//汉字
var HZ_REG = /^[\u4e00-\u9fa5]{0,}$/;
//身份证(详细)(***未使用****)
var SFZ_REG = /( ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/;
//身份证(简单)
var sfz_REG = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
//邮箱(***未使用****)
var Email_REG = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
