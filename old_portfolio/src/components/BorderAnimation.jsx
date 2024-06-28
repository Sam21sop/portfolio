import React from 'react'

const BorderAnimation = () => {
    return (
        <>
            <div className="mx-auto flex w-full max-w-lg items-center justify-center">
                <div className="relative z-10 flex cursor-pointer items-center overflow-hidden rounded-[35px] border-none p-[3px]">
                    <div className=" relative z-20 flex w-full rounded-[30px] p-2">
                        <div className='w-[500px] h-[508px] rounded-[35px] flex place-content-center items-center shadow-[inset_0px_0px_14px_15px_#00000024] '>
                            <div className="animate-rotate absolute inset-0 w-full bg-[conic-gradient(#e9520e_60deg,transparent_180deg)]"></div>
                            <img
                                src="https://w0.peakpx.com/wallpaper/107/46/HD-wallpaper-best-pose-for-profile-for-men-profile-pose-men-best-glasses.jpg"
                                alt=""
                                className='w-full h-full rounded-[35px] absolute'
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BorderAnimation