
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen grid place-items-center">
      <form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
       
        <div className="form-control">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="input input-bordered undefined"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="input input-bordered undefined"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary btn-block">REGISTER</button>
        </div>
        <div className="mt-1">
          <button type="submit" className="btn btn-secondary btn-block">Guest user</button>
        </div>
        <p className="text-center">Not a member yet?
        <Link to='/register' className="ml-2 link link-hover link-primary capitalize">REGISTER</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

