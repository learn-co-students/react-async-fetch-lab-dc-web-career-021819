// create your App component here
import React, {Component} from 'react'

class App extends Component {

  constructor(){
    super()
    this.state = {
      stuff: []
    }
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json').then(response => response.json())
  }

  render(){
    return <div></div>
  }


}
export default App
