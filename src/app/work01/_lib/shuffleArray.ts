// 関連商品の並びをシャッフル
import type { ProductProps } from "./getAllProducts"

export const shuffle = (arr: ProductProps[]) => {
  const array = [...arr]
  for (let i = array.length; 1 < i; i--) {
    const k = Math.floor(Math.random() * i)
    const t = array[k]
    array[k] = array[i - 1]
    array[i - 1] = t
  }
  return array
}
