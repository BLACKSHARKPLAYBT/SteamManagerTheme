/**
 * @description This js load in the friends list, chat, and other related areas. 
 * 
 * @note only functions if the user has javascript enabled. 
 */

function initialize() {
    console.log('JS代码已加载。');
  
    // 1. 选择要观察的目标节点
    const targetNode = document.body; // 或者更具体的父元素，如果可能的话
  
    // 2. 配置观察选项
    const config = { childList: true, subtree: true }; // 观察子节点的添加/删除
  
    // 3. 创建一个观察器实例
    const observer = new MutationObserver(function(mutationsList, observer) {
      // 当观察到变化时，此函数会被调用
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // 如果有子节点发生变化
          if (document.querySelector('.bSKGlAJG2UVWTsntEJY2v')) {
            // 检查目标元素是否存在
            nav(); // 执行你的修改函数
            observer.disconnect(); // 停止观察，因为我们已经找到了目标
            console.log('目标元素已找到并修改，停止观察。');
            return; // 退出循环和观察器回调
          }
        }
      }
    });
  
    // 4. 开始观察目标节点
    observer.observe(targetNode, config);
  
    // 初始检查 (以防元素在脚本加载时已经存在)
    if (document.querySelector('.bSKGlAJG2UVWTsntEJY2v')) {
      nav();
      observer.disconnect(); // 如果找到了，也停止观察
      console.log('目标元素在初始加载时已找到并修改。');
    }
  }
  
function nav(){
    const steamDiv = document.querySelector('.bSKGlAJG2UVWTsntEJY2v');
    steamDiv.innerHTML='<svg width="25" height="36" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="45" height="50" fill="url(#pattern0_24_2)"/><defs><pattern id="pattern0_24_2" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_24_2" transform="scale(0.0222222 0.02)"/></pattern><image id="image0_24_2" width="45" height="50" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/></defs></svg>游戏管家'
  
    vip();
  }

function vip() {
  const vip = document.querySelector('._3yD46y5pd3zOGR7CzKs0mC.online');
  vip.innerHTML = '<div class="nibodjvvrm86uCfnnAn4g avatarHolder no-drag X-Small online"><div class="_3xUpb5DWXPFNcHHIcv-9pe avatarStatus right"></div><img class="_3h-QRJGxnVOIExtHD1R0f2 avatar" draggable="false" src="https://avatars.steamstatic.com/ca9faf2ca52bda82bb1a0ad7023379e2bf0b1c17.jpg"></div><div></div><svg width="18" height="15" xmlns="http://www.w3.org/2000/svg" class="_3x51wbt5DYyWC8JKwQ51ir"><defs><linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="vip-icon-hover_svg__a"><stop stop-color="#FDBB3E" offset="0%"></stop><stop stop-color="#FFD54A" offset="100%"></stop></linearGradient></defs><path d="M4.579 4.5 7.819.407a1.055 1.055 0 0 1 1.655 0l3.24 4.093 3.102-1.329a1.055 1.055 0 0 1 1.449 1.184l-1.811 8.727a2.277 2.277 0 0 1-2.23 1.814H4.07a2.277 2.277 0 0 1-2.23-1.814L.03 4.355a1.055 1.055 0 0 1 1.449-1.184l3.101 1.33Z" fill="url(#vip-icon-hover_svg__a)" fill-rule="nonzero"></path></svg>会员'
}
initialize()

