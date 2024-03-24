import React from 'react'
import type Stripe from 'stripe'

import type { Metadata } from 'next'
import type { OverwriteMetadataProps } from '@/lib/overwrite-metadata'
import { OverwriteMetadata } from '@/lib/overwrite-metadata'

import ItemPhoto from '@/app/work01/_components/elements/itemPhoto'
import Card from '@/app/work01/_components/elements/card'
import { Icon } from '@/app/work01/_components/elements/icon'
import AddToCart from '@/app/work01/_components/cart/addToCart'

import { getAllProducts } from '@/app/work01/_lib/getAllProducts'
import { shuffle } from '@/app/work01/_lib/shuffleArray'

import styles from '@/work01/_styles/style.module.css'

type Work01ItemProps = {
  params: { slug: string }
}

export default async function Work01Item({ params }: Work01ItemProps) {
  const products = await getAllProducts()

  if (products === undefined) {
    return <div>データがありません</div>
  }

  const product = products?.find((item) => item.metadata.slug === params.slug)
  //   const product = params.slug
  if (product === undefined) {
    return <div>データがありません</div>
  }

  const { name, prices, description, metadata, images } = product
  const { handlingPack, handlingStock, handlingTips, slug } = metadata
  const { id: priceid, unit_amount: price, currency } = prices[0]
  const img = images[0]

  const suggestedProducts = shuffle(
    products.filter((item) => item.metadata.slug !== slug)
  )

  return (
    <>
      <article className={styles.item}>
        <div className={styles.containerMobileFull}>
          <ItemPhoto key={`photo${slug}`} img={img} />
        </div>
        <div className={styles.itemBody}>
          <div className={styles.container}>
            <div className={styles.gridItemCols}>
              <div className={styles.itemText}>
                <h1>{name}</h1>
                <p>{description}</p>

                <ul className={styles.handling}>
                  <li>
                    <Icon icon="utensilsSolid" />
                    <h2>おいしい食べ方</h2>
                    <p>{handlingTips}</p>
                  </li>
                  <li>
                    <Icon icon="temperatureLowSolid" />
                    <h2>保管方法</h2>
                    <p>{handlingStock}</p>
                  </li>
                  <li>
                    <Icon icon="boxesPackingSolid" />
                    <h2>パッケージ</h2>
                    <p>{handlingPack}</p>
                  </li>
                </ul>
              </div>
              <AddToCart
                img={img}
                item={name}
                id={priceid}
                price={price}
                currency={currency}
              />
            </div>
          </div>
        </div>
      </article>

      <section className={styles.sectionFrame}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <h2>こちらもおすすめ</h2>

            <div className={styles.gridResponsiveColumns_2}>
              {suggestedProducts.slice(0, 2).map((item) => {
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
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const products = await getAllProducts()

  if (products === undefined) {
    throw new Error('商品データがありません')
  }

  return products.map((item) => {
    // console.log(item)
    return {
      slug: item.metadata.slug,
    }
  })
}

// Dynamic Metadata
export async function generateMetadata({
  params,
}: Work01ItemProps): Promise<Metadata> {
  const products = await getAllProducts()
  if (products === undefined) {
    return {}
  }

  const product = products?.find((item) => item.metadata.slug === params.slug)
  if (product === undefined) {
    return {}
  }

  const { name, description, images } = product
  const pageMeta: OverwriteMetadataProps = {
    pageTitle: `VEG - ${name}`,
    pageDesc: `${name}の商品ページ`,
    pagePath: `/work01/${params.slug}`,
    pageImg: images[0],
  }

  return OverwriteMetadata(pageMeta)
}
