import React from 'react'
import {render} from 'react-dom'
import reactQuerySelector from '..'

const MyButton = () => <button type="button">Click me</button>
const MyButtonWithLongName = () => <button type="button">Click me</button>

const App = () => (
  <div>
    Hello world
    <MyButton/>
    <MyButtonWithLongName/>
  </div>
)

render(<App/>, document.getElementById('app'))


setTimeout(() => {
  console.log(reactQuerySelector('App'))
  console.log(reactQuerySelector('MyButton'))
  console.log(reactQuerySelector('_Long_'))
  console.log(reactQuerySelector('button[type = "button"]'))
}, 500)
