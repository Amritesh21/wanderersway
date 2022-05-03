package com.wanderersway.apis.Constants;

public class UserSQLOperation {

    public static final String CREATE_USER_TABLE = "Create table if not exists user(firstName varchar(30), lastName varchar(30), email varchar(30), password varchar(30), pin varchar(10), phno varchar(12), city varchar(30), state varchar(30)) ENGINE=MEMORY";
    public static final String INSERT_USER = "Insert into user(firstName, lastName, email, password, pin, phno, city, state)"+
            " values(?,?,?,?,?,?,?,?);";

    public static final String GET_CREATED_USER = "Select * from user where email = ? ";

    public static final String UPDATE_USER = "update user set ";

    public static final String PURPOSE_CREATED_USER = "Update";

    public static final String PURPOSE_UPDATED_USER = "Create";

    public static final String PURPOSE_LOGIN = "Login";
}
