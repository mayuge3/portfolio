// サイトの基本メタデータ
type SiteMetaItem = {
  siteTitle: string
  siteDesc: string
  siteUrl: string
  siteLang: string
  siteLocale: string
  siteType:
    | 'website'
    | 'article'
    | 'book'
    | 'profile'
    | 'music.song'
    | 'music.album'
    | 'music.playlist'
    | 'music.radio_station'
    | 'video.movie'
    | 'video.episode'
    | 'video.tv_show'
    | 'video.other'
    | undefined
}

export const siteMeta: SiteMetaItem = {
  siteTitle: 'Kata-Kago',
  siteDesc: 'デザインから実装・コーディングまで',
  siteUrl: 'https://portfolio.kata-kago.com',
  siteLang: 'ja',
  siteLocale: 'ja_JP',
  siteType: 'website',
}
