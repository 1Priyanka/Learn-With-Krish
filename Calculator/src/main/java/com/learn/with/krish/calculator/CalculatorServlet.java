package com.learn.with.krish.calculator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(value = "/calculate")
public class CalculatorServlet extends HttpServlet {
//http://localhost:8080/Calculator_war_exploded/

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws  IOException {
//        super.doPost(req, resp);
        int x = Integer.parseInt(req.getParameter("first"));
        int y = Integer.parseInt(req.getParameter("second"));

        int sum = (x+y);

        resp.getWriter().println("Sum of " + x +  "and" + y + "  is  :  " + sum);
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doGet(req, resp);
    }
}
