import { PokeCardService } from '@application/usecases'
import { HttpClientSpy } from '../mocks/mock-http'
import { faker } from '@faker-js/faker'
import { HttpStatusCode } from '@infra/protocols/http'


type SutTypes = {
  sut: PokeCardService
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new PokeCardService(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('Search Card', () => {
  test('Should query for card with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.getCard("testid")
    expect(httpClientSpy.url).toBe(url + '/testid')
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should query for cards with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.getCards({ params: {} })
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw Error if HttpClient returns 403 when getting a card', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }

    const promise = sut.getCard("testid")

    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw Error if HttpClient returns 403 when getting list of cards', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }

    const promise = sut.getCards({ params: {} })

    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw Error if invalid statusCode is returned from HttpClient when getting a card', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: 0
    }
    const promise = sut.getCard("testid")

    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw Error if invalid statusCode is returned from HttpClient when getting a list of cards', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: 0
    }
    const promise = sut.getCards({ params: {} })

    await expect(promise).rejects.toThrow(new Error())
  })
})