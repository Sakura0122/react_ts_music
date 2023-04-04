import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const PlayHeader: FC<IProps> = () => {
  const { playSongList, currentSong } = useAppSelector((state) => state.player, shallowEqualApp)
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playSongList.length})</h3>
        <div className="operator">
          <button className="collect">
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button className="remove-all">
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </HeaderWrapper>
  )
}

export default memo(PlayHeader)
