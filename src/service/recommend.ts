import { request } from '@/utils/request'
import { Banners } from '@/types/recommend'

/**
 * 获取轮播图
 */
export function getBanner() {
  return request<Banners>('/banner')
}
