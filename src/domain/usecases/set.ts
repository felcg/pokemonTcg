import { QueryParameters } from "@domain/models"
import { Set } from "@domain/models"

export interface ISet {
  getSet: (id: string, select?: string) => Promise<Set>
  getSets: ({ params }: { params: QueryParameters }) => Promise<Set[]>
}