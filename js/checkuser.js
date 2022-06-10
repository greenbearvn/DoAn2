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
        
        function LogOut() {
            localStorage.setItem('user', null);
            location.reload();
        }

        let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
        topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

        // On scroll, Show/Hide the btn with animation
        window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0