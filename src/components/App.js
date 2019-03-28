import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header"
import ContestPreview from './ContestPreview'



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
    pageHeader: "Full-Stack React & MongoDB"
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
            {this.props.contests.map(contest =>
                <ContestPreview {...contest} />
            )}

         </div>
      </div>
    )
  }
}
export default App;
