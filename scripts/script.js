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

// 頁面加載時顯示隊伍
document.addEventListener("DOMContentLoaded", () => {
    displayTeams(teams);
});

// 搜尋功能
function searchTeams() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredTeams = teams.filter(team => 
        team.name.toLowerCase().includes(query) || 
        team.desc.toLowerCase().includes(query) || 
        team.requirements.toLowerCase().includes(query) || 
        team.tags.some(tag => tag.toLowerCase().includes(query))
    );
    displayTeams(filteredTeams);
}

// 顯示隊伍列表（顯示名稱、描述和標籤）
function displayTeams(teamArray) {
    const teamList = document.getElementById("teamList");
    teamList.innerHTML = "<h2>熱門隊伍</h2>"; // 重置內容

    teamArray.forEach(team => {
        const teamCard = document.createElement("div");
        teamCard.className = "team-card";
        teamCard.innerHTML = `
            <div>
                <h3><a href="team/team.html?name=${encodeURIComponent(team.name)}" class="team-link">${team.name}</a></h3>
                <p>${team.desc}</p></br>
                <p class="tags">tags: ${team.tags.join(", ")}</p> <!-- 顯示標籤 -->
            </div>
            <button onclick="alert('已申請加入 ${team.name}！')">加入</button>
        `;
        teamList.appendChild(teamCard);
    });
}
