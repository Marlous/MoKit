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

/* 搜索键。拼出要跳转的链接 */
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

/* 导航栏与主体内容生成 */
