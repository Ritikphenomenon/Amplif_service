

export const Footer = () => {
    return (
        <>
            <footer className="grid grid-cols-3 h-64 bg-black text-white">
                <div className=" flex flex-col items-center justify-around">
                    <div className="relative h-32 w-32">
                    <img src="./src/assets/amplif_logo.png"  className="absolute min-w-full h-full object-contain" alt="logo" />
                    </div>


                    <div className="flex flex-col gap-2 ">
                        <h1>Follow us on</h1>
                        <div className="flex gap-2">
                            <div className="bg-yellow-400 w-5 h-5"></div>
                            <div className="bg-yellow-400 w-5 h-5"></div>
                            <div className="bg-yellow-400 w-5 h-5"></div>
                            <div className="bg-yellow-400 w-5 h-5"></div>
                        </div>
                    </div>

                </div>
                <div className="bg-blue-800 ">

                </div>
                <div className="bg-slate-800">

                </div>
            </footer>
        </>
    )
}