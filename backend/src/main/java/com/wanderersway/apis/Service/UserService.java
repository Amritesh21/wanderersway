package com.wanderersway.apis.Service;

import com.wanderersway.apis.Connections.DBConnectionManager;
import com.wanderersway.apis.Constants.HandleValidation;
import com.wanderersway.apis.Constants.UserSQLOperation;
import com.wanderersway.apis.POJOS.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

@Service
public class UserService {

    @Autowired
    DBConnectionManager dbConnectionManager;

    /*
    docker exec -it backend-app-db-1 bin/bash
    mysql -uroot -p -A
     */

    Logger logger = LoggerFactory.getLogger(UserService.class);

    public int createUser(User user){
        User createdUserObj = new User();
        try(PreparedStatement createUserTable = dbConnectionManager.getMySQLConnection().prepareStatement(UserSQLOperation.CREATE_USER_TABLE)){
            createUserTable.execute();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try(PreparedStatement insertStatement = dbConnectionManager.getMySQLConnection().prepareStatement(UserSQLOperation.INSERT_USER)){
            insertStatement.setString(1,user.getFirstName());
            insertStatement.setString(2,user.getLastName());
            insertStatement.setString(3,user.getEmailId());
            insertStatement.setString(4,user.getPassword());
            insertStatement.setString(5,user.getPin());
            insertStatement.setString(6, user.getPhno());
            insertStatement.setString(7,user.getCity());
            insertStatement.setString(8, user.getState());
            return insertStatement.executeUpdate();
        }catch(SQLException e){
            logger.info("Exception occured while creating new user"+ e);
            return 0;
        }
    }

    public User getCreatedUser(String email, String password, String purpose){
        StringBuilder getUserPreparedQuery = new StringBuilder(UserSQLOperation.GET_CREATED_USER);
        if(purpose.equals(UserSQLOperation.PURPOSE_LOGIN)){
            getUserPreparedQuery.append(" and password = "+ password);
        }
        User user = new User();
        try(PreparedStatement getUserStatement = dbConnectionManager.getMySQLConnection().prepareStatement(UserSQLOperation.GET_CREATED_USER)){
            getUserStatement.setString(1,email);
            ResultSet createdUser = getUserStatement.executeQuery();
            while(createdUser.next()){
                user.setFirstName(createdUser.getString("firstName"));
                user.setLastName(createdUser.getString("lastName"));
                user.setEmailId(createdUser.getString("email"));
                user.setPin(createdUser.getString("pin"));
                user.setPhno(createdUser.getString("phno"));
                user.setCity(createdUser.getString("city"));
                user.setState(createdUser.getString("state"));
            }
            return user;
        }catch (SQLException e){
            logger.info("Exception occured while reading user "+ e);
        }
        return user;
    }

    public int updateUserDetails(User user){
        Queue<String> updateDetailsQueue = new LinkedList<>();
        int valueCounter = 1;
        String userUpdateQuery = makeUpdateUserQuery(user, updateDetailsQueue);
        if(userUpdateQuery.equals("No value to update")){
            return 0;
        }
        try(PreparedStatement updateQuery = dbConnectionManager.getMySQLConnection().prepareStatement(userUpdateQuery)){
            while(!updateDetailsQueue.isEmpty()){
                updateQuery.setString(valueCounter++, updateDetailsQueue.poll());
            }
            updateQuery.setString(valueCounter,user.getEmailId());
            return updateQuery.executeUpdate();
        }catch (SQLException e){
            logger.info("Error occured while updating user details " + e);
            return 0;
        }
    }

    public String makeUpdateUserQuery(User user, Queue<String> updateUserDetails){
        StringBuilder query = new StringBuilder(UserSQLOperation.UPDATE_USER);
        int updateValueCount = 0;
        if(HandleValidation.checkNotNull(user.getFirstName()) && HandleValidation.checkEmpty(user.getFirstName())){
            updateUserDetails.add(user.getFirstName());
            updateValueCount++;
            query.append(" firstName = ? ");
        }
        if(HandleValidation.checkNotNull(user.getLastName()) && HandleValidation.checkEmpty(user.getLastName())){
            updateUserDetails.add(user.getLastName());
            updateValueCount++;
            query.append(", lastName = ? ");
        }
        if(HandleValidation.checkNotNull(user.getPin()) && HandleValidation.checkEmpty(user.getPin())){
            updateUserDetails.add(user.getPin());
            updateValueCount++;
            query.append(", pin = ?");
        }
        if(HandleValidation.checkNotNull(user.getPhno()) && HandleValidation.checkEmpty(user.getPhno())){
            updateUserDetails.add(user.getPhno());
            updateValueCount++;
            query.append(", phno = ?");    
        }
        if(HandleValidation.checkNotNull(user.getCity()) && HandleValidation.checkEmpty(user.getCity())){
            updateUserDetails.add(user.getCity());
            updateValueCount++;
            query.append(", city = ?");
        }
        if(HandleValidation.checkNotNull(user.getState()) && HandleValidation.checkEmpty(user.getState())){
            updateUserDetails.add(user.getState());
            updateValueCount++;
            query.append(", state = ?");
        }
        if(updateValueCount > 0) {
            query.append(" where email = ?");
            return query.toString();
        }
        return "No value to update";
    }

}
