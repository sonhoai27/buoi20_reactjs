const React = React;

class BoxControl extends React.Component {
    onAdd() {
      // const {parent} = this.props;
      // parent.setState({
      //   value: parent.state.value + 1
      // })
      this.props.onClickAdd();
    }
    render() {
        return (
            <button onClick={this.onAdd.bind(this)}>Add</button>
        );
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    add(){
      this.setState({
        value: this.state.value + 1,
      })
    }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <BoxControl onClickAdd={() => this.add()}/>
            </div>
        );
    }
}

ReactDOM.render(<Box />, document.getElementById('root'));// eslint-disable-line
