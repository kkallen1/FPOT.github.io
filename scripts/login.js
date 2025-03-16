document.addEventListener("DOMContentLoaded", () => {
    const loginCard = document.getElementById("loginCard");
    const registerCard = document.getElementById("registerCard");
    const showRegisterLink = document.getElementById("showRegister");
    const showLoginLink = document.getElementById("showLogin");

    // 切換到註冊卡片
    showRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginCard.style.display = "none";
        registerCard.style.display = "block";
    });

    // 切換到登入卡片
    showLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        registerCard.style.display = "none";
        loginCard.style.display = "block";
    });

    // 登入表單提交（模擬）
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        alert(`登入成功！\nEmail: ${email}\nPassword: ${password}`);
    });

    // 註冊表單提交（模擬）
    document.getElementById("registerForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password === confirmPassword) {
            alert(`註冊成功！\nEmail: ${email}\nPassword: ${password}`);
        } else {
            alert("密碼與確認密碼不一致！");
        }
    });
});