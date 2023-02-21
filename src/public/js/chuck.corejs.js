$(document).ready(function() {
    $('.van-tab1').click(function() {
        $('.van-tab2').removeClass('van-tab--active');
        $('.van-tab1').addClass('van-tab--active');
        $('.van-tabs__track').addClass('login');
        $('.van-tabs__track').removeClass('register')
    });
    $('.van-tab2').click(function() {
        $('.van-tab1').removeClass('van-tab--active');
        $('.van-tabs__track').removeClass('login');
        $('.van-tab2').addClass('van-tab--active');
        $('.van-tabs__track').addClass('register')
    })
    const resetPassword = document.querySelector('.reset-password');
    resetPassword.addEventListener('click', function() { window.location = 'reset-password' });
});

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('.preloader').delay(100).fadeOut('fast');
});
$(document).ready(function() {
    const ipClients = async() => {
        let ipClients = await fetch('https://api.ipify.org/?format=json');
        let response = await ipClients.json();
        let data = await response;
        $('#ip').text(data.ip);
    }

    const token = "Bearer " + localStorage.getItem('token');
    ipClients();

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    $('.login_check').click(function(e) {
        console.log();
        e.preventDefault();
        const phone_login = $('#phone_login').val().trim();
        const password_login = $('#pass_login').val().trim();
        $(this).attr('disabled', 'disabled');
        if (phone_login != "") {
            var settings = {
                "url": "/account/login",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    // "phone_login": "phone_login",
                    // "password_login": "password_login",
                    // "token": token,
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "phone_login": phone_login,
                    "password_login": password_login
                }),
            };

            $.ajax(settings).done(function(response) {
                const data = JSON.parse(response);
                if (data.message == 1) {
                    setTimeout(() => {
                        $('.login_check').removeAttr('disabled');
                    }, 1000);
                    $('.van-toast--loading').removeClass('display-none');
                    $('.van-toast--loading').add('display-flex');
                    setTimeout(function() {
                        $('.van-toast--loading').addClass('display-none');
                        $('.van-toast--loading').removeClass('display-flex');
                        setCookie('token', data.token, 7);
                        setTimeout(() => {
                            window.location = "/member/index"
                        }, 300)
                    }, 700)
                } else if (data.message == 2) {
                    setTimeout(() => {
                        $('.login_check').removeAttr('disabled');
                    }, 1000);
                    $('.van-toast--loading').removeClass('display-none');
                    $('.van-toast--loading').add('display-flex');
                    setTimeout(function() {
                        $('.van-toast--loading').addClass('display-none');
                        $('.van-toast--loading').removeClass('display-flex');
                        $('.van-toast--fail').addClass('display-flex');
                        $('.van-toast--fail .van-toast__text').html('Tài khoản không tồn tại')
                        setTimeout(function() {
                            $('.van-toast--fail').removeClass('display-flex')
                        }, 700)
                    }, 700);
                } else if (data.message == 3) {
                    setTimeout(() => {
                        $('.login_check').removeAttr('disabled');
                    }, 1000);
                    $('.van-toast--loading').removeClass('display-none');
                    $('.van-toast--loading').add('display-flex');
                    setTimeout(function() {
                        $('.van-toast--loading').addClass('display-none');
                        $('.van-toast--loading').removeClass('display-flex');
                        $('.van-toast--fail').addClass('display-flex');
                        $('.van-toast--fail .van-toast__text').html('Lỗi mật khẩu !')
                        setTimeout(function() {
                            $('.van-toast--fail').removeClass('display-flex')
                        }, 700)
                    }, 700);
                }
            });
        } else {
            setTimeout(() => {
                $('.login_check').removeAttr('disabled');
            }, 1000);
            $('#error').html("Vui lòng nhập số điện thoại");
            $("#phone_login").keyup(function() {
                $('#error').html("")
            });
        }

    });

    function validateEmail(email) {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (pattern.test(email));
    }
    /**************************************************************/
    $('.register-button__otp').click(function(e) {
        e.preventDefault();
        $(this).attr('disabled', 'disabled');
        const phone_signup = $('.Nationalarea-input').val().trim();
        const checkMail = validateEmail(phone_signup);
        //console.log(checkMail);
        const ip = $('#ip').text();
        let length_input = phone_signup.length;
        if (phone_signup != '' && length_input > 8 && length_input > 15 && checkMail) {
            var settings = {
                "url": "/account/otpsignup",
                "method": "POST",
                "timeout": 0,
                // "headers": {
                //     "phone_signup": "phone_signup",
                //     "ip": "ip",
                // },
                "data": {
                    "phone_signup": phone_signup,
                    "ip": ip,
                },
            };

            $.ajax(settings).done(function(response) {
                // const data = JSON.parse(response);
                // console.log(data);
            });
            $('body').addClass('van-overflow-hidden');
            $('.register-button__otp').addClass('van-button--disabled');
            $('.van-toast--loading').removeClass('display-none');
            setTimeout(function() {
                $('.van-toast--loading').addClass('display-none');
                $('.van-toast--text').removeClass('display-none');
                $('.van-toast--text .van-toast__text').html('Mã xác nhận đã gửi thành công');
                setTimeout(function() {
                    $('.van-toast--text').addClass('display-none')
                }, 500)
            }, 1300);
            var value = 60;
            localStorage.setItem("Cowndown", value);
            setTimeout(function() {
                $('body').removeClass('van-overflow-hidden')
            }, 1700)
        } else {
            if (phone_signup == '') {
                $('.errrorPhone').html("Vui lòng nhập SĐT");
                $(".Nationalarea-input").keyup(function() {
                    $('.errrorPhone').html("")
                });
            } else if (length_input <= 9) {
                $('.errrorPhone').html("SĐT quá ngắn hoặc không đúng");
                $(".Nationalarea-input").keyup(function() {
                    $('.errrorPhone').html("")
                });
            } /*else if (!checkMail) {
                $('.errrorPhone').html("Địa chỉ email không đúng định dạng");
                $(".Nationalarea-input").keyup(function() {
                    $('.errrorPhone').html("")
                });
            } */
        }

    });
    /**************************************************************/
    document.querySelector(".checkbox").checked = !0;
    $('.signup_check').click(function() {
            var phone_signup = $(".Nationalarea-input").val().trim();
            var pass_signup = $(".pass_signup").val().trim();
            var re_pass_signup = $(".re_pass_signup").val().trim();
            //var otp_signup = $(".otp_signup").val().trim();
            var infiniti_signup = $(".infiniti_signup").val().trim();
            const ip = $('#ip').text();
            $(this).attr("disabled", "disabled");
            var length_input = phone_signup.length;
            const checkMail = validateEmail(phone_signup);
            if (phone_signup != "" && pass_signup != "" && re_pass_signup != "" && length_input > 8 && infiniti_signup != "" && pass_signup == re_pass_signup) {
                var settings = {
                    "url": "/account/signup",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "phone_signup": "phone_signup",
                        "password_v1": "pass_signup",
                       // "codeOTP": "otp_signup",
                        "MaGioiThieu": "infiniti_signup",
                        "ip":"ip",
                    },
                    "data": {
                        "phone_signup": phone_signup,
                        "password_v1": pass_signup,
                       // "codeOTP": otp_signup,
                        "MaGioiThieu": infiniti_signup,
                        "ip":ip,
                    },
                };

                $.ajax(settings).done(function(response) {
                    const dataSignUP = JSON.parse(response);
                    if (dataSignUP.message == 1) {
                        $('.van-toast--text').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').html('Đăng ký thành công.');
                        setTimeout(function() {
                            $('.van-toast--text').addClass('display-none')
                        }, 1000);
                        $('.van-tab2').removeClass('van-tab--active');
                        $('.van-tab1').addClass('van-tab--active');
                        $('.van-tabs__track').addClass('login');
                        $('.van-tabs__track').removeClass('register')
                        $('.signup_check').removeAttr("disabled");
                    } else if (dataSignUP.message == 0) {
                        $('.van-toast--fail').removeClass('display-none');
                        $('.van-toast--fail .van-toast__text').html('Số điện thoại di động đã được đăng ký.');
                        setTimeout(function() {
                            $('.van-toast--fail').addClass('display-none')
                        }, 1000)
                        $('.signup_check').removeAttr("disabled");
                    } else if (dataSignUP.message == 2) {
                        $('.van-toast--fail').removeClass('display-none');
                        $('.van-toast--fail .van-toast__text').html('Sai mã xác minh!');
                        setTimeout(function() {
                            $('.van-toast--fail').addClass('display-none')
                        }, 1000);
                        $('.signup_check').removeAttr("disabled");
                    } else if (dataSignUP.message == 3) {
                        $('.van-toast--fail').removeClass('display-none');
                        $('.van-toast--fail .van-toast__text').html('Mã đề xuất không tồn tại!');
                        setTimeout(function() {
                            $('.van-toast--fail').addClass('display-none')
                        }, 1000);
                        $('.signup_check').removeAttr("disabled");
                    }
                });
            }
            var checkbox = document.querySelector('.checkbox').checked;
            if (checkbox == !1) {
                $('.van-toast--text').removeClass("display-none");
                $('.van-toast--text .van-toast__text').html('Vui lòng đồng ý với chính sách bảo mật trước tiên.');
                setTimeout(function() {
                    setTimeout(function() {
                        $('.van-toast--text').addClass("display-none");
                        $('.signup_check').removeAttr("disabled");
                    }, 1000)
                }, 200);
            } else if (phone_signup == "") {
                $('.errrorPhone').html("Vui lòng nhập đúng định dạng địa chỉ email");
                $(".Nationalarea-input").keyup(function() {
                    $('.errrorPhone').html("")
                });
                $('.signup_check').removeAttr("disabled");
            } else if (length_input <= 8) {
                $('.errrorPhone').html("Địa chỉ email quá ngắn hoặc không đúng");
                $(".Nationalarea-input").keyup(function() {
                    $('.errrorPhone').html("")
                });
            } else if (pass_signup == "") {
                $('.pa').html("Vui lòng nhập mật khẩu");
                $(".pass_signup").keyup(function() {
                    $('.pa').html("")
                });
                $('.signup_check').removeAttr("disabled");
            } else if (re_pass_signup == "") {
                $('.re').html("Vui lòng nhập mật khẩu xác nhận");
                $(".re_pass_signup").keyup(function() {
                    $('.re').html("")
                });
                $('.signup_check').removeAttr("disabled");
            } else if (pass_signup != re_pass_signup) {
                $('.kk').html("Mật khẩu không trùng khớp");
                $(".re_pass_signup").keyup(function() {
                    $('.kk').html("")
                });
                $('.signup_check').removeAttr("disabled");
            } else if (infiniti_signup == "") {
                $('.van-toast--fail').removeClass("display-none");
                $('.van-toast--fail .van-toast__text').html('Vui lòng nhập mã đề xuất.');
                setTimeout(function() {
                    setTimeout(function() {
                        $('.van-toast--fail').addClass("display-none")
                    }, 1000)
                }, 200)
                $('.signup_check').removeAttr("disabled");
            } /*else if (otp_signup == "") {
                $('.van-toast--fail').removeClass("display-none");
                $('.van-toast--fail .van-toast__text').html('Vui lòng nhập mã OTP.');
                setTimeout(function() {
                    setTimeout(function() {
                        $('.van-toast--fail').addClass("display-none")
                    }, 1000)
                }, 200)
                $('.signup_check').removeAttr("disabled");
            } */
        })
        /**************************************************************/
});