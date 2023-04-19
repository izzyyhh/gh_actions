import supertest from 'supertest'
import server from '../../index'

describe('GET /', () => {
  it('should respond with "POWER!"', async () => {
    const res = await supertest(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('POWER!')
  })
})
