import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { request } from '@/utils/request'
import type { Banner, Banners } from '@/types/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [banners, setBanners] = useState<Banner[]>([])
  useEffect(() => {
    request<Banners>('/banner').then((res) => {
      setBanners(res.data.banners)
    })
  }, [])
  return (
    <div>
      {banners.map((item) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
