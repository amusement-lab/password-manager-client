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

export async function loader() {
  OpenAPI.HEADERS = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const passwords = await PasswordService.getPassword();
  return { passwords };
}

export default function List() {
  const [showConfirm, setShowConfirm] = useState(false);

  const { passwords } = useLoaderData() as { passwords: GetPasswords };

  const [passwordId, setPasswordId] = useState("");
  const openPasswordDetail = (id: string) => {
    setPasswordId(id);
  };

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

              {passwords.length === 0 ? (
                <p className="mt-3 text-slate-400">
                  There are currently no passwords stored in the vault
                </p>
              ) : (
                <ul role="list" className="divide-y divide-gray-100">
                  {passwords.map((password) => (
                    <li
                      key={password.id}
                      className="flex justify-between gap-x-6 py-5 px-2 border-2 border-gray-200 hover:bg-gray-100 rounded-md"
                    >
                      <div className="flex gap-x-4">
                        <img
                          className="h-12 w-12 flex-none rounded-full bg-gray-50"
                          src={`https://logo.clearbit.com/${password.url}`}
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
                          onClick={() => openPasswordDetail(password.id)}
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
                        <Link to={`/password/edit/${password.id}`}>
                          <div className="rounded-md p-1 text-gray-500  hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <PencilSquareIcon className="block h-5 w-5" />
                          </div>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-7">
              <p className="text-xl font-bold tracking-tight text-gray-900">
                Card
              </p>
              <p className="mt-3 text-slate-400">Coming Soon</p>
            </div>
          </div>
        </div>
        <PasswordModal
          show={!!passwordId}
          id={passwordId}
          closeModal={() => setPasswordId("")}
        />
        <ConfirmationModal
          show={showConfirm}
          onClose={() => setShowConfirm(false)}
        />
      </main>
    </>
  );
}
