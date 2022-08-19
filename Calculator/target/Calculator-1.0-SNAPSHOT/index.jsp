<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>My Calculator</title>
</head>
<body>
<%--<h1><%= "Hello World!" %>--%>
<%--</h1>--%>
<div>
    <h1> Web Calculator</h1>
    <form action="/calculate" method="post">
        <div align="center">
        <div>
            <pre>Enter first number :     <input type="number" name="first" required/></pre>

        </div>
    </p>
        <div>
            <pre>Enter second number :    <input type="number" name="second" required/></pre>

        </div>

       <pre>     <div><input type="submit" name="calculate" value="Submit"></div>      </pre>
        </div>
    </form>
</div>
<br/>
<%--<a href="hello-servlet">Hello Servlet</a>--%>
</body>
</html>