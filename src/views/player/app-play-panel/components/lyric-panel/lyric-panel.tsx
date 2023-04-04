import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import classNames from 'classnames'
import { scrollTo } from '@/utils/ui-helper'

interface IProps {
  children?: ReactNode
}

const LyricPanel: FC<IProps> = () => {
  const { lyrics, lyricIndex } = useAppSelector((state) => state.player, shallowEqualApp)

  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    scrollTo(panelRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])

  return (
    <PanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyrics.map((item, index) => {
          return (
            <div key={index} className={classNames('lrc-item', { active: index === lyricIndex })}>
              {item.text}
            </div>
          )
        })}
      </div>
    </PanelWrapper>
  )
}

export default memo(LyricPanel)
