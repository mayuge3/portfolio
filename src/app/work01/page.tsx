import Hero from '@/app/work01/_components/elements/hero'
import Card from '@/app/work01/_components/elements/card'
import Button from '@/app/work01/_components/elements/button'

import { getAllProducts } from '@/app/work01/_lib/getAllProducts'

import styles from '@/work01/_styles/style.module.css'

import yasai01 from '@/work01/_assets/yasai01.svg'
import yasai02 from '@/work01/_assets/yasai02.svg'
import yasai03 from '@/work01/_assets/yasai03.svg'
import yasai04 from '@/work01/_assets/yasai04.svg'
import plate01 from '@/work01/_assets/plate01.jpg'
import plate02 from '@/work01/_assets/plate02.jpg'
import plate03 from '@/work01/_assets/plate03.jpg'

export default async function Work01Home() {
  const products = await getAllProducts()

  return (
    <>
      <Hero />

      <section className={styles.sectionClover}>
        <div id="vegetable" className={styles.sectionLinktarget}></div>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>フレッシュ野菜でおいしく、楽しく、健康に</h2>
            <p>
              新鮮でみずみずしい野菜は彩り豊かで美味しいもの！
              鮮度抜群なフレッシュ野菜で、健康的な生活を楽しんでください。
            </p>
            <div className={styles.gridResponsiveColumns_2_to_4}>
              <Card
                title="朝採り・新鮮"
                src={yasai01}
                href="#"
                center
                scroll={false}
              />
              <Card
                title="天然の旨みと風味"
                src={yasai02}
                href="#"
                center
                scroll={false}
              />
              <Card
                title="みずみずしい甘さ"
                src={yasai03}
                href="#"
                center
                scroll={false}
              />
              <Card
                title="栄養価もばつぐん"
                src={yasai04}
                href="#"
                center
                scroll={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionBox}>
        <div id="experience" className={styles.sectionLinktarget}></div>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>身近なところで体験しよう</h2>
            <p>
              忙しい毎日でも、野菜はおいしく手軽に楽しめます。便利なサブスクや、人気のギフトもご利用ください。
            </p>
            <div className={styles.gridResponsiveColumns_2_to_3}>
              <Card
                title="オンライン講座"
                src={plate01}
                href="#"
                scroll={false}
                sizes="(min-width:768px) 640px, 100vw"
              />
              <Card
                title="サブスク"
                src={plate02}
                href="#"
                scroll={false}
                sizes="(min-width:768px) 640px, 50vw"
              />
              <Card
                title="ギフト"
                src={plate03}
                href="#"
                scroll={false}
                sizes="(min-width:768px) 640px, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionFrame}>
        <div id="shop" className={styles.sectionLinktarget}></div>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>おいしい野菜をお届け</h2>
            <p>
              オンラインショップにはたくさんの野菜が並んでいます。こちらは、そんな中でも人気の野菜たち。１つからでもお届けします。
            </p>
            <div className={styles.gridResponsiveColumns_2}>
              {products !== undefined &&
                products.length > 0 &&
                products.slice(0, 4).map((item) => {
                  const {
                    name,
                    prices,
                    images,
                    metadata: { slug },
                  } = item
                  const price = prices[0].unit_amount
                  const img = images[0]
                  return (
                    <Card
                      key={slug}
                      title={name}
                      text={`￥${price}`}
                      src={img}
                      href={`/work01/${slug}`}
                      aspectRatio="443/260"
                      sizes="(min-width:768px) 1088px, 100vw"
                    />
                  )
                })}
            </div>
            <Button text="もっと見る" href="#" scroll={false} />
          </div>
        </div>
      </section>
    </>
  )
}
