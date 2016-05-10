import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Form from './Form';

/**
 * FormArea
 */
class FormArea extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="formArea">
                <Form />
            </div>
        );
    }
}

export default FormArea;