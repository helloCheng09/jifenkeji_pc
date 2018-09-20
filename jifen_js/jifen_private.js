/* 菜单栏 点击 删/增css类名 */
function navClick(item, activeClass) {
    $(item).on('click', function () {
        $(item).each(function () {
            $(this).removeClass(activeClass);
        })
        $(this).addClass(activeClass);
    })
}
/**
 * 开关事件
 * flag 判断状态
 * 单开关
 */
function onOff(btn, active) {
    var flag = false;
    $(btn).on('click', function () {
        if (!flag) {
            $(btn).addCss(active)
            flag = true;
        } else {
            $(btn).removeClass(active)
            flag = false;
        }
    })
}