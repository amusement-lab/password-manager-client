import {
  ActionFunctionArgs,
  Link,
  useLoaderData,
  Form,
  redirect,
} from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";
import {
  OpenAPI,
  Password,
  PasswordService,
  UpsertPassword,
} from "~~/api/generated";

export async function loader({ params }: ActionFunctionArgs) {
  const id = params.id;
  if (id) {
    OpenAPI.HEADERS = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const passwordDetail = await PasswordService.getPassword1(id);
    return { passwordDetail };
  }
  return null;
}

export async function action({ request, params }: ActionFunctionArgs) {
  OpenAPI.HEADERS = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const id = params.id;
  if (id) {
    const formData = await request.formData();
    const passwordData = Object.fromEntries(formData) as UpsertPassword;
    await PasswordService.putPassword(id, passwordData);
    return redirect("/");
  }
}

export default function Edit() {
  const { passwordDetail } = useLoaderData() as {
    passwordDetail: Password;
  };
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Edit Password
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 mb-2">
          <Form method="post">
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="My Website"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={passwordDetail.title}
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website URL
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      placeholder="www.website.com"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={passwordDetail.url}
                    />
                  </div>
                </div>

                <div className="sm:col-span-full">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username/Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="myemail@gmail.com"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={passwordDetail.username}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <div className="flex justify-between rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="border-0 bg-transparent w-full py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        defaultValue={passwordDetail.password}
                      />
                      <span className="flex select-none items-center pr-3 text-gray-500 sm:text-sm">
                        <EyeIcon className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-x-6">
              <Link to="/">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </Form>
        </div>
      </main>
    </>
  );
}
