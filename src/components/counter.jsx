import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if (prevProps.counter.value !==this.props.counter.value){
            // Ajax call and get new data from server
        };
    };

    componentWillUnmount(){
        console.log('Counter - Unmount');
    };
    
    render() {
        return ( 
            <div className="now">
                <div className="col-1">
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button 
                onClick={() =>this.props.onIncrement(this.props.counter)} 
                className="btn btn-secondary btn-sm"
                >
                +
                </button>
                <button 
                onClick={() =>this.props.onDecrement(this.props.counter)} 
                className="btn btn-secondary btn-sm m-2"
                disabled={this.props.counter.value===0?'disabled':''}
                >
                -
                </button>
                
                <button 
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                    className="btn-danger btn-sm m-2"
                    >
                    Delete
                </button>
                </div>
            </div>
        );    
    };
    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
};

};
export default Counter;