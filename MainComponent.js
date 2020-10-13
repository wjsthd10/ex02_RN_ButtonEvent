import React,{Component} from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';


class MainComponent extends Component{

    render(){
        return (
            <View style={styles.root}>
                <View>
                    {/* onPress속성이 동작하는 함수를 전역 함수로 작성하는 것을 권장하지 않는다.  - 즉, 맴버 메소드로 함수를 만들것을 권장 */}
                    <Button title="button" onPress={this.setTextValue}></Button>
                    {/* 맴버를 사용할때는 this. 키워드 필수!!! */}
                </View>
                {/* 글씨를 보여주는 컴포넌트 */}
                <Text style={styles.textStyle}>{this.state.data}</Text>

                <View>
                    <Button title="button2" onPress={this.setTextValue2} color="#ff2244"></Button>
                </View>
                <Text style={styles.textStyle}>{this.state.text}</Text>
            </View>
        );
    }// render method...

    // 멤버변수
    name="Hello";

    
    // 리액트의 독특한 멤버변수(객체)
    state={// 상태변수라고 부름
        data:"Hello RN",
        text:"Good"
    }

    // 메소드위치
    
    show(){
        // Alert.alert('this.show');
        // Text컴포넌트가 보여주는 글씨 변경
        // 기존 기법과 완전 다름!!!!!
        // 글씨를 가진 부를 제어하는 것이 아니라
        // 그 뷰가 보여주는 내용물을 가진 변수의 값을 변경하는 방식!!
        // this.name="Nice";// ERROR - this.name을 알아 듣지 못함
        // 이 버튼 클릭시 발동하는 함수를 선언적 함수로 만들면 그 함수 안에서 this. 키워드는 이 클래스가 아니라 이 함수를 실행시킨 Button을 의미함
        // 그렇기에 this.name가 MainComponent의 name가 아니라
        // Button객체의 멤버중에서 name을 찾기 때문에 에러
    }

    // 그래서 RN에서는 이벤트를 처리하는 함수를 반드시 화살표 함수로 만들것을 권장한다.
    show2=()=>{
        
        // 이 화살표 함수 안에서 this. 는 MainComponent객체를 의미한다.
        this.name="Nice";
        // 변수값을 변경해도 화면을 갱신하지 않으면 변화가 없음
        // this.forceUpdate();// re render() 함수 호출 => 개발자 사이트에 나와있지 않은 내용이다. // 권장하지 않는다.
    }

    setTextValue=()=>{
        // 이 컴포넌트의 특별한 멤버 변수[state]의 값을 변경하면 자동 화면 갱신됨!!
        // 반드시 변경은 setState()메소드를 이용해야 만 함
        // this.state.data="Nice";
        this.setState({data:"Nice"});
        this.setState({text:"Good RN"})
    }

    setTextValue2=()=>{
        this.setState({text:"Hello"});
        this.setState({data:"Hello RN"});
    }

}// MainComponent class

// 가급적 버튼이벤트 함수들은 버튼을 가진 class 안에서 처리하는 것을 권장
// 전역 함수
function clickBtn(){
    // alert("클릭됨");
    Alert.alert("클릭됨");
};
const clickBtn2=function(){Alert.alert('click!2');};
let clickBtn3=()=>{Alert.alert('화살표함수');};

// 스타일시트 객체 생성
const styles=StyleSheet.create({
    root:{
        padding:16,
        flex:1,
    },
    textStyle:{
        marginTop:16,
        fontSize:28,
        color:'#aaee22',
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
    }
});



// 다른 문서인 index.js에서 이 MainComponent를 인식할 수 있도록
export default MainComponent;