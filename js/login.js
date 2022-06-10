$('#error').html('');
            $(".form").submit(function (event) {
                var _tailkhoan = $('#username').val();
                var _matkhau = $('#password').val();
                var account = JSON.parse(localStorage.getItem('user')) ;
                if (_tailkhoan == account.username && _matkhau == account.pass) {
                    window.location.href = "index.html";
                } else {
                    $('#error').html('Thông tin tài khoản hoặc mật khẩu không đúng');
                }
                event.preventDefault();
            });