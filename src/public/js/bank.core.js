$(document).ready(function() {
    $('.hideBtn button').click(function(e) {
        e.preventDefault();
        $('.hideBtn').addClass('display-none');
        $('.van-hairline--top-bottom').removeClass('display-none');
        $('.btn-update-banking').addClass('display-none');
    });
    $('.backToShowBank').click(function(e) {
        e.preventDefault();
        $('.van-hairline--top-bottom').addClass('display-none');
        $('.hideBtn').removeClass('display-none')
    })
    $('.van-overlay, .van-picker__cancel').click(function() {
        $('.van-popup--round').addClass('show_btn_bottom');
        $('.van-overlay').animate({ opacity: '0' }, 350);
        $('body').removeClass("hsc");
        setTimeout(() => { $('.van-overlay').addClass("display-none") }, 350)
    })
    $('.van-picker-column__item').click(function() {
        $('.van-picker-column__item').removeClass('van-picker-column__item--selected');
        $(this).addClass('van-picker-column__item--selected')
    });
    $('.van-picker-column__item:eq(0)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 110px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 110px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(1)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 66px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 66px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(2)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 22px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, 22px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(3)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -22px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -22px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(4)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -66px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -66px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(5)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -110px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -110px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(6)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -154px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -154px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(7)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -198px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -198px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(8)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -242px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -242px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(9)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -286px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -286px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(10)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -330px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -330px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    });
    $('.van-picker-column__item:eq(11)').click(function() {
        document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -374px, 0px);transition-duration: 200ms;transition-property: all;";
        setTimeout(() => { document.querySelector('.van-picker-column__wrapper').style = "transform: translate3d(0px, -374px, 0px);transition-duration: 0ms;transition-property: none;" }, 100)
    })
});

$(document).ready(function() {
    $('.add_banking').click(function() {
        var name_user_bank = $('.name_user_bank').val();
        var name_bank = $('.name_bank').val();
        var stk_bank = $('.stk_bank').val().trim();
        if (name_user_bank != "" && name_bank != "" && stk_bank != "") {
            $.ajax({
                type: "POST",
                url: "/member/MyBank",
                data: {
                    name_user_bank: name_user_bank,
                    name_bank: name_bank,
                    stk_bank: stk_bank,
                    type: "add"
                },
                success: function(response) {
                    const status = JSON.parse(response);
                    if (status.message == 1) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Thêm tài khoản ngân hàng thành công!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => {
                                $('.van-toast--text').addClass('display-none');
                                window.location = "MyBank"
                            }, 500)
                        }, 900)
                    } else if (status.message == 3) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Tài khoản này đã tồn tại!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => { $('.van-toast--text').addClass('display-none') }, 500)
                        }, 900)
                    } else if (status.message == 2) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Mã xác minh không chính xác!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => { $('.van-toast--text').addClass('display-none') }, 500)
                        }, 900)
                    }
                }
            })
        } else if (name_user_bank == "") {
            $('.van-field__error-message').eq(0).text("Vui lòng nhập tên thực");
            $(".name_user_bank").keyup(function() { $('.van-field__error-message').html("") })
        } else if (name_bank == "") {
            $('.van-field__error-message').eq(1).text("Vui lòng nhập tên ngân hàng");
            $(".name_bank").keyup(function() { $('.van-field__error-message').html("") })
        } else if (stk_bank == "") {
            $('.van-field__error-message').eq(2).text("Vui lòng nhập số tài khoản ngân hàng");
            $(".stk_bank").keyup(function() { $('.van-field__error-message').html("") })
        }
    })
    $('.btn-update-banking').click(function() {
        var name_user_bank = $('.name_user_bank').val();
        var name_bank = $('.name_bank').val();
        var stk_bank = $('.stk_bank').val().trim();
        if (name_user_bank != "" && name_bank != "" && stk_bank != "") {
            $.ajax({
                type: "POST",
                url: "/member/MyBank",
                data: {
                    name_user_bank: name_user_bank,
                    name_bank: name_bank,
                    stk_bank: stk_bank,
                    type: "update"
                },
                success: function(response) {
                    const status = JSON.parse(response);
                    if (status.message == 1) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Thêm tài khoản ngân hàng thành công!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => {
                                $('.van-toast--text').addClass('display-none');
                                window.location = "MyBank"
                            }, 500)
                        }, 900)
                    } else if (status.message == 3) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Tài khoản này đã tồn tại!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => { $('.van-toast--text').addClass('display-none') }, 500)
                        }, 900)
                    } else if (status.message == 2) {
                        $('.van-toast--loading').removeClass('display-none');
                        $('.van-toast--text .van-toast__text').text('Mã xác minh không chính xác!');
                        setTimeout(() => {
                            $('.van-toast--text').removeClass('display-none');
                            $('.van-toast--loading').addClass('display-none');
                            setTimeout(() => { $('.van-toast--text').addClass('display-none') }, 500)
                        }, 900)
                    }
                }
            })
        } else if (name_user_bank == "") {
            $('.van-field__error-message').eq(0).text("Vui lòng nhập tên thực");
            $(".name_user_bank").keyup(function() { $('.van-field__error-message').html("") })
        } else if (name_bank == "") {
            $('.van-field__error-message').eq(1).text("Vui lòng nhập tên ngân hàng");
            $(".name_bank").keyup(function() { $('.van-field__error-message').html("") })
        } else if (stk_bank == "") {
            $('.van-field__error-message').eq(2).text("Vui lòng nhập số tài khoản ngân hàng");
            $(".stk_bank").keyup(function() { $('.van-field__error-message').html("") })
        }
    })
})