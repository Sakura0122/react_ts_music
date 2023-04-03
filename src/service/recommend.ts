import { request } from '@/utils/request'
import { artists, Banners, HotRecommends, newAlbums } from '@/types/recommend'

/**
 * 获取轮播图
 */
export function getBanners() {
  return request<Banners>('/banner')
}

/**
 * 获取热门推荐
 */
export function getHotRecommend(limit = 30) {
  return request<HotRecommends>(`/personalized?limit=${limit}`)
}

/**
 * 获取新碟上架
 */
export function getNewAlbums() {
  return request<newAlbums>('/album/newest')
}

/**
 * 获取歌单详情
 */
export function getPlayListDetail(id: number) {
  return request(`/playlist/detail?id=${id}`)
}

/**
 * 入驻歌手
 */
export function getArtistList(limit = 30) {
  return request<artists>(`/artist/list?limit=${limit}`)
}
