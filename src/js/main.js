/* 搜索栏 */
var link = new String();

function google() {
    link = "https://www.google.com/search?q=";
    $("#search-tab span").removeClass("clicked"); // 先移除其他的标签 clicked 样式，再添加自己的
    $("#search-tab span:nth-child(1)").addClass("clicked");
}

function bing() {
    link = "https://cn.bing.com/search?q=";
    $("#search-tab span").removeClass("clicked");
    $("#search-tab span:nth-child(2)").addClass("clicked");
}

function duckduckgo() {
    link = "https://duckduckgo.com/?q=";
    $("#search-tab span").removeClass("clicked");
    $("#search-tab span:nth-child(3)").addClass("clicked");
}

function sogou() {
    link = "https://www.sogou.com/web?query=";
    $("#search-tab span").removeClass("clicked");
    $("#search-tab span:nth-child(4)").addClass("clicked");
}

function baidu() {
    link = "https://www.baidu.com/s?wd=";
    $("#search-tab span").removeClass("clicked");
    $("#search-tab span:nth-child(5)").addClass("clicked");
}

function zhihu() {
    link = "https://www.zhihu.com/search?q=";
    $("#search-tab span").removeClass("clicked");
    $("#search-tab span:nth-child(6)").addClass("clicked");
}


/* 搜索键。拼出要跳转的链接。link 变量加上搜索框内容拼成一个链接 */
function go() {
    s = new String();
    s = $("#search-bar input[ name = 'search-text' ]").val();
    s = link + s;
    $("#search-bar a").attr("href", s);
}


/* input 绑定一个事件，按回车键等同于按下搜索键 */
function eKeyup(e) {
    e = e ? e : (window.event ? window.event : null);
    if (e.keyCode == 13) //Enter
    {
        document.getElementById("go").click();
    }
}


/* 默认点击一个搜索 tab。（网页加载完自动点击）*/
function autoClickSearchTab() {
    document.getElementById("baidu").click();
}


/* 主体内容生成函数 */
function generateNav(nav_config_path, nav_name){


    // 读取一个 json 文件，读取成功后并执行函数
    $.getJSON(nav_config_path, function(json) {

        // 生成板块的容器。里面放 board-title 和 board-content。
        var board_container = "<div id=\"" + nav_name + "\" class=\"board d-flex flex-column p-3\"></div>";
        $("#body-right-bottom-container").append(board_container);

        // 生成 board-title 和 board-content（里面放 item）。
        var board = "<div class=\"board-title\"><a name=\"" + nav_name + "\">🌻 " + nav_name + "</a></div><div class=\"board-content d-flex flex-row flex-wrap\"> ";
        $("#" + nav_name).append(board); 

        // 遍历一个 json 文件内容。(将一个数组 block_item 中的每个成员（一个小盒子）放进 board-content)。
        $.each(json.block_item, function(i, item) {
            var title_temp = item.title;
            var web_temp = item.web;
            var description_temp = item.description;
            var item_box = "<a class=\"item d-flex flex-column\" href=\"" + web_temp +"\"><div class=\"intro d-flex flex-row\"><img src=\"#\"><p>" + title_temp + "</p></div><p class=\"des\">“ " + description_temp + " ”</p></a>";
            $("#" + nav_name + " .board-content").append(item_box);   
        })

    });

}


/* 补充：每个大的板块的 HTML 原始结构。由 generateNav(nav_config_path, nav_name) 函数生成的 HTML 代码。 */
/*
<!--第 n 个大的版面。在其中放一个个 item-->

<div id="nav_name" class="board d-flex flex-column p-3">
    <div class="board-title"><a name="nav_name">🌻 nav_name</a></div>
    <div class="board-content d-flex flex-row flex-wrap">

        <!--每个 item-->
        <a class="item d-flex flex-column" href="web_temp">
            <div class="intro d-flex flex-row">
                <img src="#">
                <p>title_temp</p>
            </div>
            <p class="des">“ description_temp ”</p>
        </a>
        <!--item 结束-->

    </div>
    <hr>
</div>

<!--第 n 个大的版面结束-->
*/