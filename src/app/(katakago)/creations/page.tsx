import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'

import Container from '@/katakago/_components/layout/container'
import Link from 'next/link'
import { Icon } from '@/katakago/_components/elements/icon'
import Photo from '@/katakago/_components/elements/photo'
import Skills from '@/katakago/_components/elements/skills'

import styles from '@/katakago/_styles/works.module.css'

// Creations画像
import assetEdit from '@/katakago/_assets/asset-edit-with-text.png'
import assetThumbnail from '@/katakago/_assets/asset-thumbnail.png'
import assetLogo from '@/katakago/_assets/asset-logo.png'
import assetAshirai from '@/katakago/_assets/asset-ashirai.png'
import assetDoc from '@/katakago/_assets/asset-doc.png'

export default function Creations() {
  return (
    <>
      <article>
        <Container wide>
          <div className={styles.fixedMark}></div>
          <div className={styles.entry}>
            <section>
              <div className={styles.sec}>
                <div className={styles.secSub}>
                  <div className={styles.secSubInner}>
                    <div className={styles.subTitle}>Asset Creation</div>
                  </div>
                </div>
                <div className={styles.secMain}>
                  <h2 id="this-site" className={styles.title}>
                    <span>Asset Creation</span>
                    図版や資料の作成
                  </h2>

                  <p>
                    サイトを構築・運用していく上で必要となる、図版や資料の作成も行っています。素材やデータを元に加工・編集・レイアウトして仕上げるのを得意としており、必要に応じて、Photoshop、Illustrator、InDesign、Figma、XDでの対応が可能です。
                  </p>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <Photo
                    src={assetEdit}
                    alt="Photoshop と Illustrator の編集画面"
                    sizes="(max-width: 560px) 600px, (min-width: 900px) 1600px, 100vw"
                  />
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>サムネイル画像</h3>
                  <p>
                    ページのOGPや記事のサムネイル画像、カードと組み合わせて使用する画像などを作成します。
                  </p>
                  <figure className={styles.photoSite}>
                    <Photo
                      src={assetThumbnail}
                      alt="Next.jsで構築した１つのサイト内で制作事例を共存させ、個別に管理しています。"
                      sizes="(min-width: 900px) 1600px, 100vw"
                    />
                  </figure>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>ロゴ／アイコン</h3>
                  <p>
                    コンセプトなどに基づき、ロゴやアイコンを作成します。左の図は本サイトのロゴで、
                    カタクリの花の古語である堅香子（Kata-Katgo）をもとに、サイトやSNSで映える色合いとスタイルにしたものです。
                    右の図は制作事例のロゴで、メインプロダクトからモチーフを抽出したデザインにしています。
                  </p>
                  <figure className={styles.photoSite}>
                    <Photo
                      src={assetLogo}
                      alt="Next.jsで構築した１つのサイト内で制作事例を共存させ、個別に管理しています。"
                      sizes="(min-width: 900px) 1600px, 100vw"
                    />
                  </figure>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>あしらい</h3>
                  <p>
                    サイトのイメージに合わせてあしらい（装飾）を作成します。制作事例ではページに散りばめる形で使用しています。
                  </p>
                  <figure className={styles.photoSite}>
                    <Photo
                      src={assetAshirai}
                      alt="Next.jsで構築した１つのサイト内で制作事例を共存させ、個別に管理しています。"
                      sizes="(min-width: 900px) 1600px, 100vw"
                    />
                  </figure>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>資料</h3>
                  <p>
                    PDF、スライド、印刷物など、情報を整理して資料や設計書としてまとめます。
                  </p>

                  <ul className={styles.outerlinks}>
                    <li>
                      <Link
                        href="/portfolio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.outerlink}
                      >
                        資料PDF
                        <Icon icon="arrowUpRight" />
                      </Link>
                    </li>
                  </ul>
                  <figure className={styles.photoSite}>
                    <Photo
                      src={assetDoc}
                      alt="Next.jsで構築した１つのサイト内で制作事例を共存させ、個別に管理しています。"
                      sizes="(min-width: 900px) 1600px, 100vw"
                    />
                  </figure>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>Webの制作事例</h3>
                  <p>Webのデザインと実装・コーディングも行います。</p>
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
  pageTitle: '図版や資料の作成',
  pageDesc: '図版や資料の作成事例を掲載',
  pagePath: '/creations',
}

export const metadata: Metadata = OverwriteMetadata(pageMeta)
