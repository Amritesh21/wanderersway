const useSetLoginCache = () => {
    if(sessionStorage.getItem('email') === null){
        sessionStorage.setItem('email','');
        sessionStorage.setItem('firstName','');
        sessionStorage.setItem('lastName','');
        sessionStorage.setItem('city','');
        sessionStorage.setItem('state','');
        sessionStorage.setItem('pin','');
        sessionStorage.setItem('phno','');
        sessionStorage.setItem('valid',false);
    }
}

export default useSetLoginCache;