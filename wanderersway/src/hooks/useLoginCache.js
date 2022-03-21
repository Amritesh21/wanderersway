import React, {useEffect} from 'react';
const useLoginCache = (loggedUserDetails, setLoginStatus) => {

    useEffect(() => {
        console.log(loggedUserDetails);
        if(loggedUserDetails.valid){
          sessionStorage.setItem('email',loggedUserDetails.email);
          sessionStorage.setItem('firstName',loggedUserDetails.fname);
          sessionStorage.setItem('lastName',loggedUserDetails.lname);
          sessionStorage.setItem('valid', loggedUserDetails.valid);
          if(loggedUserDetails.email !== ''){
            setLoginStatus(true);
          }else{
            setLoginStatus(false);
          }
        }
      },[loggedUserDetails,sessionStorage])

}

export default useLoginCache;