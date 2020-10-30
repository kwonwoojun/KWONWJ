<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>empInfo.jsp</title>
<style>
	div#detail {
		border: 1px dotted blue;
		background: cornflowerblue;
		}
	div#detail>label {
		background: burlywood;
		color: white;
		width: 80px;
		display: inline-block;
	}
	div#detail>button {
		border=radius: 3px;
		background: yellowgreen;
		border: 1px solid green;
		position: relative;
		left: 30px;
	}
</style>
</head>
<body>
	<%
		String empId = request.getParameter("id");
	%>
	<h1>아이디: <%=empId%></h1>
	<div id="detail">
	<label for="">EmpId</label>
	<input type="text" id="eid" value="100" readonly><br>
	
	<label for="fName">FName</label>	
	<input type="text" id="fName" value="Hong"><br>
	
	<label for="lName">LName</label>	
	<input type="text" id="lName" value="kildong"><br>
	
	<label for="salary">Salary</label>	
	<input type="text" id="salary" value="kildong"><br>
	
	<Label for="job">Job</Label>
		<select id="job">
			<option value="AD_PRES">President</option>
			<option value="AD_VP">Administration Vice President</option>
			<option value="AD_ASST">Administration Assistant</option>
			<option value="AC_MGR">Accounting Manager</option>
			<option value="AC_ACCOUNT">Public Accountant</option>
			<option value="SA_MAN">Sales Manager</option>
			<option value="SA_REP">Sales Representative</option>
			<option value="ST_MAN">Stock Manager</option>
			<option value="ST_CLERK">Stock Clerk</option>
			<option value="IT_PROG">Programmer</option>
			<option value="MK_MAN">Marketing Manager</option>
			<option value="MK_REP">Marketing Representative</option>
		</select><br>
	
	<button id="changeBtn">수정</button>
	
	</div>

	
	<script>
		let xhtp = new XMLHttpRequest();
		xhtp.onreadystatechange = function () {
			if(xhtp.readyState == 4 && xhtp.status == 200) {
			console.log(xhtp.responseText);
			let data = JSON.parse(xhtp.responseText); 	// json => 자바스크립트 오브젝트
			console.log(data.id, data.firstName, data.email);
			document.getElementById('eid').value = data.id;
			document.getElementById('fName').value = data.firstName;
			document.getElementById('lName').value = data.lastName;
			document.getElementById('salary').value = data.salary;
			document.getElementById('job').value = data.JobId;
			}
		}
		xhtp.open('get', 'GetEmployeeListServlet?id=<%=empId%>');
		xhtp.send();
		
		// 버튼이벤트 등록.
		let btn = document.getElementById('changeBtn');
		btn.addEventListener('click', myChangeFunc);
		
		// 버튼이벤트 콜백함수.
		function myChangeFunc() {
			let eid = document.getElementById('eid').value;
			let fName = document.getElementById('fName').value;
			let lName = document.getElementById('lName').value;
			let salary = document.getElementById('salary').value;
			let job = document.getElementById('job').value;
			let param = 'eid='+eid + '&fName='+fName + '&lName='+lName + '&salary='+salary + '&job='+job;
			let xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				console.log(xhttp.responseText);
				location.href = "index.html";
			}
			xhttp.open('get', 'PutEmpInfoServlet?' + param);
			xhttp.send();
		}
	</script>
</body>
</html>