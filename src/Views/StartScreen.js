import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import MoralityButtonGroup from '../MoralityButtonGroup'
import PropTypes from 'prop-types'

const StartScreen = props => {
  return (
    <Container textAlign="center" className="full-height">
      <Grid
        inverted
        columns={1}
        divided
        verticalAlign="middle"
        className="full-height"
      >
        <Grid.Row>
          <Grid.Column>
            <MoralityButtonGroup
              startScreenMethods={props.startScreenMethods}
              className={props.className}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

StartScreen.propTypes = {
  startScreenMethods: PropTypes.object,
  className: PropTypes.string
}

export default StartScreen
