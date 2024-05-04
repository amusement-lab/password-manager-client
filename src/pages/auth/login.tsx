import {
  useActionData,
  redirect,
  Form,
  Link,
  ActionFunctionArgs,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import { KeyIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Swal from "sweetalert2";

import { LoginUser, UserService } from "~~/api/generated";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();
    const loginData = Object.fromEntries(formData) as unknown as LoginUser;

    const response = await UserService.postLogin(loginData);

    if (response) {
      localStorage.setItem("token", response.token);
      return redirect("/");
    }
  } catch (err) {
    console.log(err.body);

    return Swal.fire({
      title: "Error Login",
      text: err.body.message,
      confirmButtonText: "Ok",
    });
  }
}

export default function Login() {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const err: any = useActionData();

  if (localStorage.getItem("token")) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="h-[100vh]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <KeyIcon className="h-10 w-10 mx-auto text-indigo-600" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your vault
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form className="space-y-6" method="post">
              {/* {err && err.response._data ? (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 mb-4 px-4 py-4 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">
                    {err.response._data.message}
                  </span>
                </div>
              ) : (
                ""
              )} */}

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Email" // In this client, email is username
                required
                className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              <div className="mt-2">
                <div className="flex justify-between rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    id="key"
                    name="key"
                    type={passwordVisibility ? "text" : "password"}
                    placeholder="Key"
                    required
                    className="border-0 bg-transparent w-full py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  <span
                    className="flex select-none items-center cursor-pointer pr-3 text-gray-500 sm:text-sm"
                    onClick={() => setPasswordVisibility(!passwordVisibility)}
                  >
                    {passwordVisibility ? (
                      <EyeSlashIcon className="w-5 h-5" />
                    ) : (
                      <EyeIcon className="w-5 h-5" />
                    )}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </Form>

            <Link to="/register">
              <p className="mt-5 text-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Register
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
