// Code goes here
var Main = React.createClass({
  getInitialState: function() {
    return {logins: ['petehunt']};
  },
  addCard: function(loginToAdd) {
    this.setState({logins: this.state.logins.concat(loginToAdd)});
  },
  render: function() {
    var cards = this.state.logins.map(function(login) {
      return (<Card login={login} />); 
    });
    return (
      <div>
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    )
  }
});

var Form = React.createClass({
  handlSubmit: function(e) {
    e.preventDefault();
    var loginInput = React.findDOMNode(this.refs.login);
    this.props.addCard(loginInput.value);
    loginInput.value = '';
  },
  render: function() {
    return (
      <form onSubmit={this.handlSubmit}>
        <input type="text" placeholder="github login" ref="login"/>
        <button>Add</button>
      </form>
    );
  }
});

var Card = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    var component = this;
    $.get('https://api.github.com/users/' + this.props.login, function(data) {
      component.setState(data);
    });
  },
  render: function() {
    return(
      <div>
        <img src={this.state.avatar_url} width="80"/>
        <h3>{this.state.name}</h3>
        <hr/>
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("root"));