import Proj1Img from '../assets/image/projects/proj1.jpg'
import Proj2Img from '../assets/image/projects/proj2.jpg'
import Proj3Img from '../assets/image/projects/proj3.jpg'
import Proj4Img from '../assets/image/projects/proj4.jpg'



export default function Projects () {
    return (
        <>
            <div className='bg-zinc-900 m-20 max-w-full'>
                <div className='grid justify-items-center m-10'>
                    <h1 className='text-3xl text-white mt-10'>Projects</h1>
                </div>
                <div>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse h-fit'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-zinc-800 font-semibold'>
                                        AGLEB
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod libero et scelerisque elementum.

                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Proj1Img} alt="Agleb" className='w-40 h-80'/> 
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse h-fit'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Proj2Img} alt="Super Tic-Tac-Toe" className='w-40 h-80'/>
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-zinc-800 font-semibold'>
                                        Super Tic-Tac-Toe
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod libero et scelerisque elementum.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='grid grid-cols-2 gap-4 p-5'>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse h-fit'>
                            <div className='md:flex'>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-zinc-800 font-semibold'>
                                        Project / System 3
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod libero et scelerisque elementum.

                                    </p>
                                </div>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Proj3Img} alt="System3" className='w-40 h-80'/>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse h-fit'>
                            <div className='md:flex'>
                                <div className='md:shrink-0 p-5'>
                                    <img src={Proj4Img} alt="System4" className='w-40 h-80'/>
                                </div>
                                <div className='p-8'>
                                    <div className='uppercase tracking-wide text-sm to-zinc-800 font-semibold'>
                                        Project / System 4
                                    </div>
                                    <a href="#">Subheading</a>
                                    <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod libero et scelerisque elementum.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
           
        </>
    )
}