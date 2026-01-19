// QQ 群号
const QQ_GROUP_NUMBER = '119568196';

// 复制 QQ 群号
function copyQQGroup() {
    // 创建文本区域
    const textarea = document.createElement('textarea');
    textarea.value = QQ_GROUP_NUMBER;
    document.body.appendChild(textarea);
    
    // 选择并复制
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // 提示用户
    alert('群号已复制！\n\n请打开 QQ，进入"添加"-"查找群"，粘贴群号加群。\n\nQQ群号：' + QQ_GROUP_NUMBER);
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