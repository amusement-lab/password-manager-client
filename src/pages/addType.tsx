import { useState } from "react";
import { Link } from "react-router-dom";

import PasswordModal from "../components/passwordModal";
import ConfirmationModal from "../components/confirmationModal";

const newItemList = [
  {
    id: 1,
    name: "Password",
    pageLink: "/password/add",
    comingSoon: false,
    desc: "asdadsadsadasd",
    imageUrl:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/keys.png",
  },
  {
    id: 2,
    name: "Password",
    pageLink: "/password/add",
    comingSoon: true,
    desc: "asdadsadsadasd",
    imageUrl:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/keys.png",
  },
  {
    id: 3,
    name: "Password",
    pageLink: "/password/add",
    comingSoon: true,
    desc: "asdadsadsadasd",
    imageUrl:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/keys.png",
  },
  {
    id: 4,
    name: "Password",
    pageLink: "/password/add",
    comingSoon: true,
    desc: "asdadsadsadasd",
    imageUrl:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/keys.png",
  },
];

export default function AddType() {
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <header className="bg-white shadow">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Create New Item</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6">
          <div className="px-4 sm:px-6 lg:px-8 mb-2">
            <ul role="list" className="flex flex-wrap divide-y divide-gray-100">
              {newItemList.map((newItem) => (
                <Link className="flex-initial w-1/2" to={newItem.pageLink}>
                  <li
                    key={newItem.id}
                    className="py-5 px-2 border-2 border-gray-200 hover:bg-gray-100 rounded-md"
                  >
                    <div className="flex gap-x-4">
                      <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={newItem.imageUrl}
                        alt=""
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {newItem.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {newItem.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
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
