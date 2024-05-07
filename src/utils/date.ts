import { padStart } from 'lodash-es'

// 获取两个日期的相对时间
// Get the relative time between two dates
export function getRelativeTime(startDate: Date, endDate = new Date()) {
  const diffSeconds = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
  if (diffSeconds < 0) {
    return null; // No negative differences
  }
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 10) {
    return 'just now'; // Recently
  }
  if (diffMinutes < 60) {
    return `${diffMinutes} minutes ago`; // Minutes ago
  }
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours} hours ago`; // Hours ago
  }
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 10) {
    return `${diffDays} days ago`; // Days ago
  }
  return null; // Beyond the scope of 'days ago', might consider extending or handling differently
}

// 获取一个格式化的日期，格式为：2024 年 1 月 1 日 星期一
export function getFormattedDate(date: Date) {
  const year = date.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const week = dayNames[date.getDay()];

  return `${week}, ${month} ${day}, ${year}`;
}


// 获取两个日期的相差的天数
export function getDiffInDays(startDate: Date, endDate = new Date()) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 86400))
}

// 获取一个短的日期，格式为：04-20
export function getShortDate(date: Date) {
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${padStart(month.toString(), 2, '0')}-${padStart(day.toString(), 2, '0')}`
}

// 获取日期所在的年一共多少天
export function getDaysInYear(date: Date) {
  const year = date.getFullYear()
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366
  }
  return 365
}

// 获取日期所在的年的开始日期
export function getStartOfYear(date: Date) {
  const year = date.getFullYear()
  return new Date(year, 0, 1)
}

// 获取日期所在的天的开始日期
export function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
