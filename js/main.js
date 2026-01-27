// QQ 群号
const QQ_GROUP_NUMBER = '1077790221';
// QQ 官方加群链接（可以直接拉起 QQ）
const QQ_GROUP_LINK = 'https://qm.qq.com/q/Y2gOGBwv2S';

// 加入 QQ 群
function joinQQGroup() {
    // 直接跳转到 QQ 官方加群链接，会自动拉起 QQ 应用
    window.location.href = QQ_GROUP_LINK;
}

// 加入微信群 - 显示二维码弹窗
function joinWechat() {
    // 检测是否在微信中打开
    const isWechat = /micromessenger/i.test(navigator.userAgent);
    const isMobile = /mobile|android|ios|iphone|ipad/i.test(navigator.userAgent.toLowerCase());
    
    // 创建弹窗遮罩
    const overlay = document.createElement('div');
    overlay.id = 'wechat-overlay';
    
    if (isWechat) {
        // 微信内置浏览器 - 全屏显示二维码，方便长按识别
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
        
        overlay.innerHTML = `
            <p style="color: #07C160; font-size: 18px; font-weight: bold; margin-bottom: 20px;">长按下方二维码识别加入群聊</p>
            <img src="./files/20260116161634.png?v=${Date.now()}" alt="微信群二维码" style="width: 300px; height: 300px;">
            <p style="color: #999; font-size: 14px; margin-top: 20px;">👆 长按二维码 → 识别图中二维码</p>
            <button onclick="closeWechatPopup()" style="margin-top: 30px; padding: 12px 50px; background: #07C160; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">关闭</button>
        `;
    } else {
        // 普通浏览器 - 提示保存图片
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;
        
        const tipText = isMobile 
            ? '📱 长按图片保存，打开微信扫一扫' 
            : '💻 右键保存图片，用微信扫码加入';
        
        overlay.innerHTML = `
            <div style="background: white; padding: 25px; border-radius: 15px; text-align: center; max-width: 350px; margin: 0 15px;">
                <h3 style="color: #07C160; margin-bottom: 15px; font-size: 20px; font-weight: bold;">加入微信群</h3>
                <img src="./files/20260116161634.png?v=${Date.now()}" alt="微信群二维码" style="width: 250px; height: 250px; border-radius: 8px;">
                <p style="color: #333; margin-top: 15px; font-size: 15px; font-weight: bold;">${tipText}</p>
                <p style="color: #999; margin-top: 8px; font-size: 12px;">保存后用微信「扫一扫」→「相册」</p>
                <button onclick="closeWechatPopup()" style="margin-top: 15px; padding: 10px 35px; background: #07C160; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">关闭</button>
            </div>
        `;
    }
    
    // 点击遮罩关闭（仅非微信浏览器）
    if (!isWechat) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeWechatPopup();
            }
        });
    }
    
    document.body.appendChild(overlay);
}


// 关闭微信弹窗
function closeWechatPopup() {
    const overlay = document.getElementById('wechat-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// 复制到剪贴板
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}