import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelWrapper } from '@/views/player/app-play-panel/style'
import PlayHeader from './components/play-header/play-header'
import Playlist from './components/play-list/play-list'
import LyricPanel from './components/lyric-panel/lyric-panel'

interface IProps {
  children?: ReactNode
}

const AppPlayPanel: FC<IProps> = () => {
  return (
    <PanelWrapper>
      <PlayHeader />
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
        <Playlist />
        <LyricPanel />
      </div>
    </PanelWrapper>
  )
}

export default memo(AppPlayPanel)
