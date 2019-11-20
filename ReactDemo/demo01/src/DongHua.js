import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class DongHua extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="dong-text"
                    unmountOnExit
                >
                    <div>孙悟空</div>
                </CSSTransition>
                
                <div>
                    <button
                    onClick={this.toToggole}
                    >召唤</button>
                </div>
            </div>
         );
    }

    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }

}
 
export default DongHua;