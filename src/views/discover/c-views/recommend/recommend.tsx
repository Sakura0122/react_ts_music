import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/store/modules/recommend'
import TopBanner from '@/views/discover/c-views/recommend/components/top-banner/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
