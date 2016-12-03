var MobileUA = (function() {  
        var ua = navigator.userAgent.toLowerCase();
        var mua = {  
            IOS: /ipod|iphone|ipad/.test(ua), //iOS  
            IPHONE: /iphone/.test(ua), //iPhone  
            IPAD: /ipad/.test(ua), //iPad  
            ANDROID: /android/.test(ua), //Android Device  
            WINDOWS: /windows/.test(ua), //Windows Device  
            TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua), //Touch Device  
            MOBILE: /mobile/.test(ua), //Mobile Device (iPad)  
            ANDROID_TABLET: false, //Android Tablet  
            WINDOWS_TABLET: false, //Windows Tablet  
            TABLET: false, //Tablet (iPad, Android, Windows)  
            SMART_PHONE: false //Smart Phone (iPhone, Android)  
        };
        mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;  
        mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);  
        mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;  
        mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;
        return mua;  
    }());
    //SmartPhone   
    if (MobileUA.SMART_PHONE) {  
        // 移动端链接地址  
        $(".nex-comment").bind("click",function () {
            var thetar=$(this).attr("for");
            $(".nex-card-comment[data-target='"+thetar+"']").slideToggle();
        })
    }

var icon_dir=true;
$(".list-comment").bind("click",function () {
	// body...
	var tar=$(this).attr("for");
	if($(this).find("i").text()=="keyboard_arrow_up")
		$(this).find("i").text("keyboard_arrow_down");
	else 
		$(this).find("i").text("keyboard_arrow_up");
	icon_dir=!icon_dir;
	$(".nex-list-comment[data-target='"+tar+"']").slideToggle();
})
function search(){

}