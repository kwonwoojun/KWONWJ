function showList(result) {
	console.log(result);
	let data = result;
	let id = $(this).attr('id');

	$('#eid').val(result.id);
	$('#fName').val(result.firstName);
	$('#lName').val(result.lastName);
	$('#salary').val(result.salary);
	$('#job').val(result.JobId);
}

	
		// 버튼이벤트 콜백함수.
function myChangeFunc() {
	let eid = $('#eid').val();
	let fName = $('#fName').val();
	let lName = $('#lName').val();
	let salary = $('#salary').val();
	let job = $('#job').val();
	let param = 'eid='+eid + '&fName='+fName + '&lName='+lName + '&salary='+salary + '&job='+job;

	$.ajax({
		url: 'PutEmpInfoServlet?id=<%=empId%>',
		data: {
			eid: id,
			fName: firstName,
			lName: lastName,
			email: email,
			salary: salary,
			job: job
		},
		success: loadData,
		dataType: 'json'
	});
	$('#changeBtn').on('click', loadData);
	};
	
function loadData(result) {
	location.href = "jquery_index.html";
	console.log(result);
	$('#eid').val(result.id);
	$('#fName').val(result.firstName);
	$('#lName').val(result.lastName);
	$('#salary').val(result.salary);
	$('#job').val(result.JobId);
}
	
	