import { Page } from '@seagull/core'
import * as React from 'react'
import { Jumbotron, PageHeader, Tab, Tabs } from 'react-bootstrap'
import PageWrapper from '../components/PageWrapper'
import Block from '../components/Block'
import CodeSnippet from '../components/CodeSnippet'

const codeInstallOSX = `
# If you haven't already, install the node version manager:
$ brew install nvm

# reload current shell with tweaked environment for nvm
$ echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile
$ source ~/.profile

# latest LTS version which AWS Lambda supports
$ nvm install 6.10.3

# always use this node.js version as default in new shells
$ nvm alias default 6.10.3`

// the (stateful) component for the page with type checking
export default class QuickstartPage extends Page<{}, {}> {
  path = '/quickstart'

  render() {
    return (
      <PageWrapper>
        <Block wide="">
          <Jumbotron>
            <h1>Quickstart</h1>
            <p>From Zero to Cloud</p>
          </Jumbotron>
        </Block>

        <Block wide="">
          <PageHeader>
            Setup your Environment <small>in just a few minutes</small>
          </PageHeader>
          <p>Installing node.js on your computer...</p>
          <Tabs defaultActiveKey={1} id="quickstart-setup">
            <Tab eventKey={1} title="Mac OS">
              <CodeSnippet language="bash" code={codeInstallOSX} />
            </Tab>
            <Tab eventKey={2} title="Windows">
              ToDo
            </Tab>
            <Tab eventKey={3} title="Linux" disabled>
              ToDo
            </Tab>
          </Tabs>
          <p>
            Once you have node.js installed successfully (check with{' '}
            <code>$ node -v</code>), installing seagull is easy:
          </p>
          <CodeSnippet language="bash" code={`$ npm install -g @seagull/cli`} />
        </Block>

        <Block wide="">
          <PageHeader>
            Bootstrap an App <small>with the CLI</small>
          </PageHeader>
        </Block>
      </PageWrapper>
    )
  }
}
