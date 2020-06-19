# react-stray-ui

> A react framework ui components.

[![NPM](https://img.shields.io/npm/v/react-stray-ui.svg)](https://www.npmjs.com/package/react-stray-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-stray-ui
```

## Usage

```jsx

import { Grid, Item, Heading, Paragraph } from 'react-stray-ui'

<Grid
      areas={['hello']}
      rows='1fr 1fr 1fr'
      columns='repeat(3, minmax(100px, 1fr))'
      space='24px'
    >
      <Item first>
        <div
          style={{ width: '700px', height: '100px', border: '1px solid red' }}
        >
          <Heading tag='h1' motion duration='400' reset>
            Título
          </Heading>
          <Paragraph size='24px' weight='bold' smSize='12px' align='left'>
            Isso é um texto!
          </Paragraph>
        </div>
      </Item>
      <Item first>
```

## License

MIT © [MatthausZillig](https://github.com/MatthausZillig)
