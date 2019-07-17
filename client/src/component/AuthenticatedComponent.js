import React,{Component} from 'react';
import {getJwt} from '../helper/jwt';
import axios from 'axios';
import {withRouter} from 'react-router-dom'

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            user : undefined
        }
    }

    componentDidMount(){
        const jwt = getJwt();

        if(!jwt){
            this.setState({
                user: null
              });
              this.props.history.push('/login');
        }

        const config = {
          headers:{
              "Content-type":"application/json"
          }
        };
        config.headers['x-auth-token'] = jwt;
        
        axios.get('/api/user', config)
        .then(res=>{
            this.setState({user:res.data});
        }).catch(err=>{
            localStorage.removeItem('x-auth-token');
            localStorage.removeItem('user');
        })

    }

    render() {
        const { user } = this.state;
        if (user === undefined) {
          return (
            <div>
              Loading...
            </div>
          );
        }
    
        // if (user === null) {
        //   this.props.history.push('/login');
        // }
        return this.props.children;
      }
}

export default withRouter(AuthenticatedComponent);