// https://umijs.org/zh-CN/docs/runtime-config#%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
import { history } from 'umi';
import { cookie } from 'project-libs'
/**
 * 在初始加载和路由切换时做一些事情。
 * 比如用于做埋点统计，
 * 
 * 1. 切换页面的时候判断是都需要登陆
 */
export function onRouteChange(route: any) {
    const { location, routes } = route;
    // 当前路由是否在配置列表里 && 需要校验
    const judgeList = routes[0].routes.filter((item: any) => item.path === location.pathname && item.auth)
    if (judgeList.length) {
        const user = cookie.get('user');
        if (!user) {
            history.push({
                pathname: '/login',
                query: {
                    from: location.pathname
                }
            })
        }
    }
}


/**
 * 渲染
 * 覆写 render。
 * 比如用于渲染之前做权限校验
 */
export function render(oldRender: any) {
    console.log('oldRender--', oldRender);
    oldRender()


    // fetch('/api/auth').then(auth => {
    //     if (auth.isLogin) { oldRender() }
    //     else {
    //         history.push('/login');
    //         oldRender()
    //     }
    // });
}