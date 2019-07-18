import { getJwt } from "./jwt";
import React from 'react';
import ReactLoading from 'react-loading';

export const getConfig = ()=> {
    const config = {
        headers:{
            "Content-type":"application/json"
        }
      };
      const jwt = getJwt();
      config.headers['x-auth-token'] = jwt;

      return config;
}

export const getSpinner = (width, height) =>{
    return (<ReactLoading type="cubes" width={width} height={height} className="spinner" color="#39ace7"  />);
}