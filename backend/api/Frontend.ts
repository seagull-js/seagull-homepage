// library imports
import { API, Request, Response, Routing, Document } from '@seagull/core'
import { renderToString } from 'react-dom/server'

// Server Side Rendering for the frontend
export default class Frontend extends API {
  static method = 'GET'
  static path = '/*'
  async handle(request: Request): Promise<Response> {
    const appRouter = new Routing(true, request)
    const page = appRouter.initialMatchedPage()
    if (page && typeof page.componentDidMount === 'function') {
      await page.componentDidMount()
    }
    const content = renderToString(appRouter.load())
    const html = renderToString(Document({ content }))
    return this.html(html)
  }
}
