import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import data from '../testData';
import * as api from '../api';

//The following is a stateless component
/*const App = () => {
    return (
        <div className="App">
            <Header message="Naming Contests"/>
            <div></div>
        </div>
    );
};*/

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

//The following is a statefull component
//This is used only if you need state or want to use lifecycle methods
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    //The following is an alternative to the above
    /*constructor(props) {
        super(props);
        this.state = { test: 42 };
    }*/

    componentDidMount() {
        console.log('Did Mount');
        //debugger;

        //user for timers, ajax calls

        /*
        axios.get('/api/contests')
            .then(resp => {
                console.log(resp.data.contests);
                this.setState({
                    contests: resp.data.contests
                })
            })
            .catch(console.error)*/
    }

    componentWillUnmount () {
        console.log('will Unmount');
        //debugger;
        //clean up timers
    }

    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}` 
        );
        api.fetchContest(contestId).then(contest => {
            this.setState({
                pageHeader: contest.contestName,
                currentContestId: contest.id
            })
        });  
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    <ContestList 
                    onContestClick={this.fetchContest} 
                    contests={this.state.contests}/>
                </div>
            </div>
        );
    }
}

export default App;