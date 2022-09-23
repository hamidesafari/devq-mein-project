import * as React from "react";
/* import "./index.scss"; */
import Layout from "../../Layout";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [file, setFile] = React.useState();
  const [showRegister, setShowRegister] = React.useState(false);
  const [name, setName] = React.useState("");
  const user = useUser();
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const status = await user.login({
      email: email,
      password: password,
    });

    if (status === 200) {
      navigate("/account");
    }
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    const status = await user.register({
      email: email,
      password: password,
      name: name,
      file: file,
    });

    if (status === 200) {
      navigate("/account");
    }
  };

  if (showRegister) {
    return (
      <Layout>
        <div className="Login flex justify-content-center h-screen bg-slate-200">
          <div
            id="form"
            className="block bg-slate-50 p-6 rounded-x1 shadow-md shadow-slate-300 w-90"
          >
            <form action="" className="box" onSubmit={handleRegisterClick}>
              <h2 className="text-blue-700 text-3x1 font-semibold my-4">
                Register
              </h2>
              <hr />

              <div className="input-group  w-1/2 mr-1">
                <div className="label text-sm">Email</div>
                <input
                  type="email"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-group  w-1/2 mr-1">
                <div className="label text-sm">Password</div>
                <input
                  type="password"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="input-group w-1/2 mr-1">
                <div className="label text-sm">Name</div>
                <input
                  style={{ backgroundColor: "#E8F0FE" }}
                  type="text"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2   outline-blue-600 shadow-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-group w-1/2 mr-1">
                <div className="label text-sm">Profilbild</div>
                <input
                  type="file"
                  className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                  accept="image/*"
                  placeholder="Profilbild"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <div
                className="toggle-register"
                onClick={() => setShowRegister(false)}
              >
                <p className="text-xs my-2">Ich habe bereits einen Account</p>
              </div>

              <button
                type="submit "
                className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-offset"
              >
                {user.isFetching ? "fetching..." : "Abschicken"}
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="Login flex justify-content-center h-screen bg-slate-200">
        <div
          id="form"
          className="block bg-slate-50 p-6 rounded-x1 shadow-md shadow-slate-300 w-90"
        >
          <form action="" className="box" onSubmit={handleLoginClick}>
            <h2 className="text-blue-700 text-3x1 font-semibold my-4">Login</h2>
            <hr />

            <div className="input-group  w-1/2 mr-1">
              <div className="label">Email</div>
              <input
                type="email"
                className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group  w-1/2 mr-1">
              <div className="label">Password</div>
              <input
                type="password"
                className="h-8 w-full rounded-md border border-slate-300 text-sm p1-2 bg-transparent  outline-blue-600 shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div
              className="toggle-register"
              onClick={() => setShowRegister(true)}
            >
              <p className="text-xs my-2">Ich habe noch keinen Account</p>
            </div>

            <button
              type="submit"
              className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline-offset"
            >
              {user.isFetching ? "fetching..." : "Abschicken"}
            </button>

            {user.error && <div className="error">{user.error}</div>}
          </form>
        </div>
      </div>
    </Layout>
  );
}
