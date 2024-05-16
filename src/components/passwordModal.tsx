import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  DocumentDuplicateIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import { OpenAPI, PasswordService } from "~~/api/generated";
import Swal from "sweetalert2";

interface ModalProps {
  show: boolean;
  id: string;
  closeModal: () => void;
}

async function loader(id: string) {
  OpenAPI.HEADERS = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const password = await PasswordService.getPassword1(id);
  return { password };
}

export default function Modal({ show = false, id, closeModal }: ModalProps) {
  const cancelButtonRef = useRef(null);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const initPasswordDetailData = {
    title: "",
    username: "",
    password: "",
    url: "",
  };

  const [passwordDetailData, setPasswordDetailData] = useState<{
    title: string;
    username: string;
    password: string;
    url: string;
  }>(initPasswordDetailData);

  useEffect(() => {
    // If new password data loaded, clear the field before show new password detail
    setPasswordDetailData(initPasswordDetailData);
    if (id) {
      loader(id).then((data) => setPasswordDetailData(data.password));
    }
  }, [id]);

  useEffect(() => {
    // If modal closed, hide password visibility
    setPasswordVisibility(false);
  }, [show]);

  const copyToClipboard = async (textToCopy: string) => {
    await navigator.clipboard.writeText(textToCopy);
    Swal.fire({
      position: "top",
      title: "Text copied to clipboard",
      icon: "success",
      showConfirmButton: false,
      timer: 700,
    });
  };

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 pb-14 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <img
                        className="sm-h-12 sm-w-12 flex-none rounded-full bg-gray-50"
                        src={`https://logo.clearbit.com/${passwordDetailData.url}`}
                        alt=""
                      />
                    </div>
                    <div className="w-full mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {passwordDetailData.title}
                      </Dialog.Title>

                      <div className="flex justify-between mt-5 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          value={passwordDetailData.username}
                          readOnly={true}
                          className="border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />
                        <span className="flex mr-3 select-none items-center text-gray-500 sm:text-sm">
                          <DocumentDuplicateIcon
                            onClick={() =>
                              copyToClipboard(passwordDetailData.username)
                            }
                            className="w-5 h-5 cursor-pointer"
                          />
                        </span>
                      </div>

                      <div className="flex justify-between mt-2 mb-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                        <input
                          type={passwordVisibility ? "text" : "password"}
                          name="password"
                          id="password"
                          value={passwordDetailData.password}
                          readOnly={true}
                          className="w-full border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        />

                        <span className="flex mr-3 select-none items-center text-gray-500 sm:text-sm">
                          <span
                            onClick={() =>
                              setPasswordVisibility(!passwordVisibility)
                            }
                          >
                            {passwordVisibility ? (
                              <EyeSlashIcon className="w-5 h-5 mr-2 cursor-pointer" />
                            ) : (
                              <EyeIcon className="w-5 h-5 mr-2 cursor-pointer" />
                            )}
                          </span>
                          <DocumentDuplicateIcon
                            onClick={() =>
                              copyToClipboard(passwordDetailData.password)
                            }
                            className="w-5 h-5 cursor-pointer"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={closeModal}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
