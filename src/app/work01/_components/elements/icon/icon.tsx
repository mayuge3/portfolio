import {
  BoxesPackingSolidIcon,
  CartShoppingSolidIcon,
  TemperatureLowSolidIcon,
  UtensilsSolidIcon,
  VegIcon,
  WaveIcon,
} from "./icons"

export type IconProps = {
  icon:
    | "boxesPackingSolid"
    | "cartShoppingSolid"
    | "temperatureLowSolid"
    | "utensilsSolid"
    | "veg"
    | "wave"
}

type IconNames = Exclude<IconProps["icon"], undefined>

type IconMap = {
  [key in IconNames]: React.FC
}

const iconMap: IconMap = {
  boxesPackingSolid: BoxesPackingSolidIcon,
  cartShoppingSolid: CartShoppingSolidIcon,
  temperatureLowSolid: TemperatureLowSolidIcon,
  utensilsSolid: UtensilsSolidIcon,
  veg: VegIcon,
  wave: WaveIcon,
}

export default function Icon({ icon }: IconProps) {
  const IconComponent = iconMap[icon]
  return <IconComponent />
}
