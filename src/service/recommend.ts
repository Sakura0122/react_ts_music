import { request } from '@/utils/request'
import { Banners, HotRecommends, newAlbums } from '@/types/recommend'

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
