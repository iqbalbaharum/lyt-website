import logo from '@images/logo.jpg';
import img1 from '@images/IMG_2841.png'
import img2 from '@images/IMG_2843.jpg'
import img3 from '@images/IMG_2844.jpg'

const MainPage = () => {
    return (
        <div>
            <div className='flex-1 h-1/2 w-full flex justify-center items-center'>
            <div className='relative px-2 lg:px-4 py-4 lg:py-10'>
                <div className='flex'>
                    <p className='text-2xl lg:text-4xl mx-auto font-bold'>YEET OR BE YEETED</p>
                </div>
                <div className='mx-auto max-w-md'>
                <div className='divide-y divide-gray-200'>
                    {/* <div className='sm:space-y-3 md:space-y-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 text-center'> */}
                    <div className='text-base leading-6 text-gray-700 text-center'>
                        <img src={logo} alt='LE YEET Logo' />
                        <div className='p-4 bg-indigo-400'>
                            <p className='text-xl lg:text-4xl font-bold'>It’s pronounced as “LYT” not “LYT”</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="min-h-[50vh] w-full flex justify-center items-center">
                <div className="w-full text-center px-4 py-8 bg-green-300">
                    <h2 className="text-2xl lg:text-4xl font-bold text-green-900 mb-4">Backstory</h2>
                <div className="max-w-4xl mx-auto text-left lg:text-center">
                    <div className="divide-y divide-gray-200">
                    <div className="py-6 md:py-8 text-gray-700 space-y-4">
                        <p className="text-xl lg:text-4xl font-bold">
                        One day, the Le Yeet was formed. Since its too long to say 
                        <span className="bg-white px-2 mx-1">Le Yeet</span>, 
                        The abbreviation 
                        <span className="bg-yellow-300 px-2 mx-1 text-xl md:text-2xl lg:text-4xl">LYT</span> 
                        was given by the masses (or community, can't really remember, it happened a long time ago. Don't @ me). The end.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
            <div className="min-h-[50vh] w-full flex justify-center items-center p-4">
                <div className="w-full text-center px-4 py-8">
                    <h2 className="text-2xl lg:text-4xl font-bold py-4">Historically Accurate Images (legit)</h2>
                    <div className="mx-auto flex flex-col lg:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <img src={img1} alt="Image 1" className="lg:w-1/3 h-auto object-contain" />
                        <img src={img2} alt="Image 2" className="lg:w-1/3 h-auto object-contain" />
                        <img src={img3} alt="Image 3" className="lg:w-1/3 h-auto object-contain" />
                    </div>
                </div>
            </div>

            <div className="min-h-[50vh] w-full flex justify-center items-center text-gray-700 p-4">
                <div className="w-full text-center px-4 py-8">
                <h2 className="text-2xl lg:text-4xl font-bold py-8 text-white">Feedbacks</h2>
                <div className="mx-auto flex justify-center items-center flex-col lg:flex-row">
                    <div className="bg-gray-300 m-2 p-8 w-full flex-1">
                    <p className="text-2xl lg:text-4xl font-bold">Hey, $LYT is legit 🤙</p>
                    <p className="text-xl">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="text-lg font-italic">1903</p>
                    </div>
                    <div className="bg-gray-300 w-full m-2 p-8 flex-1">
                    <p className="text-2xl lg:text-4xl font-bold">Sheeeeeeeeeeesh</p>
                    <p className="text-xl">⭐️⭐️⭐️⭐️⭐️</p>
                    <p className="text-lg font-italic">2020</p>
                    </div>
                    <div className="bg-gray-300 w-full m-2 p-8 flex-1">
                    <p className="text-2xl lg:text-4xl font-bold">WTF is this shit ???</p>
                    <p className="text-xl ">⭐️</p>
                    <p className="text-lg font-italic">2005</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;