import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'

import Container from '@/katakago/_components/layout/container'
import Link from 'next/link'
import { Icon } from '@/katakago/_components/elements/icon'
import Photo from '@/katakago/_components/elements/photo'
import Skills from '@/katakago/_components/elements/skills'

import styles from '@/katakago/_styles/works.module.css'

import site from '@/katakago/_assets/site.png'
import work01Mock from '@/katakago/_assets/work01-mock.png'
import work02Mock from '@/katakago/_assets/work02-mock.png'
import work01Tec from '@/katakago/_assets/work01-tech-with-next.png'
import work02Tec from '@/katakago/_assets/work02-tech-with-next.png'
import work01Figma from '@/katakago/_assets/work01-figma.jpg'
import work02Figma from '@/katakago/_assets/work02-figma.jpg'

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
                    <div className={styles.subTitle}>Productions</div>
                  </div>
                </div>
                <div className={styles.secMain}>
                  <h2 id="this-site" className={styles.title}>
                    <span>Based on The Client Work</span>
                    制作事例
                  </h2>

                  <p>
                    コンセプト設計からデザイン、実装、コンポーネント化、ガイドライン制作（トークン、CSS設計、アクセシビリティ、SEO）など、サイト構築にかかわるすべての工程を手掛けた事例です。
                    構築に必要な情報は Figma にまとめています。
                  </p>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 id="work01" className={styles.workHeading}>
                    <span>01</span>
                    ショッピング系サイト
                  </h3>

                  <Link
                    href="/work01"
                    className={styles.workLink}
                    target="_blank"
                  >
                    https://portfolio.kata-kago.com/work01{' '}
                    <Icon icon="arrowUpRight" />
                  </Link>

                  <div className={styles.workDesc}>
                    <div className={styles.textStack}>
                      <p>
                        CSS
                        Modulesを使用してコンポーネントベースでスタイルを管理し、決済サービスの
                        Stripe
                        を利用してショッピングカートの機能を実装しています。
                      </p>
                      <figure>
                        <Photo
                          src={work01Tec}
                          alt="採用技術: Next.js、CSS Modules、Stripe、Framer Motion"
                          width="240"
                          height="32"
                        />
                      </figure>
                    </div>
                    <figure className={styles.workMock}>
                      <Photo
                        src={work01Mock}
                        alt="ノートパソコンとスマートフォンで表示したもの"
                        sizes="(min-width: 1024px) 640px,(min-width: 800px) 30vw,(min-width: 560px) 65vw, 75vw"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceSm}>
                <div className={styles.secMain}>
                  <figure className={styles.workFigma}>
                    <span className={styles.figmaLogo}>
                      <Icon icon="figmaColor" />
                    </span>
                    <Link
                      href="https://www.figma.com/file/9dvVlWUkRtMNbLZohxCEry/01---%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E7%B3%BB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E4%BB%95%E6%A7%98?type=design&node-id=642%3A1032&t=7VPzwSOrWmYfDDVI-1"
                      target="_blank"
                      className={styles.figmaLink}
                    >
                      {/* Figmaのiframe埋め込みでは重かったため、画像に変更 */}
                      <Photo
                        src={work01Figma}
                        alt="制作事例01のFigma編集画面"
                        sizes="(max-width: 560px) 600px, (min-width: 900px) 1600px, 100vw"
                      />
                      <div className={styles.overlay}>Open in Figma</div>
                    </Link>
                    <figcaption>
                      <Link
                        href="https://www.figma.com/file/9dvVlWUkRtMNbLZohxCEry/01---%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E7%B3%BB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E4%BB%95%E6%A7%98?type=design&node-id=642%3A1032&t=7VPzwSOrWmYfDDVI-1"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        Figmaで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 id="work02" className={styles.workHeading}>
                    <span>02</span>
                    ブランド系サイト
                  </h3>

                  <Link
                    href="/work02"
                    className={styles.workLink}
                    target="_blank"
                  >
                    https://portfolio.kata-kago.com/work02{' '}
                    <Icon icon="arrowUpRight" />
                  </Link>

                  <div className={styles.workDesc}>
                    <div className={styles.textStack}>
                      <p>
                        Tailwind
                        CSSとそのデザインシステムを活用し、白と黒を基調にデザインしたブランド系サイトを実装しています。
                      </p>
                      <figure>
                        <Photo
                          src={work02Tec}
                          alt="採用技術: Tailwind CSS、Framer Motion"
                          width="240"
                          height="23.2"
                        />
                      </figure>
                    </div>
                    <figure className={styles.workMock}>
                      <Photo
                        src={work02Mock}
                        alt="ノートパソコンとスマートフォンで表示したもの"
                        sizes="(min-width: 1024px) 640px,(min-width: 800px) 30vw,(min-width: 560px) 65vw, 75vw"
                      />
                    </figure>
                  </div>
                </div>
              </div>

              <div className={styles.secSpaceSm}>
                <div className={styles.secMain}>
                  <figure className={styles.workFigma}>
                    <span className={styles.figmaLogo}>
                      <Icon icon="figmaColor" />
                    </span>
                    <Link
                      href="https://www.figma.com/file/nj8dP3swDlCo7VdfEXrafk/02---%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E7%B3%BB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E4%BB%95%E6%A7%98?type=design&node-id=48%3A949&t=OvxZuEjC5yLFd0h6-1"
                      target="_blank"
                      className={styles.figmaLink}
                    >
                      {/* Figmaのiframe埋め込みでは重かったため、画像に変更 */}
                      <Photo
                        src={work02Figma}
                        alt="制作事例02のFigma編集画面"
                      />
                      <div className={styles.overlay}>Open in Figma</div>
                    </Link>

                    <figcaption>
                      <Link
                        href="https://www.figma.com/file/nj8dP3swDlCo7VdfEXrafk/02---%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E7%B3%BB%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E4%BB%95%E6%A7%98?type=design&node-id=48%3A949&t=OvxZuEjC5yLFd0h6-1"
                        target="_blank"
                        className={styles.outerlink}
                      >
                        Figmaで開く
                        <Icon icon="arrowUpRight" />
                      </Link>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className={styles.sec}>
              <div className={styles.secSub}>
                <div>
                  <div className={styles.subTitle}>Site Structure</div>
                </div>
              </div>
              <div className={styles.secMain}>
                <h2 id="this-site" className={styles.title}>
                  <span>Portfolio Kata-Kago</span>
                  このサイトの構成
                </h2>

                <p>
                  このサイトでは技術スタックの異なる２つの事例を実装し、動作しているものを見ていただけるようにしています。技術を使い分けるため、@layer
                  を活用するなどの工夫をしていますので、詳しくは GitHub
                  のリポジトリや PDF を参考にしてください。
                </p>

                <ul className={styles.outerlinks}>
                  <li>
                    <Link
                      href="https://github.com/mayuge3/portfolio"
                      target="_blank"
                      className={styles.outerlink}
                    >
                      GitHub
                      <Icon icon="arrowUpRight" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.outerlink}
                    >
                      PDF
                      <Icon icon="arrowUpRight" />
                    </Link>
                  </li>
                </ul>

                <figure className={styles.photoSite}>
                  <Photo
                    src={site}
                    alt="Next.jsで構築した１つのサイト内で制作事例を共存させ、個別に管理しています。"
                    sizes="(min-width: 900px) 1600px, 100vw"
                    priority
                  />
                </figure>
              </div>
            </section>

            <section>
              <div className={styles.secSpaceMd}>
                <div className={styles.secMain}>
                  <h3 className={styles.simpleH3}>図版や資料の作成</h3>
                  <p>
                    サイトを構築・運用していく上で必要となる、図版や資料の作成も行います。
                  </p>
                  <div className={styles.spacer}></div>
                  <Link href="/creations">
                    <div className={styles.button}>
                      図版や資料の作成を見る
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
  pageTitle: '制作事例とサイト構成',
  pageDesc: '制作事例とサイト構成を掲載',
  pagePath: '/works',
}

export const metadata: Metadata = OverwriteMetadata(pageMeta)
