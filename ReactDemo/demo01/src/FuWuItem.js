import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FuWuItem extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    render() { 
        return ( 
            <div
            onClick = {this.handleClick}
        >
            {this.props.avname}为你做 - {this.props.content}
            </div>
         );
    }

    handleClick(){
       this.props.deleteItem(this.props.index)
    }

}

FuWuItem.propTypes = {
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

FuWuItem.defaultProps = {
    avname:"小V"
}
 
export default FuWuItem;