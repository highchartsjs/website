## Highcharts Core V11 - 2023 Q2 早期

* 视觉设计重构（大调整）
* 去掉 IE8 及以下版本的兼容性支持
* 默认情况下，为常青的浏览器（evergreen browsers）构建，并为旧的浏览器提供一个旧的兼容性文件路径，[更多详情](https://github.com/highcharts/highcharts/issues/18070)
* 新的声波模块（sonification module），提供更多的功能
* 柱状、条状、饼状和其他系列类型支持边框圆角（border radius）
* 重写样式模式的默认 CSS，使用 CSS 变量替代 SASS，[更多详情](https://github.com/highcharts/highcharts/pull/18115)
* 新的图表类型：pictorial，使用简化形状的信息图形样式可视化来表示数量，详见 [试验性例子](https://jshare.com.cn/github/highcharts/highcharts/tree/master/samples/highcharts/studies/pictorial/)
* 新的图表类型：树图（tree graph），用于展示树形的关系图，详见 [pull request](https://github.com/highcharts/highcharts/pull/16805)