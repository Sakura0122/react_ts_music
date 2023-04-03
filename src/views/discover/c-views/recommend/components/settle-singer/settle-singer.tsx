import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from '@/views/discover/c-views/recommend/components/settle-singer/style'
import AreaHeaderV2 from '@/components/area-header-v2/area-header-v2'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const settleSingers = useAppSelector((state) => state.recommend.settleSingers, shallowEqualApp)
  return (
    <SingerWrapper>
      <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="#/discover/artist/signed" />
      <div className="artists">
        {settleSingers.map((item) => {
          return (
            <a href={`#/artist?id=${item.id}`} className="item" key={item.id}>
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <span className="info">
                <div className="name">{item.name}</div>
                <div className="alias">{item.alias.join(' ')}</div>
              </span>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/st/musician" rel="noreferrer" target="_blank">
          申请成为网易音乐人
        </a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
