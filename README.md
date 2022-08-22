# react-queryselector

Query react components in the same way query html tag with querySelector, useful for:
- Testing, stop using data-testid
- Automation
- Chrome extension for hacking the dom

## Usage
```javascript
import reactQuerySelector from '@solim/react-queryselector'

// Setup the app

const MyButton = () => <button type="button">Click me</button>

const App = () => (
  <div>
    Hello world
    <MyButton/>
  </div>
)

render(<App/>, document.getElementById('app'))

// Use reactQuerySelector to query component

reactQuerySelector('MyButton')
reactQuerySelector('App')
reactQuerySelector('button[type="button"]')
```
