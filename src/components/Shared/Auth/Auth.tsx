import React from 'react';
import Login from './Login';
import AuthSideBar from '@/components/Layout/AuthSideBar';

function Auth() {
  return (
    <div className="flex w-full pt-20 gap-40 lg:px-40  flex-wrap sm:px-10 ">
      <AuthSideBar></AuthSideBar>
      <Login></Login>
    </div>
  );
}

export default Auth;
