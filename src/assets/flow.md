# installation

## setup compiler

首先，我的需要安装编译器来揭掉flow types.我们可以在`Babel`和`flow-remove-types`中选择一个。  
`Babel`是一个支持flow的`javascript`编译器。它可以揭掉代码中的注释。  
第二，使用`npm`或`Yarn`安装`babel-cli`和`babel-preset-flow`。  
`npm i babel-cli babel-preset-flow -S`  
第三，我们需要在项目的根目录创建一个`.babelrc`文件（若存在，则不创建）。设置`presets`属性值中包括`flow`。  
```
{
    "presets": ["flow"]
}
```
如果我们的原文件在`src`目录下，我们又想把它编译到其它的目录下。我可以使用下面的命令。   
`./node_modules/.bin/babel src/ -d lib/`  
为了方便，可以使用另一个方法。在`package.json`文件里设置`scripts`.  
```
{
    name: "project",
    "main": "lib/index.js",
    "scripts": {
        "build": "babel src/ -d lib/",
        "prepublish": "npm run build"
    }
}
```
> 提示：当我们在npm上注册我们的代码前，会执行`prepublish`脚本。一般这个脚本使用编译文件。  

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

# usage

## introduce

我们一旦安装flow，我们就会想如何使用它。几乎对于所有新flow项目，我们都会用到以下模式。  

- `flow init` 用来初始化项目。  
- `flow` 开始使用flow后台处理。  
- `// @flow` 标明哪个文件需要flow监控。(下方称为flow file(flow文件))  
- 编写需要flow的代码。  
- 查检代码中的类型错误。  

## initialize we project

为一个项目准备响应flow请求只需要一行代码。  
`flow init`  
在项目的根目录的命令行中运行这行代码，会在根目录里创建一个`.flowconfig`的文件。在这个文件里会告诉flow后台程序开始检查这个根目录下的所以需要检查的文件里的类型错误。  
若我们按部就班地做以上准备工作，那么现在我们就可以使用flow了。  
> 通常会创建一个空的`.flowconfig`文件。但是我们有多种方法自定义flow配置项。  

## run the flow background process

flow的核心功能是可以快速检查代码中的类型错误。一旦flow可以检查项目，它就会立即并快速地检查我的代码。  
第一次开始flow的后台程序去检查flow文件时使用。  
`flow status`  
后台程序会在flow文件有改变时立即检查错误。  
> 使用`flow`与使用`flow status`的效果相同。

> 在任何给定时间只会运行一个后台进程，因此如果多次运行flow，它将使用相同的进程。  

> 需要停止时执行`flow stop`  

## prepare we code for flow

后台程序会监控所有的flow file。现在有一个问题，如何让flow知道应该监控哪些文件？在需要监控的文件的头部添加`// @flow`或`/* @flow */`。flow的后台程序会收集所有的有这个标志的文件并且检查错误。  

> flow的后台程序通常只会在处理有标志的文件，没有标志的文件会被忽略。除非使用`flow check --all`,这行命令的作用范围包括基本用法的作用范围。  

## write flow code

现在已经完成安装和初始化。我们可以开始写实际的flow代码了。现在我们拥有所有已经标记的文件的所有检查类型的权限。下面是一个flow file的例子。  
```
// @flow
function foo(x: ?number): string {
    if (x) {
        return x
    }
    return "default string"
}
```
在function的参数的后面写上期望该function返回的数据类型。  

## check we code

现在是一个伟大的时刻，flow会实时检查项目中的代码。并且指出错误。在命令行中运行`flow`或`flow status`  

# 总结

flow是一个检查数据类型是否与期望数据类型一样的框架。但是js是一个弱类型语言。编程者已经习惯了不写数据类型就使用的方式。不习惯在变量、参数、方法等后面添加指定数据类型的代码。  
它只有报数据类型是否出错。在实际编程中出现的问题大多比这个严重。  
学完后感觉flow在实际作用比较小。  
下面还有一些，我学了。用处不大的知识点。  
若想了解更准确、详细的知识请到[管网](https://flow.org/en/)学习

## flow annotation
## flow cli
## type system
## cli commands
## configuration
## library definitions
## react
## tools
## editors
## linting
## flow strict






























general 一般的，普通的。  
require 需要，要求。  
monitor 监控，班长。  
determine 决定。  
as well 同样地，还不如，此外。  
pattern 模式，图案。  
thus 因此。  
inspect 检查。  
real 实际的。  
real-time 实时的。  
feedback 反馈。  
spawn 产卵，造成，大量生产。  
iterate 迭代。  
gather 收集，收割。  
ensure 保证，确保，使安全。  
consistency 一致性，稠度。  
primitive 原始的。  
arbitrary 任意的，武断的。  
instead 代替。  
certain 必然的，确信。  
refine 精练，提纯。  
leak 泄漏。  
statement 声明，陈述。  
tuple 元组，重数。  