// QQ 群号
const QQ_GROUP_NUMBER = '119568196';

// 自动拉起 QQ 加群
function copyQQGroup() {
    const groupNum = QQ_GROUP_NUMBER;
    
    // 获取用户代理信息
    const ua = navigator.userAgent.toLowerCase();
    
    // 方案1：使用 QQ 群链接（推荐，会自动拉起 QQ）
    const qqGroupUrl = `https://qm.qq.com/cgi-bin/qm/qr?k=${groupNum}`;
    
    // 方案2：使用 QQ 深链接（Android/iOS）
    const qqDeepLink = `tencent://groupwpa/?v=3&uin=${groupNum}&site=qq&menu=yes`;
    
    // 如果是移动设备，先尝试深链接
    if (/mobile|android|ios|iphone|ipad/i.test(ua)) {
        // 先尝试深链接
        window.location.href = qqDeepLink;
        
        // 延迟 2 秒后如果还没打开 QQ，则尝试网页链接
        setTimeout(() => {
            window.location.href = qqGroupUrl;
        }, 2000);
    } else {
        // 桌面浏览器，直接打开网页链接
        window.open(qqGroupUrl, '_blank');
    }
}

// 显示微信群二维码
function showWechatQR() {
    // 检查是否有微信群二维码图片
    const wechatQR = '/images/wechat-qr.jpg'; // 需要上传微信群二维码
    
    // 弹出提示
    alert('扫描下方二维码加入微信群：\n\n如看不到二维码，请在 images 文件夹添加 wechat-qr.jpg 图片');
    
    // 也可以用以下代码显示图片（需要在 HTML 中添加）
    // window.open(wechatQR, '_blank');
}