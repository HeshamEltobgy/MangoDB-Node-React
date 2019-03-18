import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import Header from "./Header"



// const App = () => {
//   return (
//   <div className="App">
//     <Header message="Naming Contests" />
//     <div>
//     </div>
//   </div>
//  )
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props) {
  //     this.state = {
  //       test: 42
  //     }
  //   }
  // }
  state = {
    pageHeader: "Naming Contests"
  }
  // componentDidMount() {
  //   console.log('did Mount')
  //   debugger
  // }
  // componentWillUnmount() {
  //   console.log('will Unmount')
  //   debugger
  // }
  componentDidMount() {

  }
  componentWillUnmount() {
    
  }
  render() {
    return (
      <div className="App">
         <Header message={this.state.pageHeader} />
         <div>

         </div>
      </div>
    )
  }
}
export default App;
