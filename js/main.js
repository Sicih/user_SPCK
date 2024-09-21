function loadArticles() {
    fetch("https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/article")
        .then((response) => response.json())
        .then((data) => {

            data.forEach((article) => {
                const row = document.getElementById("bao");

                row.innerHTML += `
                    <div class="chung">
                        <img
                            src="${article.image}"
                            alt=""
                        />
                        <div class="art">
                            <h2>${article.title}</h2>
                            <p>
                            ${article.content}
                            </p>
                        </div>
                    </div>	
                `;
            });
        })
        .catch((error) => console.error("Error:", error));
}

loadArticles();

document.getElementById("maintenanceMessage").onclick = function() {
    alert("Trang đang được bảo trì. Xin vui lòng quay lại sau!");
};
