import { createStore } from 'redux'
import game from '../reducers/reducers'

const store = createStore(
  game,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
