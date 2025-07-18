import { Link } from "react-router-dom";

const Login = () => {
   return (<div className=" h-screen flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg shadow-md bg-white/20 backdrop-blur-sm" > 
        <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login <span className="text-blue-500">TrackerApp</span>
        </h1>
        <form >
            <div >
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
             <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10" />
            </div>

            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
            </div>
            <Link to='/signup' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> 
                {"Don't"} have an account?

            </Link>
            <div>
                <button className="btn btn-block btn-sm mt-2">Login</button>
            </div>
          


        </form>
    </div>

    </div>);
};
export default Login;

/*STARTER CODE FOR THIS  LOGIN PAGE:
const Login = () => {
   return <div className="flex-col items-centre justify-centre min-w-96 mx-auto">
    <div className="w-full p-6 rounded-1g shadow-md bg-gray-400 bg-clip-padding backdrop-filter blackdrop-blur-lg bg-opacity-0"> 
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login <span className="text-blue-500">TrackerApp</span>
      </h1>
      <form >
            <div>
            <label className="label p-2">
             <span className="text-base label-text">Username</span>
            </label>
             <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10" />
            </div>

            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" />
            </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> 
                {"Don't"} have an account?

            </a>
            <div>
                <button classname="btn btn-block btn-sm mt-2">Login</button>
            </div>
          


        </form>
    </div>

    </div>
};
export default Login;*/