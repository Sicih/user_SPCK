const userId = localStorage.getItem('userId'); 

if (userId) {
fetch(`https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/users/${userId}`)
.then(response => response.json())
.then(user => {
    document.getElementById('username').textContent = user.username
    document.getElementById('email').textContent = user.email;
    document.getElementById('fullName').textContent = user.fullName;
    document.getElementById('dob').textContent = user.dateOfBirth;
    document.getElementById('gradeLevel').textContent = user.class;
})
.catch(error => console.error('Error:', error));

} else {
    window.location.href = 'index.html';
}


document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('userId'); 
    window.location.href = 'index.html'; 
});

document.getElementById("maintenanceMessage").onclick = function() {
    alert("Trang đang được bảo trì. Xin vui lòng quay lại sau!");
};
