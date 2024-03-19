import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  PlusIcon,
  FigmaIcon,
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  ReactIcon,
  NextIcon,
  GatsbyIcon,
  AstroIcon,
  DocusaurusIcon,
  WordPressIcon,
  StyledJsxIcon,
  TailwindIcon,
  FigmaColorIcon,
  XdIcon,
  IndesignIcon,
  PhotoshopIcon,
  IllustratorIcon,
} from "./icons"

export type IconProps = {
  icon?:
    | "arrowLeft"
    | "arrowRight"
    | "arrowUpRight"
    | "plus"
    | "figma"
    | "html"
    | "css"
    | "javascript"
    | "react"
    | "next"
    | "gatsby"
    | "astro"
    | "docusaurus"
    | "wordpress"
    | "styledJsx"
    | "tailwind"
    | "figmaColor"
    | "xd"
    | "indesign"
    | "photoshop"
    | "illustrator"
}

type IconNames = Exclude<IconProps["icon"], undefined>

type IconMap = {
  [key in IconNames]: React.FC
}

const iconMap: IconMap = {
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  plus: PlusIcon,
  figma: FigmaIcon,
  html: HtmlIcon,
  css: CssIcon,
  javascript: JavascriptIcon,
  react: ReactIcon,
  next: NextIcon,
  gatsby: GatsbyIcon,
  astro: AstroIcon,
  docusaurus: DocusaurusIcon,
  wordpress: WordPressIcon,
  styledJsx: StyledJsxIcon,
  tailwind: TailwindIcon,
  figmaColor: FigmaColorIcon,
  xd: XdIcon,
  indesign: IndesignIcon,
  photoshop: PhotoshopIcon,
  illustrator: IllustratorIcon,
}

export default function Icon({ icon = "arrowUpRight" }: IconProps) {
  const IconComponent = iconMap[icon]
  return <IconComponent />
}
