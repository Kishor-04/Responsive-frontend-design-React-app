import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const DropdownButton = () => {
    const [Down, setDown] = useState(true);

    function dropdown() {
        setDown(!Down);
    }

    return (
        <div className="">
            <div className="">
                {!Down ? (<button onClick={dropdown} className="translate-x-90 text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </button>) : (<button onClick={dropdown} className=" text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>)
                }
            </div>
            <div className="absolute">
                <div className="pl-100">
                    {!Down ? <div className=""><Dropdown /></div> : null}
                </div>
            </div>

        </div>
    )
}