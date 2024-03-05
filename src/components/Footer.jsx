

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
                
                <div className="mt-12 p-4">
    <div className="">Quick Links</div>
    <div className="mt-6">
        <a href="#" className="block text-white hover:text-gray-300">Service</a>
        <a href="#" className="block text-white hover:text-gray-300">Portfolio</a>
        <a href="#" className="block text-white hover:text-gray-300">Pricing</a>
        <a href="#" className="block text-white hover:text-gray-300">Contact Us</a>
        <a href="#" className="block text-white hover:text-gray-300">About Us</a>
    </div>
</div>

<div className="mt-12 p-4">
    <div className="font-bold text-lg mb-4">Contact Us</div>
    <div className="flex items-center mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p>example@example.com</p>
    </div>
    <div className="flex items-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p>3rd Cross Rd, Electronics City Phase 1, Electronic City, Bengaluru Karnataka 560100</p>
    </div>
    <div className="flex items-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <p>123-456-7890</p>
    </div>
</div>

            </footer>
        </>
    )
}