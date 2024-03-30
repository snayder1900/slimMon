import {useDispatch, useSelector} from 'react-redux';
import { caloriesApi } from '../api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch();

  const startLogin = async({email, password}) => {
    // console.log({email, password});
    dispatch( onChecking() )
    try {
      const resp = await caloriesApi.post('/users/login', {email, password});
      // console.log(resp.data.data.token);
      // console.log({data});
      localStorage.setItem('token', resp.data.data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch( onLogin({name: resp.data.data.user.name}) ); //uid: data.uid

    } catch (error) {
      // console.log(error);
      dispatch( onLogout('Credenciales incorrectas') );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10);
    }
  }

  // *pendiente  validar token, comparar componete login con  register
  const startRegister = async({email, password, name}) => {
    // console.log({email, password});
    dispatch( onChecking() )
    try {
      const resp = await caloriesApi.post('/users/signup', {email, password, name});
      // console.log(resp);
      localStorage.setItem('token', resp.data.data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch( onLogin({name: resp.data.data.user.name}) ); //uid: data.uid

    } catch (error) {
      console.log(error);
      dispatch( onLogout(error.response.data?.message || '--') );
      // dispatch( onLogout(error.response.data?.message || '--') );
      setTimeout(() => {
        dispatch( clearErrorMessage() );
      }, 10);
    }
  }

  const checkAuthToken = async() =>  {
    const token = localStorage.getItem('token');
    if(!token)return dispatch( onLogout() );

    try {
      // pendientevalidar por que el token debeestar en otro eendpoint
      const resp  = await caloriesApi.post('/users/login');
      console.log(resp);
      localStorage.setItem('token', resp.data.data.token);
      localStorage.setItem('token-init-date', new Date().getTime());
      dispatch( onLogin({name: resp.data.data.token}) ); //uid: data.uid
    } catch (error) {
      localStorage.clear();
      dispatch( onLogout() );
    }
  }

  return {
    //*propiedades
    errorMessage,
    status,
    user,

    //*metodos
    checkAuthToken,
    startLogin,
    startRegister
  }
}