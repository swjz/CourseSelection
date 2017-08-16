# 选什么课 Find Courses To Take
## Introduction
_Find Courses To Take_ is a web-based mini-app that helps students rate courses and professors. It is a WeChat Mini Program, which is a package inside WeChat using its API. The front-end is based on HTML, CSS and JavaScript. For simplicity, I use LeanCloud BaaS as back-end.
The mini-app is now available on WeChat by searching "选什么课".

## TODO
### High Priority
- [ ] 获取小程序二维码的功能
- [ ] 模糊搜索（弃用 LeanCloud 应用内搜索）

### Medium Priority


### Low Priority
- [ ] 分别按三个评分指标排序的功能
- [ ] 优化日期时间的显示
- [ ] 意见反馈功能
- [ ] 点赞数量显示(限制每人只能点一次)
- [ ] 在 detail 页面加上返回 browse 页面的按钮
- [ ] 1000楼以上的调整

### Finished
- [x] 出设计草图
- [x] 三个页面的细节
- [x] 将提交请求上传到数据库
- [x] 读取数据库到 Browse 页面
- [x] 算三项平均分
- [x] Browse 页面下拉刷新
- [x] Detail 页面下拉刷新
- [x] 读取数据库到 Detail 页面
- [x] 「写评论」跳转到 Detail 页面，自动补全课程信息 (用 globaldata)
- [x] 评价完毕后跳转到课程细节页
- [x] 要求提交时关键字段不能为空
- [x] 分享菜单
- [x] 改 tabBar 图标
- [x] 修复 grade string 无法做加法(parse to number)的 bug
- [x] detail 页刷新的时候把上面的平均分也刷新一下
- [x] 平均成绩 0.0 和 NaN 的 bug
- [x] 调宽三项评分间距
- [x] 难度和收获改成10分制
- [x] 一次加载十门课，下拉再继续加载(数组concat)
- [x] 在 rate 界面最后留半页空白
- [x] 暂时删除日期时间的显示
- [x] 做搜索框(按课名、教师名、院系名筛选)
