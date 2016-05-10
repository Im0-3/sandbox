import * as React from 'react';

class Display extends React.Component {
    constructor(prop){
        super(prop);
    }
    render(){
        let { message } = this.props;
        return (
            <div>
                { message }
            </div>
        );
    }
}
//propsの値を定義
Display.propTypes = {
    message: React.PropTypes.string
};
//propsの初期値を設定する
Display.defaultProps = {
    message: 'ココにメッセージが入ります'
};

export default Display;