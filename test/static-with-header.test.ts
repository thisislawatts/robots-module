import { setupTest, get } from '@nuxt/test-utils'

describe('static', () => {
  setupTest({
    server: true,
    fixture: 'fixture/static-with-header'
  })

  test('render', async () => {
    const { body } = await get('/robots.txt')
    expect(body).toBe('# Comment\n#comment with space\nDisallow: /foo\nUser-agent: *\nDisallow: ')
  })
})
