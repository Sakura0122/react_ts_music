import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  padding: 0 20px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lrc-content {
    .lrc-item {
      line-height: 32px;
      //height: auto !important;
      min-height: 32px;
      text-align: center;
      color: #989898;
      //transition: color 0.7s linear;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`
