import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  EyeIcon,
  PlusCircleIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import PasswordModal from "../components/passwordModal";
import ConfirmationModal from "../components/confirmationModal";
import { GetPasswords, OpenAPI, PasswordService } from "~~/api/generated";

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
  {
    id: 5,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 6,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 7,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 8,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 9,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 10,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
  {
    id: 11,
    title: "www.hoyoverse.com",
    username: "dipadana@gmail.com",
  },
];

export async function loader() {
  OpenAPI.HEADERS = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdTE1djI1ZzAwMDAxNGlyODEybHgyOWQiLCJ1c2VybmFtZSI6ImNyZXplbnRpYSIsImhhc2hlZEtleSI6IjE1ZTJiMGQzYzMzODkxZWJiMGYxZWY2MDllYzQxOTQyIiwiaWF0IjoxNzExOTcyNTY0fQ.HtQ2dWBNFlWKbr5YT1UMHHQNgaiVzh1aAyZOE2Ph7uw`,
  };
  const vault = await PasswordService.getPassword();
  return { vault };
}

export default function List() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { vault } = useLoaderData() as { vault: GetPasswords[] };

  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Vault List</h1>
          <Link
            to="/add-type"
            className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PlusCircleIcon className="block h-5 w-5" />
          </Link>
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

            <div className="mt-7">
              <p className="text-xl font-bold tracking-tight text-gray-900">
                Password
              </p>
              <ul role="list" className="divide-y divide-gray-100">
                <p>{vault[0].title}</p>
                {passwords.map((password) => (
                  <li
                    key={password.id}
                    className="flex justify-between gap-x-6 py-5 px-2 border-2 border-gray-200 hover:bg-gray-100 rounded-md"
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
                      <button
                        onClick={() => setShow(true)}
                        type="submit"
                        className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <EyeIcon className="block h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setShowConfirm(true)}
                        type="submit"
                        className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <TrashIcon className="block h-5 w-5" />
                      </button>
                      <Link to="/password/edit/1">
                        <div className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <PencilSquareIcon className="block h-5 w-5" />
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <p className="text-xl font-bold tracking-tight text-gray-900">
                Password
              </p>
              <ul role="list" className="divide-y divide-gray-100">
                {passwords.map((password) => (
                  <li
                    key={password.id}
                    className="flex justify-between gap-x-6 py-5 px-2 border-2 border-gray-200 hover:bg-gray-100 rounded-md"
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
                      <button
                        onClick={() => setShow(true)}
                        type="submit"
                        className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <EyeIcon className="block h-5 w-5" />
                      </button>
                      <button
                        onClick={() => setShowConfirm(true)}
                        type="submit"
                        className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <TrashIcon className="block h-5 w-5" />
                      </button>
                      <Link to="/edit/1">
                        <div className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <PencilSquareIcon className="block h-5 w-5" />
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <PasswordModal show={show} closeModal={() => setShow(false)} />
        <ConfirmationModal
          show={showConfirm}
          closeModal={() => setShowConfirm(false)}
        />
      </main>
    </>
  );
}
