/** header 按钮切换 */
(function () {
    navClick('.header-item', 'bar');
    navClick('.header-link', 'cur');
    var i = 0;
    var status = [];
    $(".header-item").each(function () {
        //标记当前页面
        var isClass = $(this).children(".header-link").hasClass("cur");
        if (!isClass) {
            status[i] = 0;
            i++
        } else {
            status[i] = 1;
            i++;
        }
        $(this).hover(function () {
            //移除所有特效
            $(".header-item").removeClass("bar")
            $(".header-item").children(".header-link").removeClass("cur");
            $(this).addClass("bar")
            $(this).children(".header-link").addClass("cur");
        })
    })
    $("section").hover(function () {
        // 恢复当前导航样式
        $(".header-item").removeClass("bar")
        $(".header-item").children(".header-link").removeClass("cur");
        var j = 0;
        $(".header-item").each(function () {
            //标记当前页面
            var ele = $(this);
            (function (j) {
                if (status[j] === 1) {
                    ele.addClass("bar")
                    ele.children(".header-link").addClass("cur");
                }
            })(j);
            j++;
        });
        $(".nav-slide").slideUp();
    })
    $(".box").hover(function () {
        // 恢复当前导航样式
        $(".header-item").removeClass("bar")
        $(".header-item").children(".header-link").removeClass("cur");
        var j = 0;
        $(".header-item").each(function () {
            //标记当前页面
            var ele = $(this);
            (function (j) {
                if (status[j] === 1) {
                    ele.addClass("bar")
                    ele.children(".header-link").addClass("cur");
                }
            })(j);
            j++;
        });
        $(".nav-slide").slideUp();
    })
    $(".add-box").hover(function () {
        // 恢复当前导航样式
        $(".header-item").removeClass("bar")
        $(".header-item").children(".header-link").removeClass("cur");
        var j = 0;
        $(".header-item").each(function () {
            //标记当前页面
            var ele = $(this);
            (function (j) {
                if (status[j] === 1) {
                    ele.addClass("bar")
                    ele.children(".header-link").addClass("cur");
                }
            })(j);
            j++;
        });
        $(".nav-slide").slideUp();
    })
})();

/* header 下拉菜单 */
(function () {
    var slideEle = document.getElementsByClassName("nav-slide");
    $(".header-item").on("mouseover", function () {
        var dataId = $(this).attr("data-id")
        var index = Number(dataId)
        $(".nav-slide").css("display", "none")
        if (index != 0) {
            slideEle[index - 1].style.display = "block";
        }
        switch (index) {
            case 1:
                $(".slide-list li")[0].setAttribute("class", "hover")
                $(".slide-list li")[0].style.borderColor = "#3fcdfd"
                $(".slide-list li").hover(function () {
                    $(".slide-list li").removeClass("hover").css("borderColor", "#e6e6e6")
                    $(this).addClass("hover").css("borderColor", "#3fcdfd")
                    var index = $(this).index();
                    $(".img-left").css("display", "none");
                    $(".img-left")[5].style.display = "block";
                    $(".img-left")[10].style.display = "block";
                    $(".img-left")[15].style.display = "block";
                    $(".img-left")[index].style.display = "block"
                })
                break;
            case 2:
                $(".slide-list li")[5].setAttribute("class", "hover")
                $(".slide-list li")[5].style.borderColor = "#3fcdfd"
                $(".slide-list li").hover(function () {
                    $(".slide-list li").removeClass("hover").css("borderColor", "#e6e6e6")
                    $(this).addClass("hover").css("borderColor", "#3fcdfd")
                    var index = $(this).index();
                    $(".img-left").css("display", "none");
                    $(".img-left")[0].style.display = "block";
                    $(".img-left")[10].style.display = "block";
                    $(".img-left")[15].style.display = "block";
                    $(".img-left")[index + 5].style.display = "block"
                })
                break;
            case 3:
                $(".slide-list li")[10].setAttribute("class", "hover")
                $(".slide-list li")[10].style.borderColor = "#3fcdfd"
                $(".slide-list li").hover(function () {
                    $(".slide-list li").removeClass("hover").css("borderColor", "#e6e6e6")
                    $(this).addClass("hover").css("borderColor", "#3fcdfd")
                    var index = $(this).index();
                    $(".img-left").css("display", "none");
                    $(".img-left")[0].style.display = "block";
                    $(".img-left")[5].style.display = "block";
                    $(".img-left")[15].style.display = "block";
                    $(".img-left")[index + 10].style.display = "block"
                })
                break;
            case 4:
                $(".slide-list li")[15].setAttribute("class", "hover")
                $(".slide-list li")[15].style.borderColor = "#3fcdfd"
                $(".slide-list li").hover(function () {
                    $(".slide-list li").removeClass("hover").css("borderColor", "#e6e6e6")
                    $(this).addClass("hover").css("borderColor", "#3fcdfd")
                    var index = $(this).index();
                    $(".img-left").css("display", "none");
                    $(".img-left")[0].style.display = "block";
                    $(".img-left")[5].style.display = "block";
                    $(".img-left")[10].style.display = "block";
                    $(".img-left")[index + 15].style.display = "block"
                })
        }
    })
})();

