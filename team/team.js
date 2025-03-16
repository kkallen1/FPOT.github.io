// 模擬的隊伍數據
const teams = [
    { 
        name: "程式競賽小隊", 
        desc: "我們是一支準備參加程式設計比賽的隊伍，目標是拿下前三名！", 
        requirements: "熟悉 Python 或 C++，有比賽經驗者優先。", 
        tags: ["程式", "比賽"],
        contact: "coder@example.com" 
    },
    { 
        name: "遊戲開發團", 
        desc: "我們計畫用 Unity 開發一個小型冒險遊戲，歡迎有熱情的人加入。", 
        requirements: "熟悉 Unity 或有美術設計能力，無經驗但有熱情也可。", 
        tags: ["遊戲", "開發"],
        contact: "gamedev@example.com" 
    },
    { 
        name: "科學展覽組", 
        desc: "我們正在準備一個科學展覽項目，展示新能源技術。", 
        requirements: "具備物理基礎或美術設計能力。", 
        tags: ["科學", "美術"],
        contact: "science@example.com" 
    }
];

// 頁面加載時顯示隊伍詳情
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const teamName = urlParams.get("name");
    const team = teams.find(t => t.name === teamName);

    if (team) {
        document.getElementById("teamName").textContent = team.name;
        document.getElementById("teamDesc").textContent = team.desc;
        document.getElementById("teamRequirements").textContent = team.requirements;
        document.getElementById("teamTags").textContent = team.tags.join(", ");
        document.getElementById("teamContact").textContent = team.contact;
    } else {
        document.getElementById("teamDetail").innerHTML = "<h1>隊伍不存在</h1>";
    }
});