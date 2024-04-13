import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'

import Container from '@/katakago/_components/layout/container'
import Link from 'next/link'
import { Icon } from '@/katakago/_components/elements/icon'
import Photo from '@/katakago/_components/elements/photo'
import Skills from '@/katakago/_components/elements/skills'

import styles from '@/katakago/_styles/works.module.css'
import design from '@/katakago/_styles/design.module.css'

import site from '@/katakago/_assets/site.png'
import work01Mock from '@/katakago/_assets/work01-mock.png'
import work02Mock from '@/katakago/_assets/work02-mock.png'
import work01Tec from '@/katakago/_assets/work01-tech-with-next.png'
import work02Tec from '@/katakago/_assets/work02-tech-with-next.png'
import work01Figma from '@/katakago/_assets/work01-figma.jpg'
import work02Figma from '@/katakago/_assets/work02-figma.jpg'

// design画像
import design01Mock from '@/katakago/_assets/design/design01-mock.png'
import design01 from '@/katakago/_assets/design/design01-corp.jpg'

import design02Mock from '@/katakago/_assets/design/design02-mock.png'
import design02 from '@/katakago/_assets/design/design02-brand.jpg'

import design03Mock from '@/katakago/_assets/design/design03-mock.png'
import design03 from '@/katakago/_assets/design/design03-corp.jpg'

import design04Mock from '@/katakago/_assets/design/design04-mock.png'
import design04Light from '@/katakago/_assets/design/design04-brand-light.jpg'
import design04Dark from '@/katakago/_assets/design/design04-brand-dark.jpg'

import design05Mock from '@/katakago/_assets/design/design05-mock.png'
import design05 from '@/katakago/_assets/design/design05-japanese.jpg'

