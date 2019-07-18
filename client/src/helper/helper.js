import { getJwt } from "./jwt";

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