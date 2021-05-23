import Head from 'next/head'
import ContentWidthWrapper from '../components/generic/ContentWidthWrapper'
import { asStyles } from '../helpers/styleHelpers'
import textStyles from '../styles/generic/textStyles'

export default function IndexPage(): JSX.Element {
  return (
    <ContentWidthWrapper>
      <Head>
        <title>Next.js starter</title>
      </Head>
      <h1 css={styles.title}>Next.js starter</h1>
      <p>This Next.js starter is set up with the following. </p>
      <ul>
        <li>Typescript</li>
        <li>React</li>
        <li>Next.js </li>
        <li>Emotion.js </li>
        <li>.env </li>
        <li>Prettier </li>
        <li>ESlint </li>
        <li>Jest </li>
        <li>
          <code>recoil</code>: State management
        </li>
        <li>
          <code>swr</code>: Stateful fetch wrapper
        </li>
        <li>Basic PWA config</li>
      </ul>
      <details>
        <summary>Optional extras</summary>

        <ul>
          <li>
            <code>react-icons</code>: Icon library
          </li>
          <li>
            <code>react-makrdown</code>: Markdown renderer
          </li>
          <li>
            <code>openapi-typescript</code>
          </li>
          <li>
            <code>typescript-json-schema</code>: Generate validation from types
          </li>
          <li>
            <code>ajv</code>: Validator
          </li>
        </ul>
      </details>

      <section>
        <h2>Getting started</h2>

        <p>Run tests with the following.</p>

        <Codeblock codeLines={['npm run test']} />

        <p>You can watch for type issues.</p>

        <Codeblock codeLines={['npm run tsw']} />

        <p>You can check for lint issues</p>

        <Codeblock codeLines={['npm run lint']} />
      </section>
    </ContentWidthWrapper>
  )
}

type Props = {
  codeLines: string[]
}

function Codeblock({ codeLines }: Props): JSX.Element {
  return (
    <div css={styles.codeblock}>
      <pre>
        {codeLines.map((line, index) => {
          const key = index
          return <code key={key}>{line}</code>
        })}
      </pre>
    </div>
  )
}

const styles = asStyles({
  title: {
    position: 'relative',

    ':before': {
      position: 'absolute',
      display: 'block',
      content: '">_"',

      transform: 'translateX(-50px)',

      ...textStyles.fontFamilyMonospace,
      color: '#ad2460',
      opacity: 0.6,
    },
  },
  codeblock: {
    paddingLeft: '20px',
    paddingRight: '20px',
    border: '1px solid #666',
    borderRadius: 4,
    backgroundColor: '#333',
  },
})
