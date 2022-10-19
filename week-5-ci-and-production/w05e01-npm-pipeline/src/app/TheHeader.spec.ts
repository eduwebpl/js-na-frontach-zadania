import { render } from '@testing-library/vue'
import { expect } from 'vitest'
import TheHeader from './TheHeader'

describe('TheHeader', () => {
  it('should have title "Shopping-Lister" ', () => {
    const { getByText } = render(TheHeader)

    const element = getByText('Shopping-Lister')

    expect(element).toBeDefined()
  })

  it('should have subTitle "Just make a list. I will track it down." ', () => {
    const { getByText } = render(TheHeader)

    const element = getByText('Just make a list. I will track it down.zz')

    expect(element).toBeDefined()
  })
})
