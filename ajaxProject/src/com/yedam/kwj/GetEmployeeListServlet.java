package com.yedam.kwj;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/GetEmployeeListServlet")
public class GetEmployeeListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public GetEmployeeListServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String empId = request.getParameter("id");
		EmpDAO dao = new EmpDAO();
		Employee emp = dao.getEmpInfo(empId);
		String json = "{\"id\":\"" + emp.getEmployeeId() + 
	               "\",\"firstName\":\"" + emp.getFirstName() + 
	               "\",\"lastName\":\"" + emp.getLastName() + 
	               "\",\"email\":\"" + emp.getEmail() +
	               "\",\"phoneNumber\":\"" + emp.getPhoneNumber() + 
	               "\",\"hireDate\":\"" + emp.getHireDate() +
	               "\",\"JobId\":\"" + emp.getJobId() + 
	               "\",\"salary\":" + emp.getSalary() + 
	               ",\"commissionPct\":" + emp.getCommissionPct() +
	               ",\"managerId\":" + emp.getManagerId() + 
	               ",\"departmentId\":\"" + emp.getDepartmentId() + "\"}";
		
		response.getWriter().append(json);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
