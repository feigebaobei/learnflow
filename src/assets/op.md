# 实操

1. 在项目中安装babel-cli babel-preset-flow `npm i babel-cli babel-preset-flow -D`  
2. 设置prssets.  
3. 设置scripts.build、scripts.prepublish.  
4. 在开发环境安装flow-bin `npm i flow-bin -D`  
5. 初始化项目flow init  
6. 启动flow的后台程序flow status  
7. 编写项目代码。  
8. 为需要检查的文件添加标志。  
9. 运行开始检查文件的命令。  
10. 停止检查 flow stop  





```
donkey@yuan MINGW64 /d/code/github/learnflow (master)
$ npm i flow-bin -D

donkey@yuan MINGW64 /d/code/github/learnflow (master)
$ npm install --save-dev flow-bin
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fse                                                                                                                                                                                               vents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@                                                                                                                                                                                               1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"}                                                                                                                                                                                               )

+ flow-bin@0.98.1
added 1 package from 1 contributor and audited 1954 packages in 257.857s
found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

donkey@yuan MINGW64 /d/code/github/learnflow (master)
$ npm run flow init

> learnflow@1.0.0 flow D:\code\github\learnflow
> flow "init"


donkey@yuan MINGW64 /d/code/github/learnflow (master)
$ npm run flow

> learnflow@1.0.0 flow D:\code\github\learnflow
> flow

Launching Flow server for D:\code\github\learnflow
Spawned flow server (pid=9032)
Logs will go to C:\Users\donkey\AppData\Local\Temp\flow\DzCzBcodezBgithubzBlearn                                                                                                                                                                                               flow.log
Monitor logs will go to C:\Users\donkey\AppData\Local\Temp\flow\DzCzBcodezBgithu                                                                                                                                                                                               bzBlearnflow.monitor_log
Started a new flow server: -Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is initializing (starting up)
Please wait. Server is initializing (parsed files 1000)
Please wait. Server is initializing (parsed files 3538)
Please wait. Server is initializing (parsed files 3538)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (waiting for Watchman - giving up in 14 seco                                                                                                                                                                                               nds)
Please wait. Server is initializing (waiting for Watchman - giving up in 14 seco                                                                                                                                                                                               nds)
No errors!


```
