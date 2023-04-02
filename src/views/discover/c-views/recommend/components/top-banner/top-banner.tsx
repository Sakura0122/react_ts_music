import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import { Carousel } from 'antd'
import {
  BannerControl,
  BannerLeft,
  BannerRight,
  BannerWrapper
} from '@/views/discover/c-views/recommend/components/top-banner/style'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const banners = useAppSelector((state) => state.recommend.banners, shallowEqualApp)

  function handlePrevClick() {
    bannerRef.current?.prev()
  }

  function handleNextClick() {
    bannerRef.current?.next()
  }

  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  // 切换到指定轮播图
  function handleSelect(index: number) {
    console.log(index)
    bannerRef.current?.goTo(index)
  }

  let bgImageUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgImageUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper style={{ background: `url('${bgImageUrl}') center center/6000px` }}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay ref={bannerRef} effect="fade" dots={false} afterChange={handleAfterChange}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => handleSelect(index)}>
                  <span className={classNames('item', { active: index === currentIndex })}></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <a href="https://music.163.com/#/download" rel="noreferrer" target="_blank"></a>
          <span className="int">PC 安卓 iPhone WP iPad Mac 六大客户端</span>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
