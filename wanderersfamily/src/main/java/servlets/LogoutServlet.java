/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import static java.util.Objects.isNull;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author amrit
 */
public class LogoutServlet extends HttpServlet {
    
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException{
        boolean sessionValidFlag = false;
        String httpSessionId = null;
        HttpSession sessionObj = request.getSession(false);
        if (!isNull(sessionObj)) {
            Cookie[] cookies = request.getCookies();
            httpSessionId = sessionObj.getId();
            String username = sessionObj.getAttribute("username").toString();
            for (Cookie cookie : cookies) {
                if (cookie.getValue().equals(username) && cookie.getName().equals("username")) {
                    sessionObj.invalidate();
                    sessionValidFlag = true;
                }
            }
        }
        response.setContentType("application/json");
        try(PrintWriter writer = response.getWriter()){
            if(sessionValidFlag == true){
              writer.print("{\"status\": \"success\", \"sessionid\":\""+httpSessionId+"\"}");
            }else{
                writer.print("{\"status\": \"invalid session\"}");
            }
        }
        // httpSessionId exists then invalidate the session
    }
    
}
