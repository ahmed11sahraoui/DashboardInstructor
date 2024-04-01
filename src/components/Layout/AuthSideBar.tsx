import Image from 'next/image';
import React from 'react';

function AuthSideBar() {
  return (
    <div className="auth-side-bar lg:flex flex-col gap-8 w-1/3 sm:hidden">
      <div className="flex align-middle gap-1">
        <Image
          src="assets/images/logo.svg"
          alt="erreur"
          width={40}
          height={40}
        />
        <h1 className="text-6xl font-medium">Skye</h1>
      </div>
      <div className="auth-side-bar-content flex flex-col gap-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error itaque
          doloribus perferendis ipsum iure laboriosam maxime explicabo deleniti
        </p>
        <Image
          src="assets/images/analytics.svg"
          alt="alt"
          width={300}
          height={50}
        />
      </div>
    </div>
  );
}

export default AuthSideBar;
