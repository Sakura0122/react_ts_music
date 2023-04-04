import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayListWrapper } from '@/views/player/app-play-panel/components/play-list/style'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import classNames from 'classnames'
import { formatTime } from '@/utils/format'
import { changePlaySongListAction, fetchCurrentSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  const { playSongList, playSongIndex } = useAppSelector((state) => state.player, shallowEqualApp)
  const dispatch = useAppDispatch()

  function handleDelSong(event: React.MouseEvent<HTMLElement, MouseEvent>, id: number) {
    const index = playSongList.findIndex((item) => item.id === id)
    const newSongList = [...playSongList]
    newSongList.splice(index, 1)
    dispatch(changePlaySongListAction(newSongList))
    event.stopPropagation()
  }

  function handlePlaySong(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <PlayListWrapper>
      {playSongList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames('play-item', { active: playSongIndex === index })}
            onClick={(event) => handlePlaySong(item.id)}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <i className="sprite_playlist del" onClick={(event) => handleDelSong(event, item.id)}></i>
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatTime(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
}

export default memo(PlayList)
