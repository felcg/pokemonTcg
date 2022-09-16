import { HttpClient, HttpStatusCode } from '@infra/protocols/http'
import { IPokeCard } from '@domain/usecases'
import { PokeCard, QueryParameters } from '@domain/models'

export class PokeCardService implements IPokeCard {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) { }

  async getCard(id: string, select?: string | undefined): Promise<PokeCard> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'get',
      params: {
        select: select
      }
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new Error()
      default: throw new Error()
    }
  }

  async getCards({ params }: { params: QueryParameters }): Promise<PokeCard[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body.data
      case HttpStatusCode.forbidden: throw new Error()
      default: throw new Error()
    }
  }
}






