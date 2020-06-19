import React from 'react'
import { Grid, Item } from './stray-components/grid/grid'
import { Paragraph } from './stray-components/text/text'
import { Heading } from './stray-components/text/heading'

export const ExampleComponent = ({ text }) => {
  return (
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
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
      <Item first>
        <div
          style={{ width: '100px', height: '100px', border: '1px solid red' }}
        >
          1
        </div>
      </Item>
    </Grid>
  )
}
