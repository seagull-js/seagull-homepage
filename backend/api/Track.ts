import { API, Request, Response } from '@seagull/core'

export default class Track extends API {
  /**
   * The URL path where this API will be located. Skip for private functions like cronjobs. Example: '/greetings/{name}'
   */
  static path: string = '/track'
  /**
   * This is the HTTP method / verb for the API. Defaults to 'GET'
   */
  static method: string = 'POST'

  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    const { name } = request.body
    // tslint:disable-next-line
    console.log(name, JSON.stringify(request.body))
    return this.text('ok')
  }
}
