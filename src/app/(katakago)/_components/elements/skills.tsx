import styles from './skills.module.css'
import Image from 'next/image'
import { Icon, IconProps } from './icon'

// PNG形式のロゴ
import cssModules from '@/katakago/_assets/skills/css-modules.png'
import emotion from '@/katakago/_assets/skills/emotion.png'
import styledComponents from '@/katakago/_assets/skills/styled-components.png'

// SVG形式のロゴは Icon で管理しているものを埋め込みで表示
type SkillItem = {
  iconSrc?: IconProps['icon']
  imgSrc?: typeof cssModules | typeof emotion | typeof styledComponents
  alt: string
  spanText: string
}

const skills: SkillItem[] = [
  { iconSrc: 'html', alt: 'HTML', spanText: 'HTML' },
  { iconSrc: 'css', alt: 'CSS', spanText: 'CSS' },
  { iconSrc: 'javascript', alt: 'JavaScript', spanText: 'JavaScript' },
  { iconSrc: 'react', alt: 'React', spanText: 'React' },
  { iconSrc: 'next', alt: 'Next.js', spanText: 'Next.js' },
  { iconSrc: 'gatsby', alt: 'Gatsby', spanText: 'Gatsby' },
  { iconSrc: 'astro', alt: 'Astro', spanText: 'Astro' },
  { iconSrc: 'docusaurus', alt: 'Docusaurus', spanText: 'Docusaurus' },
  { iconSrc: 'wordpress', alt: 'WordPress', spanText: 'WordPress' },
  { imgSrc: cssModules, alt: 'CSS Modules', spanText: 'CSS Modules' },
  { imgSrc: emotion, alt: 'Emotion', spanText: 'Emotion' },
  {
    imgSrc: styledComponents,
    alt: 'styled-components',
    spanText: 'styled-components',
  },
  { iconSrc: 'styledJsx', alt: 'styled-jsx', spanText: 'styled-jsx' },
  { iconSrc: 'tailwind', alt: 'Tailwind CSS', spanText: 'Tailwind CSS' },
  { iconSrc: 'figmaColor', alt: 'Figma', spanText: 'Figma' },
  { iconSrc: 'xd', alt: 'Adobe XD', spanText: 'Adobe XD' },
  { iconSrc: 'indesign', alt: 'InDesign', spanText: 'InDesign' },
  { iconSrc: 'photoshop', alt: 'Photoshop', spanText: 'Photoshop' },
  { iconSrc: 'illustrator', alt: 'Illustrator', spanText: 'Illustrator' },
]

export default function Skills() {
  return (
    <div className={styles.skills}>
      <ul>
        {skills.map((skill) => (
          <li key={skill.alt}>
            {skill.imgSrc ? (
              <Image src={skill.imgSrc} alt={skill.alt} />
            ) : (
              <Icon icon={skill.iconSrc} />
            )}

            <span>{skill.spanText}</span>
          </li>
        ))}
        <li style={{ gridArea: '1/5' }}></li>
      </ul>
    </div>
  )
}
