package com.yedam.common;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnect {
	   public static Connection getCon() {
	      String driver = "oracle.jdbc.driver.OracleDriver";
	      String url = "jdbc:oracle:thin:@localhost:1521:xe"; //@뒤 : 포트 
	      String user = "hr";
	      String password = "hr";
	      //4줄 필수적으로 쓰는 것
	      
	      Connection conn = null; //커넥션 객체 
	   
	      try {
	         Class.forName(driver);
	         conn = DriverManager.getConnection(url, user, password);
	         System.out.println("연결 성공 ~~~");
	         
	      }catch(Exception e) {
	         e.printStackTrace(); //어떤 오류가 떴는지 알수있음
	         System.out.println("DB연결 실패 !!!");
	      } 
	      return conn;
	   }
	}
