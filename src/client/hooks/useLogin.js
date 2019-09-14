import React, {useContext} from 'react';
import {AppStoreContext} from "../contexts/AppStoreContext";

const useLogin = () => {
  const {login} = useContext(AppStoreContext);

  return {login, isAuthenticated: !!login};
};

export default useLogin;
