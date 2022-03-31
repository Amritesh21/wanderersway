package com.wanderersway.apis.Constants;

public class UserSQLOperation {
    public static final String INSERT_USER = "Insert into user(firstName, lastName, email, password, pin, phno, city, state)"+
            " values(?,?,?,?,?,?,?,?);";

    public static final String GET_CREATED_USER = "Select * from user where email = ? ";

    public static final String UPDATE_USER = "update user set ";

    public static final String PURPOSE_CREATED_USER = "Update";

    public static final String PURPOSE_UPDATED_USER = "Create";

    public static final String PURPOSE_LOGIN = "Login";
}
