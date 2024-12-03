
export const HideButton = () => {
    return (
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center ">
                    <svg className="bg-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div className="rounded-sm w-9 h-9 bg-gray-200"></div>
            </div>
    )
}