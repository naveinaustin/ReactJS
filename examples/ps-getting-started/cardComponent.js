const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
  	  <img width="75px" src="https://avatars1.githubusercontent.com/u/2513597?v=4"/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
      	<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
      	<div>{props.company}</div>
  	  </div>
    </div>
  );
};

let data = [
	{name: "one1", company:"Facebook"},
  {name: "two1", company:"Google"}
]

const CardList = (props) => {
	return (
  	<div>
    	<Card name="one" company="Facebook"/>
      <Card name="two" company="Google"/>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};

class Form extends React.Component {
  state = {
  	userName: ''
  }
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log('Event form submit ' + this.state.userName);
    this.props.onSubmit({name: this.state.userName, company:"Google"});
    this.setState({userName: ''});
  };
	render() {
  	return (
  	<form onSubmit={this.handleSubmit}>
  	  <input type="text" 
      	value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value})}
        placeHolder="Github username"/>
      <button>Add Card</button>
  	</form>
    );
  };
};

class App extends React.Component {
	state = {
    cards: [
      {name: "one1", company:"Facebook"},
      {name: "two1", company:"Google"}
    ]
  };
  
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
    	cards: prevState.cards.concat(cardInfo)
    }));
  	console.log(cardInfo);
  };
	render() {
  	return (
    	<div>
      	<Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </div>
      );
  };
};

ReactDOM.render(<App/>, mountNode);


/***
.info {
	color: red; 
}
***/
