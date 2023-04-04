import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import { getSearchList } from '@/service/recommend'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/store/modules/player'

interface IProps {
  children?: ReactNode
}

const Search: FC<IProps> = () => {
  let timer: any = null
  const [songs, setSongs] = useState([])
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  window.addEventListener('click', () => {
    setOpen(false)
  })

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (!value) {
      setSongs([])
      setOpen(false)
      return
    }
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      search(value)
      timer = null
    }, 400)
  }

  function search(keywords: any) {
    getSearchList(keywords).then((res) => {
      const result = res.data.result.songs.slice(0, 10)
      setSongs(result)
      setOpen(true)
    })
  }

  function handlePlaySong(event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  return (
    <Popover
      open={open}
      content={songs.map((item: any) => {
        return (
          <div key={item.id} onClick={(event) => handlePlaySong(event, item.id)}>
            <a>
              {item.name}-{item.artists[0].name}
            </a>
          </div>
        )
      })}
    >
      <Input
        className="search"
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
        onFocus={(e) => handleChangeValue(e)}
        onChange={(e) => handleChangeValue(e)}
      />
    </Popover>
  )
}

export default memo(Search)
