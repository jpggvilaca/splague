import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from '../components/Sidebar'

const Home = ({ player, ui }) => {
  return (
    <Box
      background={player.morality === 'good' ? 'white' : '#252839'}
      className={ui.transitionClasses}
      fill
    >
      <Sidebar />
    </Box>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home)
