import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from "./Header";
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
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

const onPopState = handler => {
  window.onpopstate = handler;
}

class App extends React.Component {
  // constructor(props) {
  //   super(props) {
  //     this.state = {
  //       test: 42
  //     }
  //   }
  // }
  static propTypes = {
    initialData: PropTypes.object.isRequired
  }
  state = this.props.initialData;
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
  }
  componentWillUnmount() {
    onPopState(null);
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
    api.fetchContest(contestId).then(contest => {
      this.setState ({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest

        }
      })
    })

  }
  fetchContestList = () => {
    pushState(
      {currentContestId: null},
      `/`
    )
    api.fetchContestList().then(contests => {
      this.setState ({
        currentContestId: null,
        contests
      })
    })

  }
  currentContest() {
    return this.state.contests[this.state.currentContestId]
  }
  pageHeader() {
    if(this.state.currentContestId) {
      return this.currentContest().contestName
    } else {
      return "Full-Stack React & MongoDB"
    }
  }
  currentContent() {
    if(this.state.currentContestId) {
      return <Contest
      contestLinkClick={this.fetchContestList}
      {...this.currentContest()} />
    } else {
      return <ContestList
      onContestClick ={this.fetchContest}
      contests={this.state.contests} />
     }
    }

  render() {
    return (
      <div className="App">
         <Header message={this.pageHeader()} />
         {this.currentContent()}
      </div>
    )
  }
}
export default App;
