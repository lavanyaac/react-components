class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return ( < li style = { style }
      onMouseOver = { this.onListItemClick.bind(this) } > { this.props.todo } < /li>
    );
  }
}


var GroceryList = (props) =>
  ( < ul > {
      props.todos.map(todo =>
        < GroceryListItem todo = { todo }
        />
      )
    } < /ul>

  );


var App = () => ( < div >
< h2 > Hello There < /h2>  < GroceryList todos = { ['Learn React', 'Crush React.ly', 'Maybe Sleep']
}
/ > < /div > );

ReactDOM.render( < App / > , document.getElementById("app"));
