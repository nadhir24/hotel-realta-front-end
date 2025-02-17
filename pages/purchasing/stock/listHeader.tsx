import { Menu, Transition } from "@headlessui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Folder, Magnifier, Pencil, Plus, Trash } from "@/components/icons"
import React, { Fragment } from "react"
import { useRouter } from "next/router"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return [
    {
      title: "Stock Name",
      render: (data: any) => {
        return <span>{data.stock_name}</span>
      },
    },
    {
      title: "Re-Order Point",
      render: (data: any) => {
        return <span>{data.stock_reorder_point}</span>
      },
    },

    {
      title: "QTY",
      render: (data: any) => {
        return <span>{data.stock_quantity}</span>
      },
    },

    {
      title: "Used",
      render: (data: any) => {
        return <span>{data.stock_used}</span>
      },
    },

    {
      title: "Scrap",
      render: (data: any) => {
        return <span>{data.stock_scrap}</span>
      },
    },

    {
      title: "Size",
      render: (data: any) => {
        return <span>{data.stock_size}</span>
      },
    },

    {
      title: "Color",
      render: (data: any) => {
        return <span>{data.stock_color}</span>
      },
    },

    {
      title: "Action",
      render: (data: any) => {
        return (
          <div className="w-full text-left">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <BsThreeDotsVertical/>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => setIsOpen(data.vendor_entity_id)}
                        >
                          {active ? (
                            <div className="pr-3"><Pencil stroke="#FFF" width="24"/></div>
                          ) : (
                            <div className="pr-3"><Pencil/></div>
                          )}
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          // onClick={() => {
                          //   router.push("/purchasing/vendor/product")
                          // }}
                        >
                          {active ? (
                            <div className="pr-3"><Folder width="24"/></div>
                          ) : (
                            <div className="pr-3"><Folder stroke="#667085" width="18"/></div>
                          )}
                          Upload Photo
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => setIsDelete(data.vendor_entity_id)}
                        >
                          {active ? ( 
                            <div className="pr-3"><Trash stroke="#FFF"/></div>
                          ) : (
                            <div className="pr-3"><Trash/></div>
                          )}
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          // onClick={() => {
                          //   router.push("/purchasing/vendor/product")
                          // }}
                        >
                          {active ? (
                            <div className="pr-3"><Magnifier width="24"/></div>
                          ) : (
                            <div className="pr-3"><Magnifier stroke="#667085" width="18"/></div>
                          )}
                          Detail Info Stock
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )
      },
    },
  ]
}
