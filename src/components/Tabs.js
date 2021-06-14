import React, { Component } from 'react';
import { connect } from 'react-redux';

const updateValue = () => {
    return {
        type: 'UPDATE_INPUT'
    }
}
const getText = () => {
    return {
        type: 'GET_TEXT'
    }
}
class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'hkk'
        };
    }


    render() {
        const { value, updateValue, getText } = this.props;
        console.log('redux components', this.props)
        return (
            <div>
                <input type="text" value={value} onChange={updateValue} />
                <button onClick={getText}>update</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        value: state.inputValue
    }

}




export default connect(mapStateToProps, {
    updateValue,
    getText
})(Tabs);