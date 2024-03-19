/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/app/work02/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // コンテナの配置と左右パディング
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '20px',
      },
    },
    extend: {
      // Josefin Sans を使うための設定
      fontFamily: {
        josefin: ['var(--font-josefin)'],
        body: ['sans-serif'],
      },
      // プライマリーカラー
      colors: {
        primary: colors.yellow[600],
        primaryDark: colors.yellow[700],
      },
    },
  },
  plugins: [
    // @tailwindcss/typography プラグインを有効化
    require('@tailwindcss/typography'),

    // ▼ 親または自身が特定クラスを持つときにスタイルを適用するための modifier
    plugin(function ({ addVariant }) {
      // メニューを開いているとき（open）
      addVariant('open', ['.open &', '.open&'])
      // メニューを閉じているとき（close）
      addVariant('close', ['.close &', '.close&'])
      // トップページの場合（topPage）
      addVariant('topPage', ['.topPage &', '.topPage&'])
      // ダークセクションの場合（darkSection）
      addVariant('darkSection', ['.darkSection &', '.darkSection&'])
      // セクション内の配置が逆の場合（reverse）
      addVariant('reverse', ['.reverse &', '.reverse&'])
    }),
  ],
}