$(".nav-slide").on("mouseover", function () {
    $(this).css("display", "block")
})

/*********************************************************************************** */
/** 首页 底部特效栏 */
//服务流程
$(".item-list li").each(function () {
    $(this).hover(function () {
        $(this).children(".prop-server").css("display", "block");
    }, function () {
        $(this).children(".prop-server").css("display", "none");
    })
})
//行业解决方案
$(".index-jieJue li").each(function () {
    $(this).hover(function () {
        $(this).children(".hangYe").css("borderColor", "#3cc7fb");
        $(this).find(".hangye-shade").css("display", "block");

    }, function () {
        $(this).find(".hangye-shade").css("display", "none");
        $(this).children(".hangYe").css("borderColor", "#e6e6e6")
    })
})
/********************************************************************************** */
/** 招兵买马 招聘菜单 打开关闭 */
var flag = [1, 0, 0];
$('.right-item').each(function () {
    $(this).on('click', function () {
        var index = $(this).index();
        var ele_1 = $(this).children('.r-item-hid');
        var ele_2 = $(this).children(".r-item-box").children('#iconDown');
        if (!flag[index]) {
            // 全部收起
            $('.r-item-hid').slideUp();
            $('#iconDown').removeClass("active");
            flag = [0, 0, 0];
            // 只展示当前
            ele_1.slideDown();
            ele_2.addClass("active");
            flag[index] = 1;
        } else {
            ele_1.slideUp();
            ele_2.removeClass("active");
            flag[index] = 0;
        }
    })
});
//转场
$(".h-banner-box").slideDown(400);
/*********************************************************************************** */
/** about 关于我们 详情菜单 点击事件 */
$(".nav-item").each(function () {
    $(this).on('mouseenter', function () {
        $('.nav-item').removeClass('cur');
        $(this).addClass('cur');
        $('.a-tit-text').text($(this).text());
        // console.log($(this).index())
        var index = $(this).index();

        switch (index) {
            case 0:
                $(".a-det-content").css("display", "none");
                $('.a_1').css('display', 'block');
                break;
            case 1:
                $(".a-det-content").css("display", "none");
                $('.a_2').css('display', 'block');
                break;
            case 2:
                $(".a-det-content").css("display", "none");
                $('.a_3').css('display', 'block');

                // 百度地图API功能
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(121.411649, 31.170635);
                map.centerAndZoom(point, 15);
                map.setCenter(point)
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                break;
            case 3:
                $(".a-det-content").css("display", "none");
                $('.a_4').css('display', 'block');
                break;
        }

    })
})

/*********************************************************************************** */
/** 案例分析 鼠标hover案例时 */
$(".item-img").each(function () {
    $(this).hover(function () {
        $(this).children(".look-more").css("display", "block")
        $(this).addClass("active")
    }, function () {
        $(this).children(".look-more").css("display", "none")
        $(this).removeClass("active")
    })
});
//过场动画
$(".c-banner-box").fadeIn(800);
(function () {
    $(".banner-slogan").animate({
        left: 50 + "%"
    }, 1000);
})();

/*********************************************************************************** */
/* footer 二维码放大 */
$(".code").on("mousemove", function () {
    $(".layui-layer").fadeIn("fast");
    return false;
})
$(".code").on("mouseout", function () {
    $(".layui-layer").css("display", "none");
    return false;
})

/*********************************************************************************** */
/* header 样式改变*/
var a = $(this).scrollTop();
$(window).on("scroll", function () {
    var top = $(this).scrollTop();
    // if(top > 0){
    //     $(".img-logo").attr("src", "./jifen_img/logo2.png")
    //     $(".header-wrap").css("backgroundColor", "rgb(30, 93, 226)")
    //     $(".header-link ").css("color", "#fff")
    // }else{
    //     $(".img-logo").attr("src", "./jifen_img/logo.png")
    //     $(".header-wrap").css("backgroundColor", "#fff")
    //     $(".header-link ").css("color", "#333")
    // }
});
/******************************************************** */
/**
 * 产品服务
 * */
$(".s-banner-box").fadeIn(800);
$(".det-item").slideDown(800);
/******************************************************** */