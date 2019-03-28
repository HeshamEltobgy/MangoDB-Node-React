import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header"
import ContestPreview from './ContestPreview'
import data  from '../testData.json';


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
    pageHeader: "Full-Stack React & MongoDB",
    contests: []
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
    this.setState({
      contests: data.contests
    })
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="App">
         <Header message={this.state.pageHeader} />
         <div>
            {this.state.contests.map(contest =>
                <ContestPreview key={contest.id} {...contest} />
            )}

         </div>
      </div>
    )
  }
}
export default App;
