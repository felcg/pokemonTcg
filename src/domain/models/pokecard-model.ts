import { Legality } from "./legality-model"
import { Set } from "./set-model"

type AncientTrait = {
  name: string
  text: string
}

type Abillity = {
  name: string
  text: string
  type: string
}

export type Attack = {
  cost: string[]
  name: string
  text: string
  damage: string
  convertedEnergyCost: number
}

type WeaknessOrResistances = {
  type: string
  value: string
}

type Image = {
  small: string
  large: string
}

type Price = {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}

type CardMarketPrice = {
  averageSellPrice?: number
  lowPrice?: number
  trendPrice?: number
  germanProLow?: number
  suggestedPrice?: number
  reverseHoloSell?: number
  reverseHoloLow?: number
  reverseHoloTrend?: number
  lowPriceExPlus?: number
  avg1?: number
  avg7?: number
  avg30?: number
  reverseHoloAvg1?: number
  reverseHoloAvg7?: number
  reverseHoloAvg30?: number
}

type TcgPlayer = {
  url: string
  updatedAt: string
  prices?: Price
}

type CardMarket = {
  url: string
  updatedAt: string
  prices: CardMarketPrice
}

export type PokeCard = {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  level?: string
  hp?: string
  types?: string[]
  evolvesFrom?: string
  evolvesTo?: string[]
  rules?: string[]
  AncientTrait?: AncientTrait
  abilities?: Abillity[]
  attacks?: Attack[]
  weaknesses?: WeaknessOrResistances[]
  resistances?: WeaknessOrResistances[]
  retreatCost?: string[]
  convertedRetreatCost?: number
  set: Set
  number: string
  artist: string
  rarity: string
  flavorText?: string
  nationalPokedexNumbers?: number[]
  legalities: Legality
  regulationMark?: string
  images: Image
  tcgplayer: TcgPlayer
  cardmarket: CardMarket
}