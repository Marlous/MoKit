# MoKit
## Introduction - 介绍
### Summary - 概要
个人导航网站。

### Feature - 特性
- 可灵活定制成属于自己的导航网站，配置简单。
- 丰富的搜索引擎集合。
- 可自动获取网站图标。
- 效果：
![效果](readme_img/图1.PNG)

## Usage - 用法
1. 在 `config` 文件夹中根据 `template.json` 模板文件填写自己收藏的网站。

2. 修改导航栏。在 `index.html` 文件中找到如下对应的代码，进行修改。
```html
<!--导航栏-->
<div id="nav" class="d-flex flex-column p-3 align-items-center">
    <p>MoKit</p>
    <p>Common tools using daily</p>
    <img src="img/logo.png">
    <a class="nav-link" href="#检索导航门户">检索导航门户</a>
    <a class="nav-link" href="#设计相关">设计相关</a>
    <a class="nav-link" href="#开发者">开发者</a>
    <a class="nav-link" href="#白帽子黑客">白帽子黑客</a>
    <a class="nav-link" href="#学术办公">学术办公</a>
    <a class="nav-link" href="#其他小工具">其他小工具</a>
    <a class="nav-link" href="#文档模板">文档模板</a>
</div>
```

3. 添加主体内容。在 `index.html` 文件中找到对应的代码，直接调用 generateNav()` 函数即可：
```js
<script>
    generateNav("config/检索导航门户.json", "检索导航门户");
    generateNav("config/设计相关.json", "设计相关");
    generateNav("config/开发者.json", "开发者");
    generateNav("config/白帽子黑客.json", "白帽子黑客");
    generateNav("config/学术办公.json", "学术办公");
    generateNav("config/其他小工具.json", "其他小工具");
    generateNav("config/文档模板.json", "文档模板");
</script>
```

4. 注意 :
为避免混乱，json 文件以想要显示的导航栏名称命名即可，其它两处也使用相同的名字。

## Support - 支持
### Contact - 联系
- 邮箱：Goonecat@foxmail.com

## License - 版权信息
MoKit is released under the GPL license. See [LICENSE](https://github.com/Marlous/WFACat/blob/master/LICENSE) for additional details.