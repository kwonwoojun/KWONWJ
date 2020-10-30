function showList(result) {
	console.log(result);
	let data = result;
	let ul = $('<ul />');
	data.forEach((item, idx) => {
		let li = $('<li />').html(item.id + ". ").attr('id', item.id);
		//li.mouseover(function(){})
		$(li).on({
					'mouseover': mouseOverCallback,
					'mouseout': mouseOutFunc
		});
		let aTag = $('<a />').html(item.firstName).attr('href', 'jquery_empInfo.jsp?id=' + item.id);
		li.append(aTag);
		ul.append(li);
						
		localStorage.setItem('eid'+item.id, item.id);
		localStorage.setItem('fNm'+item.id, item.firstName);
		localStorage.setItem('lNm'+item.id, item.lastName);
		localStorage.setItem('eml'+item.id, item.email);
		localStorage.setItem('sal'+item.id, item.salary);
	});
	$('#result').append(ul);
}

function mouseOverCallback(event) {
	let eid = localStorage.getItem('eid'+parseInt(event.currentTarget.id));
	let fNm = localStorage.getItem('fNm'+parseInt(event.currentTarget.id));
	let lNm = localStorage.getItem('lNm'+parseInt(event.currentTarget.id));
	let eml = localStorage.getItem('eml'+parseInt(event.currentTarget.id));
	let sal = localStorage.getItem('sal'+parseInt(event.currentTarget.id));
	
	$('#eid').val(eid);
	$('#fName').val(fNm);
	$('#lName').val(lNm);
	$('#email').val(eml);
	$('#salary').val(sal);
}

function mouseOverFunc() {
	$(this).css('background', 'yellow');
	let id = $(this).attr('id');
	
	$.ajax({
		url: 'GetEmployeeListServlet',
		data: {id: id},
		success: function (result) {
			console.log(result);
			$('#eid').val(result.id);
			$('#fName').val(result.firstName);
			$('#lName').val(result.lastName);
			$('#email').val(result.email);
			$('#salary').val(result.salary);
			// jquery_index.html input 태그의 value속성에 값을 할당
			// result.firstName
		},
		dataType: 'json'
	});
	
}
function mouseOutFunc() {
	$(this).css('background', '');	//this = li tag
}