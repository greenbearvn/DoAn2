$('#error').html('');
            $(".form").submit(function (event) {
                var _tailkhoan = $('#username').val();
                var _matkhau = $('#password').val();
                var email = $('#email').val();
                var _matkhauauth = $('#confirm_password').val();
               
                if (_tailkhoan !=null && _matkhau == _matkhauauth) {
                    var user = {email:email, username: _tailkhoan, pass: _matkhau ,role:'User'};
                    localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = "login.html";
                } else {
                    $('#error').html('Thông tin tài khoản hoặc mật khẩu không đúng');
                }
                event.preventDefault();
            });