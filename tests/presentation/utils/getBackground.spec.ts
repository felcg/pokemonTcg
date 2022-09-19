import { getBackground } from "@presentation/utils"
import { PokeCardMockOneType, PokeCardMockTwoTypes } from "../../mocks/mock-pokecard"

describe('Get background', () => {
  test('Should get correct background with one type', async () => {
    const backgroundColor = getBackground(PokeCardMockOneType)
    expect(backgroundColor).toBe('#ea6251')
  })

  test('Should get correct background with two types', async () => {
    const backgroundColor = getBackground(PokeCardMockTwoTypes)
    expect(backgroundColor).toBe('linear-gradient(to bottom, #ea6251 50%, #f0f0f0 0%)')
  })
})
