/* eslint-disable */
import React, { useEffect, useState } from 'react';
import usePlaceholder from 'react-bootstrap/esm/usePlaceholder';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
    padding : 20px;
    background : ;
    size: 20px;
`;

let 제목 = styled.h4`
    font-size : 25px;  
    color : ${props => props.색상}  
`;

class Detail2 extends React.Component {
    /*옛날 문법*/
    /*컴포넌트가 실행 될 때 */
    componentDidMount() {

    }
    /*컴포넌트가 종료 될 때 */
    componentWillUnmount() {

    }
}

function Detail(props) {

    let [alert, alert변경] = useState(true);    // alert 창 보이는 여부
    let [inputData, inputData변경] = useState('');

    /*컴포넌트가 mount 되었을 때, update될 때 특정코드 실행*/
    useEffect(() => {
        let 타이머 = setTimeout(() => { alert변경(false) }, 2000);

        //return function 어쩌구() { };   // 컴포넌트가 사라질 때 코드를 실행
        return () => { clearTimeout(타이머) }     // 컴포넌트 사라질 때 버그 방지용 타이머 해제

        // return () => {} 로도 사용 가능
    }, [alert]);    // alert라는 state가 변경 될 때만 실행해주세요, state는 여러개 쓸 수 있어요
    // 만약 빈칸인 []로 둔다면 페이지가 등장할 때 한 번만 실행하고 끝나요



    let { id } = useParams();
    let history = useHistory();

    return (
        <div className="container" >
            <박스>
                <제목 색상='grey'>Detail</제목>
            </박스>
            {inputData}
            <input onChange={(e) => { inputData변경(e.target.value) }} />

            <div className="row">
                {
                    alert === true
                        ? (<div className='my-alert-red'>
                            <p>재고가 얼마 남지 않았습니다!</p>
                        </div>)
                        : null
                }

                {/* <div className='my-alert-red'>
                    <p >재고가 얼마 남지 않았습니다!</p>
                </div> */}
                <div className="col-md-6">
                    <img src={require("./img/item0" + id + ".jpg")} width="100%" />
                </div>
                <div className="col-md-6 mt-4">

                    <h4 className="pt-5">{props.item[id].title}</h4>
                    <p>{props.item[id].content}</p>
                    <p>\{props.item[id].price}</p>

                    <button className="btn btn-danger"
                        onClick={() =>
                            alert("입금계좌 : 카카오뱅크 3333-06-2283713 (넝담~ㅎ)")
                        }>주문하기</button>

                    <hr />
                    <button className="btn btn-warning" onClick={() => {
                        history.goBack();
                        {/*history.push('/');*/ }
                    }}>뒤로가기</button>
                </div>
            </div>
            <div style={{ padding: "50px" }} />
        </div >

    )
}
export default Detail;