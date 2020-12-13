import moment from 'moment';

/**
 * 格式化时间
 * @param date 时间
 * @param type 默认 YYYY-MM-DD HH:mm:ss； 非 all 返回YYYY-MM-DD
 */
export function format(date: string | Date, type: string = 'all') {
  if (!isValidDate(date)) {
    return moment(date).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
  }else{
    throw new Error('日期错误')
  }
}

/**
 * 格式化时间, 如果无效返回当前时间
 * @param date 时间
 * @param type 默认 YYYY-MM-DD HH:mm:ss； 非 all 返回YYYY-MM-DD
 */
export function formatOrCurren(date: string | Date, type: string = 'all') {
  const _date = isValidDate(date) ? date : moment();
  return moment(_date).format(
    type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD',
  );
}

/**
 * !不通用
 * 校验是否是有效的日期
 * true: 有效的日期格式
 * false: 无效的日期
 * @param dateStr
 */
export function isValidDate(dateStr: any): boolean {
    return !isNaN(new Date(dateStr).getDate());
}
