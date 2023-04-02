import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopListWrapper } from '@/views/discover/c-views/recommend/components/top-list/style'
import AreaHeaderV1 from '@/components/area-header-v1/area-header-v1'
import TopListItem from '@/views/discover/c-views/recommend/components/top-list-item/top-list-item'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopList: FC<IProps> = () => {
  const rankings = useAppSelector((state) => state.recommend.rankings, shallowEqualApp)
  return (
    <TopListWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/toplist" />
      <div className="content">
        {rankings.map((item) => {
          return <TopListItem key={item.id} itemData={item} />
        })}
      </div>
    </TopListWrapper>
  )
}

export default memo(TopList)
