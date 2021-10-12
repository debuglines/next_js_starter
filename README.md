# Next.js starter

This Next.js starter is set up with the following.

- Typescript
- React
- Next.js
- Emotion.js
- .env
- Prettier
- ESlint
- Jest
- `recoil`: State management
- `swr`: Stateful fetch wrapper
- Basic PWA config

<details>
<summary>Optional extras</summary>

- `react-icons`: Icon library
- `react-makrdown`: Markdown renderer
- `openapi-typescript`
- `typescript-json-schema`: Generate validation from types
- `ajv`: Validator
</details>

## Getting started

Download and initiate the starter.

```shell
npx create-next-app -e https://github.com/debuglines/next_js_starter [project-name]
# or
yarn create next-app -e https://github.com/debuglines/next_js_starter [project-name]
```

Run the project like a standard Next.js project.
The development url is [http://localhost:3000](localhost:3000) by default.

```shell
# Development
npm run dev

# Production
npm run build
npm run start
```

Run tests with the following.

```shell
npm run test
```

You can watch for type issues.

```shell
npm run tsw
```

You can check for lint issues

```shell
npm run lint
```
