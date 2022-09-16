import { PokeCard, QueryParameters } from "@domain/models"


export interface IPokeCard {
  getCard: (id: string, select?: string) => Promise<PokeCard>
  getCards: ({ params }: { params: QueryParameters }) => Promise<PokeCard[]>
}