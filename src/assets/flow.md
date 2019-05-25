# installation

## setup compiler



## setup flow

flow最好的工作方式是在每个项目中安装明确版本的flow,其次是使用全局方式安装。  
若你有已经熟练`npm`或`yarn`，那你一定可以熟练的处理。在`devDependency`里安装`flow-bin`。  
`npm i flow-bin -S`  
在`package.json`里的`script`里添加`flow`  
```
{
    "name": "flow",
    "version": "1.0.0",
    "devDependencies": {
        "flow-bin": "^0.99.0"
    },
    "scripts": {
        "flow": "flow"
    }
}
```
执行下面的命令。  
第一次执行时：`npm run flow init`  
非第一次执行时：`npm run flow`  