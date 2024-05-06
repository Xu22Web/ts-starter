import { describe, expect, it } from 'vitest'
import value from '../dist/index.mjs'

// demo
describe('demo', () => {
  it('should return true', () => {
    expect(value.a).toBe(1)
  })
})
