// QQ 群号
const QQ_GROUP_NUMBER = '1077790221';
// QQ 群邀请链接（网页版）
const QQ_GROUP_LINK = 'https://qun.qq.com/universal-share/share?ac=1&authKey=7zKdhBBizvnyxPRV6%2Bn6E2SR5qEqXLaoVPsnR%2BiE9gXBsh%2FvERNzav34%2BG9ToCAQ&busi_data=eyJncm91cENvZGUiOiIxMDc3NzkwMjIxIiwidG9rZW4iOiJ3amFRVUxhTDRXb3FJaEtEZUVWS1hlWG9WM2VPN0tSbDdQQXlmSlRJSnRsdEtwZjJqQWY1bmN5d0pHLzh3aVZGIiwidWluIjoiMTU3Njk0MzkxNiJ9&data=_rTmt4nmU10ZYUA6CPpOWCflBNjS2Hg4CRwMPF8Ll5KjrLPQeMAzJtvlaAgqeRKNtybe1iJcujNslQSjA8EQmQ&svctype=4&tempid=h5_group_info';

// 加入 QQ 群
function joinQQGroup() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // 移动端：尝试拉起 QQ 应用
        // 使用 mqqapi 协议拉起 QQ 群
        const qqScheme = `mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${QQ_GROUP_NUMBER}&card_type=group&source=qrcode`;
        
        // 备用方案：使用 tencent 协议
        const qqDeepLink = `mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26jump_from%3Dwebapi%26k%3D${QQ_GROUP_NUMBER}`;
        
        // 尝试打开 QQ
        window.location.href = qqScheme;
        
        // 2秒后如果没有跳转成功，打开网页版链接
        setTimeout(() => {
            window.location.href = QQ_GROUP_LINK;
        }, 2000);
    } else {
        // 桌面端：直接打开网页版邀请链接
        window.open(QQ_GROUP_LINK, '_blank');
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