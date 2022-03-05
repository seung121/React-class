import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['글 제목 예시 1', '글 제목 예시 2', '글 제목 예시 3']);
  //let [날짜, 날짜변경] = useState(['1월 14일', '1월 15일', '1월 16일']);
  let [좋아요, 좋아요변경] = useState(0);
  let [누른제목, 누른제목변경] = useState(0);
  let [modal, modal변경] = useState(false); // 모달창 켜고 닫는 스위치

  let [입력값, 입력값변경] = useState('');

  let myStyle = { color: 'white', fontSize: '30px' };

  let today = new Date()

  let date = (today.getMonth() + 1) + '월 ' + today.getDate() + '일 발행';
  /*let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일
  */


  return (
    <div className="App">
      <div className="black-nav">
        <div style={myStyle}>개발 BLOG</div>
      </div>

      {
        글제목.map(function (글, i) {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { 누른제목변경(i) }}> {글} <span onClick={() => { 좋아요변경(좋아요 + 1) }}>👍</span>{좋아요}</h3>
              <p>{date}</p>
              <hr />
            </div>
          )
        })
      }

      <div className="publish">
        <input onChange={(e) => { 입력값변경(e.target.value) }} />
        <button onClick={() => {
          var temp = [...글제목];
          temp.unshift(입력값);
          글제목변경(temp);
        }}>저장</button>
      </div>




      <button onClick={() => { modal변경(!modal) }}>열고닫기</button>
      {
        modal === true
          ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
          : null
      }

    </div >
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

//작명 = {전송할state}
{/* <button onClick={() => { 누른제목변경(0) }}>버튼1</button>
      <button onClick={() => { 누른제목변경(1) }}>버튼2</button>
    <button onClick={() => { 누른제목변경(2) }}>버튼3</button> */}

//<input onChange={(e) => { 입력값변경(e.target.value) }} />