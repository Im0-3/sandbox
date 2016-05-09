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

Display.propTypes = {
    message: React.PropTypes.string
};

Display.defaultProps = {
    message: 'ココにメッセージが入ります'
};

export default Display;