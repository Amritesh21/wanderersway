/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package apis;

import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

/**
 *
 * @author amrit
 */
@Path("verified/test")
public class UpTestClass {
    
    @Path("/call1")
    @GET
    @Produces("application/json")
    public List<String> testMethod(){
        ArrayList<String> name = new ArrayList();
        name.add("amritesh");
        name.add("singh");
        return name;
    }
    
}
