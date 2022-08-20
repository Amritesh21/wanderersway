/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servlets;

import POJOS.UserCred;
import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.stream.Collectors;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import servicePackage.UserValidityAnalyzer;

/**
 *
 * @author amrit
 */
public class LoginServlet extends HttpServlet {

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        if (request.getContentType().equals("application/json")) {
            BufferedReader reader = request.getReader();
            String requestPayload = reader.lines().collect(Collectors.joining());
            UserCred userCredReq = new Gson().fromJson(requestPayload, UserCred.class);
            username = userCredReq.getUsername();
            password = userCredReq.getPassword();
        }
        UserValidityAnalyzer userValidityAnalyzer = UserValidityAnalyzer.getUserValidityAnalyzerObj();
        boolean isUserValid = userValidityAnalyzer
                .checkUserCredentials(username, password);

        response.setContentType("application/json");

        try ( PrintWriter writer = response.getWriter()) {
            if (isUserValid) {
                Cookie tokenCookie = new Cookie("token", "token");
                Cookie userNameCookie = new Cookie("username", username);
                Cookie userTypeCookie = new Cookie("userType", "traveller");
                response.addCookie(tokenCookie);
                response.addCookie(userNameCookie);
                response.addCookie(userTypeCookie);
                HttpSession httpSession = request.getSession(true);
                httpSession.setAttribute("date", new Date());
                httpSession.setAttribute("username", username);
                httpSession.setAttribute("userType", "traveller");
                writer.print("{\"status\": \"success\", \"sessionid\":\""+httpSession.getId()+"\"}");
            }else{
                writer.print("{\"status\": \"invalid credentials\"}");
            }
        }

    }

}
