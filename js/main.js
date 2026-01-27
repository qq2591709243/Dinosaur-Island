// QQ 群号
const QQ_GROUP_NUMBER = '119568196';

// 加入 QQ 群
function joinQQGroup() {
    const groupNum = QQ_GROUP_NUMBER;
    
    // 获取用户代理信息
    const ua = navigator.userAgent.toLowerCase();
    
    // QQ 群链接
    const qqGroupUrl = `https://qm.qq.com/cgi-bin/qm/qr?k=${groupNum}`;
    
    // QQ 深链接（Android/iOS）
    const qqDeepLink = `tencent://groupwpa/?v=3&uin=${groupNum}&site=qq&menu=yes`;
    
    // 如果是移动设备，先尝试深链接
    if (/mobile|android|ios|iphone|ipad/i.test(ua)) {
        // 先尝试深链接
        window.location.href = qqDeepLink;
        
        // 延迟 2 秒后如果还没打开 QQ，则复制群号
        setTimeout(() => {
            copyToClipboard(groupNum);
            alert('群号已复制！\n\n请打开 QQ，搜索群号加群。\n\nQQ群号：' + groupNum);
        }, 2000);
    } else {
        // 桌面浏览器，复制群号并提示
        copyToClipboard(groupNum);
        alert('群号已复制！\n\n请打开 QQ，搜索群号加群。\n\nQQ群号：' + groupNum);
    }
}

// 加入微信群 - 显示二维码弹窗
function joinWechat() {
    // 创建弹窗遮罩
    const overlay = document.createElement('div');
    overlay.id = 'wechat-overlay';
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
    
    // 创建弹窗内容
    overlay.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 15px; text-align: center; max-width: 350px;">
            <h3 style="color: #07C160; margin-bottom: 15px; font-size: 20px;">扫码加入微信群</h3>
            <img src="./files/20260116161634.png?v=${Date.now()}" alt="微信群二维码" style="width: 250px; height: 250px; border-radius: 10px;">
            <p style="color: #666; margin-top: 15px; font-size: 14px;">长按或扫描二维码加入群聊</p>
            <button onclick="closeWechatPopup()" style="margin-top: 15px; padding: 10px 30px; background: #07C160; color: white; border: none; border-radius: 25px; cursor: pointer; font-size: 16px;">关闭</button>
        </div>
    `;
    
    // 点击遮罩关闭
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeWechatPopup();
        }
    });
    
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