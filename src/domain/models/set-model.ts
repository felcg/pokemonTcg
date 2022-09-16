import { Legality } from "./legality-model"

type Image = {
  symbol: string
  logo: string
}
export type Set = {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legality
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: Image
}