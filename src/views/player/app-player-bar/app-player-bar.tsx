import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayerInfo, PlayerBarWrapper } from '@/views/player/app-player-bar/style'
import { Link } from 'react-router-dom'
import { message, Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'
import { formatTime, getImageSize } from '@/utils/format'
import { getSongPlayUrl } from '@/utils/handle-player'
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from '@/store/modules/player'
import AppPlayPanel from '@/views/player/app-play-panel/app-play-panel'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  /** 组件内部定义的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [showPanel, setShowPanel] = useState(false)

  /** 从redux中获取数据 */
  const { currentSong, lyrics, lyricIndex, playSongList, playMode } = useAppSelector(
    (state) => state.player,
    shallowEqualApp
  )
  const dispatch = useAppDispatch()

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
        console.log('歌曲播放成功')
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败:', err)
      })

    // 2.获取音乐总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 音乐播放的进度处理 */
  function handleTimeUpdate() {
    // 1.获取当前播放时间
    const currentTime = audioRef.current!.currentTime * 1000
    // 2.计算当前歌曲进度
    // 不在拖拽进度条
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    // 3.根据当前时间匹配对应歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 4.匹配对应歌词的index
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    // 展示对应歌词
    if (!showPanel) {
      message.open({
        content: lyrics[index].text,
        key: 'lyric',
        duration: 0
      })
    }
  }

  function handleTimeEnded() {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      handleChangeMusic(true)
    }
  }

  /** 组件内部的事件处理 */
  // 切换歌曲
  function handleChangeMusic(isNext = true) {
    dispatch(changeMusicAction(isNext))
  }

  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying ? audioRef.current?.pause() : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  // 拖动滑块
  function handleSliderChanging(value: number) {
    // 0.目前是处于拖拽状态
    setIsSliding(true)
    // 1.设置progress
    setProgress(value)
    // 2.获取value对应位置的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  // 点击滑块
  function handleSliderChanged(value: number) {
    // 1.获取点击位置的时间
    const currentTime = (value / 100) * duration
    // 2.设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime)
    setProgress(value)
    setIsSliding(false)
  }

  // 切换播放模式
  function handleChangePlayMode() {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }

  function handleShowPanel() {
    const isShow = !showPanel
    setShowPanel(isShow)
    if (isShow) message.destroy('lyric')
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev" onClick={() => handleChangeMusic(false)}></button>
          <button className="btn sprite_playbar play" onClick={handlePlayBtnClick}></button>
          <button className="btn sprite_playbar next" onClick={() => handleChangeMusic()}></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/song?id=2025533834">
            <img
              className="image"
              src={getImageSize(
                currentSong?.al?.picUrl || 'https://s4.music.126.net/style/web2/img/default/default_album.jpg',
                50
              )}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name || ''}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name || ''}</span>
            </div>
            <div className="progress">
              {/* Slider组件 */}
              <Slider
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChanging}
                onAfterChange={handleSliderChanged}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime || 0)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration || 0)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <a
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
              title={playMode === 0 ? '循环' : playMode === 1 ? '随机' : '单曲循环'}
            ></a>
            <button className="btn sprite_playbar playlist" onClick={handleShowPanel}>
              {playSongList.length}
            </button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleTimeEnded} />
      {showPanel && <AppPlayPanel />}
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
