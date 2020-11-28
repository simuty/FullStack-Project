/*
 * @Author: simuty
 * @Date: 2020-11-28 17:03:11
 * @LastEditTime: 2020-11-28 17:05:41
 * @LastEditors: Please set LastEditors
 * @Description:
 */
export function getLists(args: any) {
    return fetch(`/api/getList?value=${args}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}
