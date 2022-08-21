/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import static java.util.Objects.isNull;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author amrit
 */
public class ValidateLoginSession extends HttpServlet {
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException{
        HttpSession httpSession = request.getSession(false);
        boolean isSessionValid = false;
        if(!isNull(httpSession)){
            isSessionValid = true;
        }
        response.setContentType("application/json");
        try(PrintWriter writer = response.getWriter()){
            writer.print("{\"issessionValid\":"+isSessionValid+" }");
        }
    }
    
}
