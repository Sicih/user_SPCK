const url = "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/users";

async function login() {
	const userId = document.getElementById("studentID").value.trim();
	const password = document.getElementById("password").value.trim();

	fetch("https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/users", {
		method: "GET",
		headers: { "content-type": "application/json" },
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
		})
		.then((tasks) => {
			for (let i = 0; i < tasks.length; i++) {
				if (`${tasks[i].id}` === userId) {
					if (`${tasks[i].password}` === password) {
						console.log(`Logged in successfully! User ID: ${tasks[i].id}`);
						localStorage.setItem("userId", `${tasks[i].id}`);
                        location.href = 'main.html';
					} else {
						console.log("Invalid user ID or password");
					}
				} else {
					console.log("Invalid user ID or password");
				}
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

document.getElementById("maintenanceMessage").onclick = function() {
    alert("Trang đang được bảo trì. Xin vui lòng quay lại sau!");
};

