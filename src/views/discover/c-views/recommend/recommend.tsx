import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchRecommendDataAction, fetchTopListDataAction } from '@/store/modules/recommend'
import TopBanner from '@/views/discover/c-views/recommend/components/top-banner/top-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import HotRecommend from '@/views/discover/c-views/recommend/components/hot-recommend/hot-recommend'
import NewAlbum from '@/views/discover/c-views/recommend/components/new-album/new-album'
import TopList from '@/views/discover/c-views/recommend/components/top-list/top-list'
import UserLogin from '@/views/discover/c-views/recommend/components/user-login/user-login'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchRecommendDataAction())
    dispatch(fetchTopListDataAction())
  }, [])

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopList />
        </div>
        <div className="right">
          <UserLogin />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
