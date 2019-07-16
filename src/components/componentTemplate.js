import React, { Component, Fragment } from 'react';

// props: 정적인 데이터
// state: 동적인 데이터

//일반 리액트 컴포넌트
class ComponentTemplate extends Component {
    //#region Initialize

    /// 기본 props는 여기서 주면 될듯
    static defaultProps = {
        props_a: 'props a'
    }

    /// constructor
    constructor(props) {
        // 상속한 Component props를 덮어쓴다는 뜻?
        super(props);

        // state 설정은 여기서
        this.state = {
            state_a: 0,
            state_b: {
                key: 'keyName',
                value: 999
            }
        }

        // 매서드 바인드 방법1
        this.simpleTestMethod = this.simpleTestMethod.bind(this);
    }

    //#endregion

    //#region Lifecycle Method

    componentDidMount(){
        console.warn("Lifecycle Method: componentDidMount");
    }    
    shouldComponentUpdate(nextProps, nextState){
        console.warn("Lifecycle Method: shouldComponentUpdate");
        return true;
    }    
    getSnapshotBeforeUpdate(){
        console.warn("Lifecycle Method: getSnapshotBeforeUpdate");
    }
    componentDidUpdate(){
        console.warn("Lifecycle Method: componentDidUpdate");
    }
    componentWillUnmount(){
        console.warn("Lifecycle Method: componentWillUnmount");
    }
    componentDidCatch(error, info){
        console.warn("Lifecycle Method: componentDidCatch");
    }

    // 명왕성 당한 놈들
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log("componentWillReceiveProps");
    // }
    // componentWillUpdate(nextProps, nextState){
    //     console.log("componentWillUpdate");
    // }

    //#endregion

    //#region Method

    // 매서드 바인드 방법2    
    // 컴포넌트 props, state 확인
    simpleTestMethod = (testMethodParam) => {
        console.log("simpleTestMethodParam: ", testMethodParam);
        console.log("props: ", this.props);
        console.log("state: ", this.state);
    }
    // state 변경 테스트
    stateSetTestMethod = (param) => {
        // TODO: param 이거 뭔지 잘 모르겠음(리액트 default Class인가?)
        console.log(param);
        // 방법1
        this.setState({
            // TODO: immutable.js or immer.js 공부하기
            state_a: this.state.state_a + 1
        });
        // 방법2
        this.setState((thisClassState) => ({
            state_a: thisClassState.state_a + 1
        }));
        // 방법3
        this.setState(({ state_a }) => ({
            state_a: state_a + 1
        }));
    }
    //#endregion

    render() {
        return (
            <Fragment>
                컴포넌트 템플릿
                property 사용 {this.props.props_a}<br></br>
                property 사용 {this.props.props_b}<br></br>
                함수호출(콘솔창 확인) {this.simpleTestMethod('test method param str')}<br></br>
                <button onClick={this.stateSetTestMethod}>이 버튼을 누르면..</button>
            </Fragment>
        );
    }
}
// 여기서 세팅하는 것도 가능함(덮어씌워짐)
// ComponentTemplate.defaultProps = {
//     props_b: 'props b'
// }

export default ComponentTemplate;
