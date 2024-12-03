import { HideButton } from "./HiddenButton"
import { Sidebar } from "./Sidebar"
import { useState } from "react"
import { DropdownButton } from "./DropdownButton"

export const Navbar = () => {

    const [Show, setShow] = useState(true);

    const ShowSidebar = () => {
        setShow(!Show);
        console.log(Show);
    }

    return (<>
        <div className={`absolute z-10 ${!Show ? "lg:hidden" : "flex"}`} >
            {!Show ? <Sidebar /> : null}
        </div>
        <div className="flex justify-between w-full list-none shadow-sm">
            <ul className="flex p-4 ">
                <li className="pr-2  lg:hidden relative">
                    <button onClick={ShowSidebar}><HideButton /></button>
                </li>
                <li className="pr-3 text-2xl font-semibold">Payouts</li>
                <div className="hidden md:flex">
                    <div className="flex py-2 ">
                        <li className="pr-2 pt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </li>
                        <li>How it works</li>
                    </div>
                </div>

            </ul>
            <ul>
                <li className=" hidden sm:flex">
                    <SearchBar />
                </li>
            </ul>
            <ul>
                <li className=" hidden sm:flex">
                    <UnusedButtons />
                </li>
            </ul>

            <ul>
                <li className="p-[20px] pr-[400px] sm:hidden">
                    <DropdownButton></DropdownButton>
                </li>
            </ul>

        </div>
    </>
    )
}


export const SearchBar = () => {
    return (
        <div className="p-4 w-[300px] ">
            <div className="items-center flex rounded-[5px] bg-gray-100 p-2.5 w-full max-w-md ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 3.75a7.5 7.5 0 1 1-5.303 12.803A7.5 7.5 0 0 1 11.25 3.75zm0 0a7.5 7.5 0 0 1 0 15 7.5 7.5 0 1 1 0-15zm9.708 14.542l-2.853-2.854"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search features, tutorials, etc."
                    className="ml-2 bg-gray-100 outline-none w-full text-sm text-gray-600 "
                />
            </div>
        </div>
    )
}

export const UnusedButtons = () => {
    return (
        <div className="p-4 flex">
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <div className="rounded-full w-10 h-10 bg-gray-200"></div>
            </div>
            <div className="relative ml-3 hidden sm:flex">
                <div className="absolute inset-0 flex items-center justify-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                    </svg>

                </div>
                <div className="rounded-full w-10 h-10 bg-gray-200"></div>
            </div>
        </div>
    )
} 