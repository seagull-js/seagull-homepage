import * as React from 'react'
import { Page } from '@seagull-js/seagull'
import InfoMedia from '../components/InfoMedia'
import { Media, PageHeader } from 'react-bootstrap'
import PageWrapper from '../components/PageWrapper'
import CodeSnippet from '../components/CodeSnippet'
import Block from '../components/Block'

const codeHelloWorld = `
import { API, Request, Response } from '@seagull-js/seagull'

export default class HelloWorld extends API {
  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    return this.text('hello world')
  }
}
`

const codeHelloWorldMounted = `
import { API, Request, Response } from '@seagull-js/seagull'

export default class HelloWorld extends API {
  /**
   * The URL path where this API will be located. Skip for private functions like cronjobs. Example: '/greetings/{name}'
   */
  static path: string = '/hello'
  /**
   * This is the HTTP method / verb for the API. Defaults to 'GET'
   */
  static method: string = 'GET'

  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    return this.text('hello world')
  }
}
`

const codeHelloWorldParams = `
import { API, Request, Response } from '@seagull-js/seagull'

export default class HelloWorld extends API {
  /**
   * The URL path where this API will be located. Skip for private functions like cronjobs. Example: '/greetings/{name}'
   */
  static path: string = '/hello'
  /**
   * This is the HTTP method / verb for the API. Defaults to 'GET'
   */
  static method: string = 'GET'

  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    const { name } = request.params
    return this.text(\`hello, \${name}\`)
  }
}

`

const codeGreeterService = `
import { API, Request, Response } from '@seagull-js/seagull'

export default class HelloService extends API {
  /**
   * The URL path where this API will be located. Skip for private functions like cronjobs. Example: '/greetings/{name}'
   */
  static path: string = '/greet'
  /**
   * This is the HTTP method / verb for the API. Defaults to 'GET'
   */
  static method: string = 'POST'

  /**
   * This handle function executes your code. Return one of the following method invocations: 'text', 'json', 'redirect', 'missing', 'error'
   */
  async handle(request: Request): Promise<Response> {
    const { firstName, lastName } = request.body
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
    const FirstName = capitalize(firstName)
    const LastName = capitalize(lastName)
    const Message =\`Greetings, \${FirstName} \${LastName}\`
    return this.json({ FirstName, LastName, Message })
  }
}
`

export default class GuideApis extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/guides/apis'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Block wide="">
          <h1>Building APIs</h1>

          <InfoMedia
            title="Futuristic Backend Technology"
            image="/assets/seagull-icon.png"
          >
            Seagull provides you with a truly simple building block for building
            backend systems: <strong>API Classes</strong>. They are really easy
            to use and will transform into massively scalable nano-services,
            running as <a href="https://aws.amazon.com/lambda/">AWS Lambda</a>{' '}
            functions. This allows you to skip configuring server instances,
            monitoring load or calculating fixed monthly costs.
          </InfoMedia>

          <p>
            This Guide will ... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iusto quasi quibusdam officiis ratione impedit
            nihil tenetur recusandae voluptas voluptatum, odit possimus dicta,
            vel nobis soluta fugiat non atque dignissimos aperiam.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Scaffolding API Classes <small>with the CLI</small>
          </PageHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.{' '}
          </p>
          <code>seagull add api HelloWorld</code>

          <CodeSnippet code={codeHelloWorld} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Mounting API Classes <small>to URL endpoints</small>
          </PageHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>

          <code>seagull add api HelloWorld --path /hello</code>

          <CodeSnippet code={codeHelloWorldMounted} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Access Parameters <small>from Requests</small>
          </PageHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>

          <CodeSnippet code={codeHelloWorldParams} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Format Responses <small>and return them</small>
          </PageHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>

          <code>seagull add api HelloService --path /greet --method POST</code>

          <CodeSnippet code={codeGreeterService} />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
        </Block>

        <Block wide="">
          <PageHeader>
            Schedule Tasks <small>like cronjobs</small>
          </PageHeader>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
        </Block>
      </PageWrapper>
    )
  }
}
