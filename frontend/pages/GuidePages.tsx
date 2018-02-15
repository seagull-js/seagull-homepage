import * as React from 'react'
import { Page } from '@seagull/core'
import { PageHeader } from 'react-bootstrap'
import PageWrapper from '../components/PageWrapper'
import CodeSnippet from '../components/CodeSnippet'
import Block from '../components/Block'
import InfoMedia from '../components/InfoMedia'

const codePageHelloWorld = `import * as React from 'react'
import { Page } from '@seagull/core'

export default class HelloWorld extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/hello-world'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}
`

const codePageDataFetching = `import * as React from 'react'
import { Page } from '@seagull/core'

export interface IState {
  text: string
}

export default class HelloWorld extends Page<{}, IState> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/hello-world'

  /**
   * initial state value
   */
  state = { text: '' }

  /**
   * load data from the backend
   */
  async componentDidMount() {
    const response = await fetch('/hello?name=world')
    const text = await response.text()
    this.setState({ text })
  }

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <div>
        <h1>Text: {this.state.text}</h1>
      </div>
    )
  }
}
`

export default class GuidePages extends Page<{}, {}> {
  /**
   * the url path this page will be mounted on
   */
  path: string = '/guides/pages'

  /**
   * outputs the HTML of this Page
   */
  render() {
    return (
      <PageWrapper>
        <Block wide="">
          <h1>Creating Web Pages</h1>

          <InfoMedia
            title="Concise Frontend Architecture"
            image="/assets/seagull-icon.png"
          >
            Seagull provides you with simple building blocks for websites as
            single page apps (SPAs): <strong>Page classes</strong>. They are
            supercharged React components with built-in routing, html header
            manipulation, async data loading and full server-side rendering.
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
            Scaffolding Pages <small>with the CLI</small>
          </PageHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
          <code>seagull add page HelloWorld --path /hello-world</code>
          <CodeSnippet code={codePageHelloWorld} />
        </Block>

        <Block wide="">
          <PageHeader>
            Fetching Data <small>and setting state</small>
          </PageHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
          <CodeSnippet code={codePageDataFetching} />
        </Block>

        <Block wide="">
          <PageHeader>
            Setting Head Tags <small>with Helmet</small>
          </PageHeader>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            quibusdam officiis ratione impedit nihil tenetur recusandae voluptas
            voluptatum, odit possimus dicta, vel nobis soluta fugiat non atque
            dignissimos aperiam.
          </p>
          <CodeSnippet code={'todo'} />
        </Block>
      </PageWrapper>
    )
  }
}
