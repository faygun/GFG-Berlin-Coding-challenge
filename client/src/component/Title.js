import React,{Component} from 'react';

export default class Title extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <h3 className="text-center">{this.props.name}</h3>
            </div>
        )
    }
}