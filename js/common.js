$(document).ready(function(){
    var commonindex = null
    // 分类显示隐藏
    $('.allgate').hover(function(){
        $('.navgate').show()
    },function(){
        $('.navgate').hide()
    })
    // 返回顶部
    $('.backtop').click(function(){
        $(document).scrollTop('0px')
    })
    // 文档滚动搜索框显示隐藏
    $(document).scroll(function(){
        var val = $(this).scrollTop()
        if (val >= 162) {
            $('.hiddensearch').show()
        } else {
            $('.hiddensearch').hide()
        }
    })
    // 懒加载
    lazyLoadInit({
        coverDiv:'<img style="width:100%;height:100%;" src="./images/lazy.gif"/>',
        offsetBottom:100,
        offsetTopm:100,
        showTime:1000
    });
})