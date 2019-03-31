import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header"
import ContestList from './ContestList'
// import data  from '../testData.json';

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
    // contests: []
    contests: this.props.initialContests
  }
  // componentDidMount() {
  //   console.log('did Mount')
  //   debugger
  // }
  // componentWillUnmount() {
  //   console.log('will Unmount')
  //   debugger
  // }
  // componentDidMount() {
  //   axios.get('/api/contests')
  //     .then(resp => {
  //       this.setState({
  //         contests: resp.data.contests
  //       })
  //     })
  //     .catch(console.error);
  // }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="App">
         <Header message={this.state.pageHeader} />
         <ContestList contests={this.state.contests} />

      </div>
    )
  }
}
export default App;
