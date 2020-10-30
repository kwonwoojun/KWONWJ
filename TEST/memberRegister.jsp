<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>memberRegister.jsp</title>
</head>
<body>
    <% 
    request.setCharacterEncoding("UTF-8");
    String method = request.getParameter("method"); 
    String id = request.getParameter("id");
    String pw = request.getParameter("pw"); 
    String name = request.getParameter("name"); 
    String age = request.getParameter("age"); 
    %>
    
    
    <%
    out.print(method + "방식 전송");
    out.print("<br/>id  " + id);
    out.print("<br/>pw  " + pw);
    out.print("<br/>name  " + name);
    out.print("<br/>age  " + age);
    %>

</body>
</html>