export default function Works() {
  return (
    <>
      <article className={styles.doc}>
        <Container wide>
          <div className={styles.fixedMark}></div>
          <div className={styles.entry}>
            <section>
              <div className={styles.sec}>
                <div className={styles.secSub}>
                  <div className={styles.secSubInner}>
                    <div className={styles.subTitle}>Design Works</div>
                  </div>
                </div>
                <div className={styles.secMain}>
                  <h2 id="this-site" className={styles.title}>
                    <span>Based on The Client Work</span>
                    Webデザイン制作事例
                  </h2>

                  <p>
                    タイプの異なるWebデザインの制作事例を掲載しています。リンク先はAdobe
                    XDのプレゼンテーションページとなっています（インタラクションなどは設定しておりません）。
                  </p>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <div className={design.twocols}>
                    <div className={design.twocolsMain}>
                      <figure>
                        <Photo
                          src={design01Mock}
                          alt="モックアップ"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>

                      <h3 id="work01" className={styles.workHeading}>
                        <span>01</span>
                        コーポレートサイト
                      </h3>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <p>
                        質実剛健さ、信頼性の高さ、攻めの姿勢、柔軟性を伝えたいというリクエストに基づいてデザインしたものです。
                        コーポレートカラーが黒に近い濃紺であったため、全体が重たくなりすぎないようにアクセントカラー（水色）を用意しました。
                        「攻めの姿勢」や「柔軟性」は斜めのカットや要素の重なりで勢いや変化をつけることで表現しています。
                      </p>
                    </div>
                    <div className={design.twocolsSide}>
                      <figure className={design.page}>
                        <Photo
                          src={design01}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <div className={design.twocols}>
                    <div className={design.twocolsMain}>
                      <figure>
                        <Photo
                          src={design02Mock}
                          alt="モックアップ"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>

                      <h3 id="work01" className={styles.workHeading}>
                        <span>02</span>
                        ブランド系サイト
                      </h3>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/screen/d2c31dba-9a8b-4a55-a700-693ad7cf1977?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <p>
                        蜂蜜をテーマにしたサイトのデザインです。カラーは蜂蜜の色を揃え、写真と合わせてバランスを調整しています。
                        写真を大きいものと小さいものを組み合わせ、上から下に流れるようにコンテンツを閲覧できるようにデザインしています。
                      </p>
                    </div>
                    <div className={design.twocolsSide}>
                      <figure className={design.page}>
                        <Photo
                          src={design02}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <div className={design.twocols}>
                    <div className={design.twocolsMain}>
                      <figure>
                        <Photo
                          src={design03Mock}
                          alt="モックアップ"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>

                      <h3 id="work01" className={styles.workHeading}>
                        <span>03</span>
                        コーポレートサイト
                      </h3>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/screen/18da21e3-d74c-4d08-8f63-76ba46dcad1c/?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <p>
                        セキュリティ系のコーポレートサイトです。写真は使用せず、技術系のイラストやアイコンを使ってスッキリとしたデザインに仕上げています。
                      </p>
                    </div>
                    <div className={design.twocolsSide}>
                      <figure className={design.page}>
                        <Photo
                          src={design03}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <div className={design.twocols}>
                    <div className={design.twocolsMain}>
                      <figure>
                        <Photo
                          src={design04Mock}
                          alt="モックアップ"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>

                      <h3 id="work01" className={styles.workHeading}>
                        <span>04</span>
                        ブランド系サイト
                      </h3>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/screen/0e8a8592-25b2-4af7-8e8c-b1eee9b16fca?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く(Light)
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/screen/1fb77b87-eae2-44e0-9b83-87d2f6176dd9/?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く(Dark)
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <p>
                        コスメアイテムを扱うブランド系サイトです。画面の高さいっぱいを占める大きい画像を使用し、イメージ中心で見せるデザインにしています。
                        また、グローバルなターゲットを念頭に、ダークモードに対応するデザインにしています。
                      </p>
                    </div>
                    <div className={design.twocolsSide}>
                      <figure className={design.page}>
                        <Photo
                          src={design04Light}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                      <figure className={design.page}>
                        <Photo
                          src={design04Dark}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <div className={design.twocols}>
                    <div className={design.twocolsMain}>
                      <figure>
                        <Photo
                          src={design05Mock}
                          alt="モックアップ"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>

                      <h3 id="work01" className={styles.workHeading}>
                        <span>05</span>
                        和風系サイト
                      </h3>
                      <Link
                        href="https://xd.adobe.com/view/c278eb2e-180e-4880-9a61-c831493adecb-972b/screen/61c4df97-ebbe-444d-82d8-c092429e2eb0?fullscreen"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        XDで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                      <p>
                        和菓子工房のサイトのデザインです。和菓子がカラフルなこともあり、全体は落ち着いた紫でまとめ、写真が映えるようにしています。
                        さらに、縦書きを組み合わせて和風のデザインに仕上げています。
                      </p>
                    </div>
                    <div className={design.twocolsSide}>
                      <figure className={design.page}>
                        <Photo
                          src={design05}
                          alt="ページ全体のデザイン"
                          sizes="(min-width: 900px) 1600px, 100vw"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>Webの制作事例</h3>
                  <p>Webのデザインに加えて、実装・コーディングも行います。</p>
                  <div className={styles.spacer}></div>
                  <Link href="/works">
                    <div className={styles.button}>
                      Webの制作事例を見る
                      <Icon icon="arrowRight" />
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            <section className={styles.sec}>
              <div className={styles.secSub}>
                <div>
                  <div className={styles.subTitle}>Profile</div>
                </div>
              </div>
              <div className={styles.secMain}>
                <h2 id="this-site" className={styles.title}>
                  <span>Creator Profile</span>
                  制作者プロフィール
                </h2>

                <p>
                  常に新しい技術を取り入れながら、フリーランスとして
                  Web構築・コーディング・デザインに携わっています。特にCSSを得意としており、メンテナンス性の高いCSS管理、原因がわからないレイアウト崩れへの緊急対応、レスポンシブ実装などに精通しています。
                </p>

                <div className={styles.experience}>
                  <p>【主な業務経験】</p>
                  <ul>
                    <li>
                      コーポレートサイト、ECサイト、LPなどのコーディング＆デザイン
                    </li>
                    <li>
                      コード（HTML/CSS）の最適化、コンポーネント作成、デザインシステム構築
                    </li>
                    <li>Figma、XDを使ったデザイン制作</li>
                    <li>
                      派生物（設計書やドキュメント、販促バナー、SNS用画像、記事サムネイル、フライヤーなど）の作成
                    </li>
                  </ul>
                  <p>【フレームワーク関連の業務経験】</p>
                  <ul>
                    <li>Next.js、Astro などを使ったWeb構築</li>
                    <li>
                      エンジニアの方をサポートするコーディング＆デザイン（HTML/CSS）
                    </li>
                  </ul>
                  <p>【WordPress関連の業務経験】</p>
                  <ul>
                    <li>WordPressを使ったWebサイト・LP・テーマ制作</li>
                    <li>
                      コンテンツ編集者のUX改善（ブロックエディターの最適化）
                    </li>
                    <li>ブロックテーマ制作</li>
                  </ul>
                </div>

                <h3 className={styles.skillHeading}>
                  <Icon icon="plus" />
                  <span>Skills</span>
                  スキルセット
                </h3>

                <Skills />

                <div className={styles.additional}>
                  <h3>Kata-Kago</h3>
                  <p>堅香子（カタカゴ）はカタクリの花の古語です。</p>
                  <h3>Design Assets</h3>
                  <p>
                    本サイトの制作には自作のアセットに加え、下記サイトの素材を加工・編集して使用しています。
                  </p>
                  <ul>
                    <li>
                      制作事例内の野菜や照明の写真 from{' '}
                      <Link href="https://unsplash.com/" target="_blank">
                        Unsplash
                      </Link>
                    </li>
                    <li>
                      資料内のスクリーンや冊子のモックアップ from Freepik{' '}
                      <Link
                        href="https://www.freepik.com/free-vector/open-modern-laptop-with-blank-screen-isolated-white_13830684.htm#query=computer%20mock%20note&position=12&from_view=search&track=robertav1_2_sidr"
                        target="_blank"
                      >
                        <sup>[1]</sup>
                      </Link>{' '}
                      <Link
                        href="https://www.freepik.com/free-vector/realistic-front-view-smartphone-mockup-mobile-iphone-purple-frame-with-blank-white-display-vector_33632332.htm#&position=0&from_view=author"
                        target="_blank"
                      >
                        <sup>[2]</sup>
                      </Link>{' '}
                      <Link
                        href="https://www.freepik.com/free-psd/magazine-catalogue-mockup_6627857.htm#page=2&position=48&from_view=author"
                        target="_blank"
                      >
                        <sup>[3]</sup>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </article>
    </>
  )
}

// Metadata
const pageMeta: OverwriteMetadataProps = {
  pageTitle: 'Webデザイン制作事例',
  pageDesc: 'Webデザインの制作事例を掲載',
  pagePath: '/works/design',
}

export const metadata: Metadata = OverwriteMetadata(pageMeta)
