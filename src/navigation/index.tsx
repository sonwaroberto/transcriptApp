import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import Loader from '../loader/loader';
import MainStack from './MainStack';
import {useAppDispatch, useAppSelector} from '../redux/typings';
import {RootState} from '../redux/store';
import {AnyAction} from 'redux';
import {loadUserFunc} from '../redux/auth/thunk/auth.thunk';
import {setUser} from '../redux/auth/slices/auth.slice';

const App = () => {
  const dispatch = useAppDispatch();
  const {user, loading, userData} = useAppSelector(
    (state: RootState) => state.authSlice,
  );
  useEffect(() => {
    dispatch(loadUserFunc() as unknown as AnyAction);
  }, [dispatch]);

  useEffect(() => {
    if (userData?.id) {
      dispatch(setUser(userData));
    }
  }, [dispatch, userData]);

  if (loading) {
    return <Loader />;
  }
  console.log('Loading user', user);

  return (
    <NavigationContainer>
      {userData?.id ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
