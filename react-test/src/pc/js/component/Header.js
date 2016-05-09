import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Greeting extends React.Component {
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
        console.log(window.navigator);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        const { isBirthday } = this.props;

        return (
            <div>
                { (isBirthday) ? 'Happy birthday!!' : 'Hello, how are you?' }
            </div>
        );
    }
}

Greeting.propTypes = {
    isBirthday: React.PropTypes.bool
};


Greeting.defaultProps = {
    isBirthday: true
};

// 表示する先
const $app = document.getElementById('jsApp');

// 表示！
ReactDOM.render(<Greeting />, $app);