import { expect, describe, it } from 'vitest'
import { sum } from './index'

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  });
})
