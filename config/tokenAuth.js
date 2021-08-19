import clienteAxios from './axios';

const TokenAuth = (token) => {
    if(token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete clienteAxios.defaults.headers.common['x-auth-token']
    }
}
 
export default TokenAuth;