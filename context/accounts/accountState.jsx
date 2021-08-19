import React, { useReducer } from 'react';

//Components
import accountContext from './accountContext'
import accountReducer from './accountReducer'
import clienteAxios from '../../config/axios'

//Types
import { 
    CHECK_ACCOUNT, 
    CREATE_ACCOUNT, 
    ERROR_ACCOUNT, 
    GET_ACCOUNT,
    UPDATE_ACCOUNT,
    DELETE_ACCOUNT
} from '../../types'

const AccountState = props => {
    const initialState = {
        accounts: [],
        errorForm: false,
        msg: null
    }

    //Dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(accountReducer, initialState)

    //funciones para el CRUD
    const getAccount = async () => {
        try {
            const resultado = await clienteAxios.get('/api/account');
            console.log(resultado);
            dispatch({
                type: GET_ACCOUNT,
                payload: resultado.data.accounts
            })
        } catch(error) {
            console.log(error);
        }
    }

    const createAccount = async account => {
        try{
            const resultado = await clienteAxios.post('/api/account', account);
            console.log(resultado);
            dispatch({
                type: CREATE_ACCOUNT,
                payload: account
            })
        }catch(error){
            console.log(error.response);
            const msg = error.response.data.msg;

            dispatch({
                type: ERROR_ACCOUNT,
                payload: msg
            })
        }
    }

    const checkForm = () => {
        dispatch({
            type: CHECK_ACCOUNT
        })
    }

    const updateAccount = async (account) => {
        try {
            const resultado = await clienteAxios.put(`/api/account/${account._id}`, account)
            console.log(resultado);
            dispatch({
                type: UPDATE_ACCOUNT,
                payload: resultado.data.account
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAccount = async (account) => {
        try {
            await clienteAxios.delete(`/api/account/${account._id}`, {params: {account}});

            dispatch({
                type: DELETE_ACCOUNT,
                payload: account
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <accountContext.Provider value={{
            errorForm: state.errorForm,
            accounts: state.accounts,
            msg: state.msg,

            checkForm,
            getAccount,
            createAccount,
            updateAccount,
            deleteAccount
        }}>
            {props.children}
        </accountContext.Provider>
    )
}

export default AccountState;