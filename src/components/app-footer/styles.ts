import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;

  .enter {
    display: flex;
    margin-top: 33px;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .logo {
        display: inline-block;
        width: 45px;
        height: 45px;
      }

      .title {
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .copy {
    margin-top: 60px;
    line-height: 24px;
    text-align: center;

    .label {
      color: #666;
    }

    .line {
      margin: 0 8px;
      color: #d9d9d9;
    }

    .sep {
      margin-right: 14px;
    }

    .link {
      margin-left: 5px;

      .police-logo {
        width: 14px;
        height: 14px;
        background: url(${require('@/assets/img/police.png')}) no-repeat;
        background-size: cover;
        display: inline-block;
        margin-right: 2px;
        vertical-align: -2px;
      }
    }
  }
`
