package com.yedam.kwj;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/DataTableServlet")
public class DataTableServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public DataTableServlet() {
        super();
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		//"draw":1, "recordsTotal": 57, "recordsFiltered": 57,
		//"data": [[val1, val2, val3, ..val6],[val1, val2, val3, ..val6]
		// }
		
		EmpDAO dao = new EmpDAO();
		List<Employee> employees = dao.getEmpList();
		int dataCnt = employees.size();
		String json = "{\"draw\":1, \"recordsTotal\": " + dataCnt + ", \recordsFiltered\": " + dataCnt + ",";
		json += "\"data\": [";
		
		for(int i=0; i<dataCnt; i++) {
			for(int j=0; j<6; j++) {
				json += 
			}
		}
		
		json += "]}";
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
