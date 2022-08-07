import React from 'react'
import {render} from 'react-dom'
import reactQuerySelectorAll from '../src'

const MyButton = () => <button type="button">Click me</button>

const App = () => (
  <div>
    Hello world
    <MyButton/>
  </div>
)

render(<App/>, document.getElementById('app'))


setTimeout(() => {
  console.log(reactQuerySelectorAll('App'))
  console.log(reactQuerySelectorAll('MyButton'))
  console.log(reactQuerySelectorAll('button[type = "button"]'))
}, 500)
