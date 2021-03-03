import axios from 'axios';

const ClienteAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
});

export default ClienteAxios;