import React, { Fragment } from 'react'
import { Grid, Item } from './stray-components/grid/grid'
import { Paragraph } from './stray-components/text/text'
import { Heading } from './stray-components/text/heading'
import { Navbar } from './stray-components/navbar/navbar'

export const ExampleComponent = ({ text }) => {
  return (
    <Fragment>
      <Navbar height='80px' />
      <Grid
        columns='1fr 1fr 1fr 50px'
        rows='1fr 1fr 1fr 1fr'
        areas={[
          'one one one plus',
          'two two tree plus',
          'four six six plus',
          'seven seven seven eight'
        ]}
        space='24px'
        justifyContent='center'
        alignContent='center'
      >
        <Item area='one' justifySelf='center' test>
          <Heading tag='h1' motion duration='400' reset>
            Título
          </Heading>
          <Paragraph size='24px' weight='bold' smSize='12px' align='left'>
            Isso é um texto!
          </Paragraph>
        </Item>
        <Item area='two' justifySelf='center' test />
        <Item area='tree' justifySelf='center' test />
        <Item area='four' justifySelf='center' test />
        <Item area='six' justifySelf='center' test />
        <Item area='seven' justifySelf='center' test />
        <Item area='eight' justifySelf='center' test />
        <Item area='plus' justifySelf='center' test />
      </Grid>
    </Fragment>
  )
}
