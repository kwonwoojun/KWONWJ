<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>empInfo.jsp</title>
<script src="public/jquery-3.5.1.min.js"></script>
<script src="js/empInfo.js"></script>

<script>
<%
String empId = request.getParameter("id");
%>
		$(document).ready(function() {
			$.ajax({
				url : 'GetEmployeeListServlet?id=<%=empId%>',
				success: showList,
				error: function(reject) {
					console.log(new Error('실행중 에러발생'));
				},
				dataType: 'json'
			});
		});
	</script>	
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

</body>
</html>