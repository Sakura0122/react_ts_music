// 计数播放数量
export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

// 更改图片尺寸
export function getImageSize(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}y${height}`
}

// 计算时间
export function formatTime(time: number) {
  // 1.转成秒
  const timeSeconds = time / 1000

  // 2.获取分钟和秒钟
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds % 60)

  // 3.格式化时间
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')

  return `${formatMinute}:${formatSecond}`
}
