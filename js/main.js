// 显示微信群二维码
function showWechatQR() {
    // 检查是否有微信群二维码图片
    const wechatQR = '/images/wechat-qr.jpg'; // 需要上传微信群二维码
    
    // 弹出提示
    alert('扫描下方二维码加入微信群：\n\n如看不到二维码，请在 images 文件夹添加 wechat-qr.jpg 图片');
    
    // 也可以用以下代码显示图片（需要在 HTML 中添加）
    // window.open(wechatQR, '_blank');
}