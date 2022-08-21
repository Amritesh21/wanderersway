/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package filters;

import java.io.IOException;
import java.io.PrintWriter;
import static java.util.Objects.isNull;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author amrit
 */
public class RequestFilter extends HttpFilter {

    @Override
    public void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        
        boolean validationFlag = false;
        HttpSession httpSession = request.getSession(false);
        if (!isNull(httpSession)) {
            String usernameFromSession = httpSession.getAttribute("username").toString();
            Cookie[] cookies = request.getCookies();
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("username")) {
                    if (cookie.getValue().equals(usernameFromSession)) {
                        validationFlag = true;
                    }

                }
            }
        }
        if(validationFlag == false){
            try(PrintWriter writer = response.getWriter()){
                response.setContentType("application/json");
                writer.print("{\"status\": \"authentication failure\"}");
            }
        }else{
            chain.doFilter(request, response);
        }
    }

    
}
