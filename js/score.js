async function getPoints() {
    const studentId = document.getElementById('searchStudentId').value;
    const url = `https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/minhduc/pointList/${studentId}`;

    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            displayPoints(data);
        } else {
            document.getElementById('result').innerHTML = 'Không tìm thấy thông tin học sinh!';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Lỗi kết nối đến máy chủ: ' + error.message;
    }
}

function displayPoints(data) {
    const resultDiv = document.getElementById('result');
    if (data) {
        const table = `
            <tr>
					<td>Toán</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Văn</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Ngoại ngữ</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Vật Lý</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Hóa</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Sinh học</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Địa Lí</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
				<tr>
					<td>Tin học</td>
                    <td>${score.oralPoints.join(' ')}</td>
                    <td>${score.fifteenMinPoints}</td>
                    <td>${score.onePeriodPoints}</td>
                    <td>${score.semesterPoints}</td>
                    <td>${score.averagePoints}</td>
				</tr>
        `;
        resultDiv.innerHTML = table;
    } else {
        resultDiv.innerHTML = 'Không tìm thấy dữ liệu!';
    }
}