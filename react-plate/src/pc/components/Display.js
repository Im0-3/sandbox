import * as React from 'react';

class Display extends React.Component {
    constructor(prop){
        super(prop);
        this.state = {
            message: 'ココに結果が表示されます'
        };
    }
    render(){
        return (
            <div>
                { this.state.message }
            </div>
        );
    }
}

export default Display;