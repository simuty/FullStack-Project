/**
 * 快速生成 ts model 的方法
 * 1. vscode插件：DvaJs Snippets， admodel
 * 2. 终端 >dva-to-ts xxx.js 
 * 
 * !注意, 会删除 js文件，最好先备份一个，否则注释啥的都没了。。
 * !日日日日， 多写了default, 一直不成功。。。
 * 
 * 第二步骤依赖：
 * https://github.com/zj-baozi/react-dva-to-typescript-transform
 */

import house from './house'
import user from './user'
import login from './login'

export {
     house,
     user,login
}

 