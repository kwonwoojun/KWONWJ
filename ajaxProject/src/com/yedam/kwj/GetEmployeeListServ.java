package com.yedam.kwj;

import java.io.IOException;
import java.util.List;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/GetEmployeeListServ")
public class GetEmployeeListServ extends HttpServlet implements Servlet {
	private static final long serialVersionUID = 1L;
       
    
    public GetEmployeeListServ() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		EmpDAO dao = new EmpDAO();
		List<Employee> list = dao.getEmpList();
//		response.getWriter().append("Served at: ").append(request.getContextPath()).append("<b>Hello</b");
//		String json = "[{"id":data, "firstName":data}]";
		String json = "[";
		int dataCnt = list.size(); 
		int i = 0;
		for(Employee emp : list) {
	         json += "{\"id\":\"" + emp.getEmployeeId() + 
	               "\",\"firstName\":\"" + emp.getFirstName() + 
	               "\",\"lastName\":\"" + emp.getLastName() + 
	               "\",\"email\":\"" + emp.getEmail() +
	               "\",\"phoneNumber\":\"" + emp.getPhoneNumber() + 
	               "\",\"hireDate\":\"" + emp.getHireDate() +
	               "\",\"JobId\":\"" + emp.getJobId() + 
	               "\",\"salary\":" + emp.getSalary() + 
	               ",\"commissionPct\":" + emp.getCommissionPct() +
	               ",\"managerId\":" + emp.getManagerId() + 
	               ",\"departmentId\":" + emp.getDepartmentId() + 
	               "}";
	         i++;
	         if(i!=dataCnt) {
	            json +=",";
	         }
	      }
	      json +=  "]";
		
		response.getWriter().append(json);
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}