import { request } from '@/utils/request'

/**
 * 获取歌曲详情
 */
export function getSongDetail(ids: number) {
  return request<any>(`/song/detail?ids=${ids}`)
}

/**
 * 获取歌词信息
 */
export function getSongLyric(id: number) {
  return request<any>(`/lyric?id=${id}`)
}
