const apiUrl = "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/users";
let currentSubject = ""; 
let currentSemester = ""; 
let studentId = localStorage.getItem("userId");

const scoreTableBody = document.getElementById("scoreTableBody");
scoreTableBody.innerHTML = "";

async function loadSemester(semester) {
    currentSemester = semester;
    try {
        const response = await fetch(`${apiUrl}/${studentId}`);
        const student = await response.json();
        const scores = student.scores || {}; // Đảm bảo scores tồn tại

        const scoreTableBody = document.getElementById("scoreTableBody");
        scoreTableBody.innerHTML = "";

        const subjects = [
            { name: "Toán", key: "math" },
            { name: "Văn", key: "literature" },
            { name: "Tiếng Anh", key: "english" },
            { name: "Địa", key: "geography" },
            { name: "Lý", key: "physics" },
            { name: "Hóa", key: "chemistry" },
            { name: "Sinh", key: "biology" },
        ];

        subjects.forEach((subject) => {
            // Kiểm tra xem môn học có trong dữ liệu scores hay không
            const score = scores[subject.key]?.[semester] || {};
            const avgScore = calculateAverageScore(score);

            const row = `<tr>
                            <td>${subject.name}</td>
                            <td id="oralScore">${score.oral || "-"}</td>
                            <td id="test15">${score.test15 || "-"}</td>
                            <td id="test1">${score.test1 || "-"}</td>
                            <td id="finalTest">${score.finalTest || "-"}</td>
                            <td>${avgScore}</td>
                         </tr>`;
            scoreTableBody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function calculateAverageScore(score) {
    
    const oral = Number(score.oral) || 0;
    const test15 = Number(score.test15) || 0;
    const test1 = Number(score.test1) || 0;
    const finalTest = Number(score.finalTest) || 0;

    const total = oral + test15 + test1 + finalTest;
    return (total / 4).toFixed(2);
}

document.getElementById("maintenanceMessage").onclick = function() {
    alert("Trang đang được bảo trì. Xin vui lòng quay lại sau!");
};
