import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import footerTitles from '@/assets/data/footer_titles.json'
import { FooterWrapper } from '@/components/app-footer/styles'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <div className="enter">
          {footerTitles.map((item) => {
            return (
              <div className="item" key={item.titles}>
                <a
                  className="logo sprite_footer"
                  style={{ backgroundPosition: item.position }}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <span className="title">{item.titles}</span>
              </div>
            )
          })}
        </div>
        <div className="copy">
          <p>
            <a href="//st.music.163.com/official-terms/service" rel="noreferrer" target="_blank" className="label">
              服务条款
            </a>
            <span className="line">|</span>
            <a href="//st.music.163.com/official-terms/privacy" rel="noreferrer" target="_blank" className="label">
              隐私政策
            </a>
            <span className="line">|</span>
            <a href="//st.music.163.com/official-terms/children" rel="noreferrer" target="_blank" className="label">
              儿童隐私政策
            </a>
            <span className="line">|</span>
            <a href="//music.163.com/st/staticdeal/complaints.html" rel="noreferrer" target="_blank" className="label">
              版权投诉
            </a>
            <span className="line">|</span>
            <a href="http://ir.music.163.com" target="_blank" rel="noreferrer" className="label">
              投资者关系
            </a>
            <span className="line">|</span>
            <a href="https://music.163.com/ui/resource" rel="noopener noreferrer" target="_blank" className="label">
              广告合作
            </a>
            <span className="line">|</span>
            <a
              href="//mp.music.163.com/600948c936c13f4d09752e73/contact-us-web/index.html?source=Music-Main-Station"
              rel="noreferrer"
              target="_blank"
              className="label"
            >
              联系我们
            </a>
          </p>
          <p>
            <a href="https://jubao.163.com" rel="noreferrer" target="_blank" className="label sep">
              廉正举报
            </a>
            <span className="label sep">不良信息举报邮箱: 51jubao@service.netease.com</span>
            <span className="label">客服热线：95163298</span>
          </p>
          <p>
            <span className="label">互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className="label">增值电信业务经营许可证：浙B2-20150198</span>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              rel="noopener noreferrer"
              target="_blank"
              className="label"
            >
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
          </p>
          <p>
            <span className="label sep">网易公司版权所有©1997-2023</span>
            <span className="label">杭州乐读科技有限公司运营：</span>
            <a
              href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24498695788/9de7/9e78/fc8d/35d33543c69c9f4c5ac8aeb937217597.png"
              rel="noreferrer"
              target="_blank"
              className="label"
            >
              浙网文[2021] 1186-054号
            </a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
              rel="noreferrer"
              target="_blank"
              className="label link"
            >
              <span className="police-logo"></span>
              <span className="label">浙公网安备 33010902002564号</span>
            </a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
