var list = JSON.parse(localStorage.getItem('user')) ;
        function checkLogin(){
            if(list !=null){
                document.getElementById("login").style.display = "none";
            }
            else{
                document.getElementById("user").style.display = "none";
            }
        }
        checkLogin();  

//Logout

function LogOut() {
    localStorage.setItem('bookmark', null);
    location.reload();
}