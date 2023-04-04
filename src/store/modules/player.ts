import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '@/service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { RootState } from '@/store'

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: 0 | 1 | 2
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  // 当前歌词
  lyricIndex: -1,
  playSongList: [
    {
      name: '亲爱的旅人啊',
      id: 1371939273,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 1030001,
          name: '周深',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 0,
      v: 17,
      crbt: null,
      cf: '',
      al: {
        id: 79779961,
        name: '亲爱的旅人啊《千与千寻》（Cover 木村弓）',
        picUrl: 'https://p1.music.126.net/1YrCPOBV314i-mTtlDg8mQ==/109951164148664637.jpg',
        tns: [],
        pic_str: '109951164148664637',
        pic: 109951164148664640
      },
      dt: 244821,
      h: {
        br: 320000,
        fid: 0,
        size: 9794925,
        vd: 20654,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5876973,
        vd: 23294,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3917997,
        vd: 25089,
        sr: 48000
      },
      sq: {
        br: 2304000,
        fid: 0,
        size: 47406211,
        vd: 20668,
        sr: 48000
      },
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 0,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 605740,
        name: 'いつも何度でも(主题歌)',
        artists: [
          {
            id: 16874,
            name: '木村弓'
          }
        ],
        albumMeta: {
          id: 57463,
          name: 'いつも何度でも'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 17,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0
    },
    {
      name: '我们的歌',
      id: 2025533834,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 29588305,
          name: '刘大拿',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 9,
      crbt: null,
      cf: '',
      al: {
        id: 160760191,
        name: '我们的歌',
        picUrl: 'https://p1.music.126.net/Gm2v1KrDe2TwplzxcmTxYg==/109951168428025131.jpg',
        tns: [],
        pic_str: '109951168428025131',
        pic: 109951168428025140
      },
      dt: 188918,
      h: {
        br: 320000,
        fid: 0,
        size: 7559085,
        vd: -31729,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4535469,
        vd: -29112,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3023661,
        vd: -27390,
        sr: 48000
      },
      sq: {
        br: 829875,
        fid: 0,
        size: 19597394,
        vd: -31775,
        sr: 48000
      },
      hr: {
        br: 1598866,
        fid: 0,
        size: 37757012,
        vd: -31729,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 25642952,
        name: '我们的歌',
        artists: [
          {
            id: 5346,
            name: '王力宏'
          }
        ],
        albumMeta: {
          id: 2263157,
          name: '改变自己'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 9,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 1677427200000
    }
  ],
  playSongIndex: -1,
  // 0顺序播放 1循环播放 2随机播放
  playMode: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  {
    state: RootState
  }
>('currentSong', (id, { dispatch, getState }) => {
  // 准备播放某一首歌曲时, 分成两种情况
  // 1.从列表尝试是否可以获取到这首歌
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)

  if (findIndex === -1) {
    getSongDetail(id).then((res) => {
      if (!res.data.songs.length) return
      const song = res.data.songs[0]
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongListAction(newPlaySongList))
      dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))
      dispatch(changeLyricIndexAction(-1))
    })
  } else {
    const song = playSongList[findIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changePlaySongIndexAction(findIndex))
    dispatch(changeLyricIndexAction(-1))
  }

  getSongLyric(id).then((res) => {
    const lyricString = res.data.lrc.lyric
    // 解析歌词
    const lyrics = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
  })
})

export const changeMusicAction = createAsyncThunk<
  void,
  boolean,
  {
    state: RootState
  }
>('changeMusic', (isNext, { dispatch, getState }) => {
  const player = getState().player
  const playMode = player.playMode
  const songIndex = player.playSongIndex
  const songList = player.playSongList

  // 根据不同模式计算下一首歌曲的索引
  let newIndex = songIndex
  if (playMode === 1) {
    // 随机播放
    newIndex = Math.floor(Math.random() * songList.length)
  } else {
    // 单曲循环和顺序播放
    newIndex = isNext ? songIndex + 1 : songIndex - 1
    if (newIndex > songList.length - 1) newIndex = 0
    if (newIndex < 0) newIndex = songList.length - 1
  }

  // 获取当前歌曲
  const song = songList[newIndex]
  dispatch(changeCurrentSongAction(song))
  dispatch(changePlaySongIndexAction(newIndex))
  dispatch(changeLyricIndexAction(-1))

  // 请求新的歌词
  getSongLyric(song.id).then((res) => {
    const lyricString = res.data.lrc.lyric
    // 解析歌词
    const lyrics = parseLyric(lyricString)
    dispatch(changeLyricsAction(lyrics))
  })
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions
export default playerSlice.reducer
