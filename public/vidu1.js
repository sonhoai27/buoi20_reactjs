//function
const Note = (props) => (
  <div>
    <h3 className="red">
      {props.theme}
    </h3>
    <p>
      {props.title}
    </p>
    <button onClick={() => console.log(props.title)}>LOG</button>
  </div>
) //tra ve html

//class
class List extends React.Component {
  render() {
    return (
      <div>
        <Note
          theme="Hoc"
          title="Ngay mai tham gia hoi nghi"/>
        <Note theme="Choi" title="Ngay mot di Vung Tau"/>
      </div>
    );
  }
}

ReactDOM.render(
  <List/>,
  document.getElementById('root')
);

//{la cua javascript} {} ben trong la cua object
