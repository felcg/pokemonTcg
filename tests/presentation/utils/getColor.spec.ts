import { getColor } from "@presentation/utils"
import { PokeCardMockOneType, PokeCardMockTwoTypes, PokeCardMockNoType } from "../../mocks/mock-pokecard"

describe('Get background', () => {
  test('Should get correct color with card lighter color types', async () => {
    const color = getColor(PokeCardMockTwoTypes.types)
    expect(color).toBe('black')
  })

  test('Should get correct color with darker color types', async () => {
    const color = getColor(PokeCardMockOneType.types)
    expect(color).toBe('white')
  })

  test('Should return black if no type is found', async () => {
    const color = getColor(PokeCardMockNoType.types)
    expect(color).toBe('black')
  })

})
