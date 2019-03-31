import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Header from "./Header"
import ContestList from './ContestList'
import Contest from './Contest'
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

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url)


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
  fetchContest = (contestId) => {
    pushState(
      {currentContestId: contestId},
      `/contest/${contestId}`
    )
    this.setState ({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    })
  }
  currentContent() {
    if(this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />
    } else {
      return <ContestList
      onContestClick ={this.fetchContest}
      contests={this.state.contests} />
     }
    }

  render() {
    return (
      <div className="App">
         <Header message={this.state.pageHeader} />
         {this.currentContent()}
      </div>
    )
  }
}
export default App;
