package com.yedam.kwj;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/PutEmpInfoServlet")
public class PutEmpInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public PutEmpInfoServlet() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		String eid = request.getParameter("eid");
		String fName = request.getParameter("fName");
		String lName = request.getParameter("lName");
		String salary = request.getParameter("salary");
		String job = request.getParameter("job");
		
		// 데이터베이스에서 수정하는 기능추가. EmpDAO 수정기능 추가.
		EmpDAO dao = new EmpDAO();
		dao.updateEmpInfo(eid, fName, lName, salary, job);
		
		response.getWriter().append("complete");
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		doGet(request, response);
	}

}
