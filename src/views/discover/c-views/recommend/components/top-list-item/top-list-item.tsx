import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopListItemWrapper } from '@/views/discover/c-views/recommend/components/top-list-item/style'
import { getImageSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopListItem: FC<IProps> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData
  const dispatch = useAppDispatch()

  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <TopListItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button className="btn sprite_02 play" onClick={(event) => handlePlayClick(item.id)}></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href={`#/discover/toplist?id=${itemData.id}`}>查看全部 &gt;</a>
      </div>
    </TopListItemWrapper>
  )
}

export default memo(TopListItem)
