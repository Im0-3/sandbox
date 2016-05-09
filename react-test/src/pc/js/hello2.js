import * as React from 'react';
import * as ReactDOM from 'react-dom';

/**
 * Hello
 */
class Hello extends React.Component {
    constructor(props){
        super(props);
        //コンポーネントはstateとpropという２種類のデータをもつことができる
        this.state = {
            message: null
        };
    }
    //コンポーネントがマウントされたら実行
    componentDidMount() {
        let form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let input = e.currentTarget.querySelectorAll('input');
            this.setState({message: input[0].value});
        });
    }
    render(){
        return (
            <div>
                <form id="form">
                    <input type="text" />
                    {}
                    <button type="submit">submit</button>
                </form>
                <div>Hello World! { this.state.message }</div>
            </div>
        );
    }
}

let hello = ReactDOM.render(<Hello />, document.getElementById('hello'));

