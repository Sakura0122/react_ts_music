import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from '@/views/discover/c-views/recommend/components/new-album/style'
import AreaHeaderV1 from '@/components/area-header-v1/area-header-v1'
import { Carousel } from 'antd'
import { shallowEqualApp, useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item/new-album-item'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const newAlbums = useAppSelector((state) => state.recommend.newAlbums, shallowEqualApp)

  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, item * 5 + 5).map((album) => {
                      return <NewAlbumItem key={album.id} itemData={album} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
