// 當頁面載入或滾動時更新進度條
function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop; // 目前滾動距離
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight; // 可滾動總高度
    const progress = (scrollTop / scrollHeight) * 100; // 計算進度百分比
    const progressBar = document.querySelector('.scrollbar-progress');
    
    if (progressBar) {
        progressBar.style.width = `${progress}%`; // 更新進度條寬度
    }
}

// 監聽滾動事件
window.addEventListener('scroll', updateScrollProgress);

// 頁面載入時初始化
window.addEventListener('load', updateScrollProgress);