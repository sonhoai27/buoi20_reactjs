// //function
// const Note = (props) => (
//   <div>
//     <h3 className="red">
//       {props.theme}
//     </h3>
//     <p>
//       {props.title}
//     </p>
//     <button onClick={() => console.log(props.title)}>LOG</button>
//   </div>
// ) //tra ve html
//
// //class
// class List extends React.Component {
//   render() {
//     const arrHTML = [
//       'Node', 'React', 'React Native'
//     ];
//     //chuyen doi mot mang co n phan tu nay sang 1 mang moi co n phan tu nhung moi phan tu co sua doi
//     //vi dung nhu ben duoi
//     //tac dung cua key, nhu la khi tung dong co the thay doi, thi key con nguyen thi no se hieu la cai cu do, mac du da thay doi gia tri
//     const showMgHTMl = arrHTML.map((e)=>(
//       <p key={e}>{e}</p> //in ra tung phan tu
//     ))
//     return (
//       <div>
//         {showMgHTMl}
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <List/>,
//   document.getElementById('root')
// );

const React = React;

//1 item thi gom co nhung gi
class NoteModel {
    constructor(subject, content) {
        this.content = content;
        this.subject = subject;
    }
}

//mang
const arrNoteModel = [
    new NoteModel('Hoc tap', 'Xem truoc video ve reactjs'),
    new NoteModel('Vui choi', 'Hen nhom ban dai hoc'),
    new NoteModel('Cong viec', 'Nop bao cao cuoi thang')
];

//moi item cua 1 list
const Note = (props) => (
    <div>
        <h3 className="red">{props.note.subject}</h3>
        <p style={{ color: 'green' }}>{props.note.content}</p>
    </div>
);

//in ra danh sach list
class List extends React.Component {
  constructor(props){
    super(props);
      this.state = {arrNote: arrNoteModel}
  }
  addSubject(){
    const {txtSubject, txtContent} = this.refs;
    const note = new NoteModel(txtSubject.value, txtContent.value);
    this.setState({
      arrNote: this.state.arrNote.concat(note),
    })
    txtSubject.value = '';
    txtContent.value = '';
  }
    render() {
      const {arrNote} = this.state;
        return (
            <div>
                {arrNote.map(e => <Note key={e.content} note={e} />)}
                <input type="text" ref="txtSubject" placeholder="Enter your Subject"></input>
                <input type="text" ref="txtContent" placeholder="Enter your Content"></input>
                <button onClick={() => this.addSubject()}>Them</button>
            </div>
        );
    }
}

ReactDOM.render(// eslint-disable-line
    <List />, document.getElementById('root')// eslint-disable-line
);
