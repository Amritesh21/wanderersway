const useSetLoginCache = () => {
    if(sessionStorage.getItem('email') === null){
        sessionStorage.setItem('email','');
        sessionStorage.setItem('firstName','');
        sessionStorage.setItem('lastName','');
        sessionStorage.setItem('valid',false);
    }
}

export default useSetLoginCache;