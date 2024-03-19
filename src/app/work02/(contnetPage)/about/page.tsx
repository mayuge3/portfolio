import { StaticImageData } from 'next/image'

import Entry from '@/work02/_components/contentPage/entry'
import Photos, { PhotoItem } from '@/work02/_components/contentPage/photos'
import MoreLink from '@/work02/_components/elements/moreLink'

import eyecatch from '@/work02/_assets/kitchen.jpg'
import product01 from '@/work02/_assets/about01.jpg'
import product02 from '@/work02/_assets/about02.jpg'
import product03 from '@/work02/_assets/about03.jpg'
import product04 from '@/work02/_assets/about04.jpg'
import React from 'react'

const photos: PhotoItem[] = [
  { photo: product01, alt: '' },
  { photo: product02, alt: '' },
  { photo: product03, alt: '' },
  { photo: product04, alt: '' },
]

export default function Work02About() {
  return (
    <Entry title="照明のデザインから施工まで" eyecatch={eyecatch}>
      <p>
        Lightは照明器具の製造に特化し、地道な手作業で一つひとつ丁寧に仕上げるこだわりのブランドです。私たちが大切にしているのは、「モノづくりの楽しさ」、「人と人との繋がり」という二つの価値観です。
      </p>
      <p>
        私たちは、お客様の声に耳を傾け、お客様が求めるものを提供することを第一に考えています。そのために、デザインから施工まで、責任を持って対応できる体制となっています。お客様からのご依頼に応じて、デザインの調整やカスタマイズなどに柔軟に対応いたします。
      </p>

      <Photos photos={photos} />

      <p>
        照明には、様々な役割があります。暗い空間を明るく照らし出すことで視認性や安全性を高めたり、インテリアの一部として空間を演出することで、もっと快適で魅力的な空間づくりをサポートすることができます。
      </p>
      <p>
        弊社の照明製作は、お客様のご要望をお聞きしたうえで、デザイン・色・素材等、細部までこだわり抜いたオリジナルの提案を行います。また、その提案に対して、お客様からのご意見をお聞きし、製品を仕上げます。
      </p>
      <p>
        是非一度、弊社の照明製作についてお話しください。お客様のニーズに合ったオリジナルの照明を手掛けることで、空間の良さを引き出し、心地よいライフスタイルをサポートいたします。
      </p>

      <MoreLink href="/work02/products">手作りの照明について</MoreLink>
    </Entry>
  )
}
