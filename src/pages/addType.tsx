import { Link } from "react-router-dom";

import keySvg from "../assets/key.svg";
import cardSvg from "../assets/card.svg";
import docSvg from "../assets/doc.svg";
import noteSvg from "../assets/note.svg";

const newItemList = [
  {
    id: 1,
    name: "Password",
    pageLink: "/password/add",
    comingSoon: false,
    desc: "Save for your account and credential data",
    imageUrl: keySvg,
  },
  {
    id: 2,
    name: "Card",
    pageLink: "#",
    comingSoon: true,
    desc: "Coming soon",
    imageUrl: cardSvg,
  },
  {
    id: 3,
    name: "Document",
    pageLink: "#",
    comingSoon: true,
    desc: "Coming soon",
    imageUrl: docSvg,
  },
  {
    id: 4,
    name: "Other Note",
    pageLink: "#",
    comingSoon: true,
    desc: "Coming soon",
    imageUrl: noteSvg,
  },
];

export default function AddType() {
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
                <Link
                  key={newItem.id}
                  className="flex-initial w-1/2"
                  to={newItem.pageLink}
                >
                  <li className="py-5 px-2 border-2 border-gray-200 hover:bg-gray-100 rounded-md">
                    <div className="flex gap-x-4">
                      <img
                        className="h-12 w-12 p-2 flex-none rounded-full bg-indigo-600"
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
      </main>
    </>
  );
}
