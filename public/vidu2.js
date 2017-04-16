
class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 0, isRed: true, mau: 'red'};//la doi tuong co nhieu thuoc tinh, nhu la 1 gia tri nao do
  }
  ClickButton(){
    this.setState({
      value: this.state.value + 1
    });
  }
  ClickToogle(isRed){
    if(isRed == true){
      this.setState({
        isRed: false,
        mau: 'black',
      });
    }else{
      this.setState({
        isRed: true,
        mau: 'red',
      });
    }

  }
  render(){
    return(
      <div>
        <h3 style={{color: this.state.mau}}>{this.state.value}</h3>
        <button onClick={() => this.ClickButton()}>Add</button>
        <button onClick={() => this.ClickToogle(this.state.isRed)}>Toggle</button>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class ChangeImage extends React.Component{

  constructor(props){
    super(props);
    this.state = {idHinh: 1}
  }
  btnNext(){
    if(this.state.idHinh <6){
      this.setState({
        idHinh: this.state.idHinh + 1,
      })
    }else{
      if(this.state.idHinh >= 6){
        this.setState({
          idHinh: 1,
        })
      }
    }
  }
  render(){
    const html = <h1>KHOAPHAM</h1>
    return(
      <div>
        {html}
        <img src={`images/${this.state.idHinh}.png`}/>
          <button onClick={() => this.btnNext()}>Next</button>
          <button>Pre</button>
      </div>
    );
  }
}
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Box num={100}/>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <ChangeImage/>,
  document.getElementById('root')
);
//viet truc tiep function thi phai dung bind(this), con dung arrow func thi ko can dung bind
//<button onClick={this.ClickButton.bind(this)}>Add</button>
// <img src={'images/'+ this.state.idHinh + '.png'}/>
