package com.wanderersway.apis.Constants;

public class HandleValidation {
    public static boolean checkNotNull(Object obj){
        if(obj != null){
            return true;
        }
        return false;
    }

    public static boolean checkEmpty(String str){
        if(str.trim() != ""){
            return true;
        }
        return false;
    }
}
