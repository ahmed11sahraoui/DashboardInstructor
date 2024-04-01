import React from 'react';

function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="auth-form w-full max-w-md mx-auto">
      <div className="auth-form-header">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-gray-400">Welcome back to Skye</p>
      </div>
      <div className="auth-form-content mt-8">
        <form
          className="flex flex-col gap-5 "
          onSubmit={handleSubmit}
          data-testid="login-form"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="auth-form-input p-3 border"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form-input p-3 border"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-end items-center">
            <a href="#" className="text-blue-500 underline">
              Forgot password?
            </a>
          </div>
          <button className="auth-form-btn bg-blue-500 text-white py-3 text-lg font-medium   hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Sign In
          </button>
          <div>
            <p className="text-center">
              Don&apos;t have an account?{' '}
              <a href="#" className="text-blue-500 font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
