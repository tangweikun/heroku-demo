# CNODE

## Target

输出 CNode(https://cnodejs.org/ ) 社区首页的所有帖子标题和链接

## HEROKU

1.  添加 `Procfile` 文件指定启动程序
1.  为 `heroku` 提供一个环境变量 process.env.PORT 来供我们监听
1.  通过 heroku login 来登录
1.  执行 `heroku create`, heroku 会为我们随机取一个应用名字，并提供一个 git 仓库给我们
1.  执行 `git push heroku master`
1.  push 完成后，在命令键入 `heroku open`, 则 heroku 会自动打开浏览器带我们去到相应的网址
