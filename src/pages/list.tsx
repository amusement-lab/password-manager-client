import { EyeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const passwords = [
  {
    id: 1,
    title: "www.facebook.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 2,
    title: "mail.google.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 3,
    title: "www.twitter.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 4,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
];

export default function Example() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Password List
          </h1>
          <button
            type="submit"
            className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusCircleIcon className="block h-5 w-5" />
          </button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6">
          <div className="px-4 sm:px-6 lg:px-8 mb-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Search"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <ul role="list" className="divide-y divide-gray-100">
            {passwords.map((password) => (
              <li
                key={password.id}
                className="flex justify-between gap-x-6 py-5 px-4 sm:px-6 lg:px-8 hover:bg-gray-100 rounded-md"
              >
                <div className="flex gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={`https://logo.clearbit.com/${password.title}`}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {password.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {password.username}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-900">
                    <button
                      type="submit"
                      className="rounded-md p-2 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <EyeIcon className="block h-5 w-5" />
                    </button>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
