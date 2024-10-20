import R1 from '../assets/image/resume/r1.jpg'
import R2 from '../assets/image/resume/r2.jpg'
import R3 from '../assets/image/resume/r3.jpg'
import R4 from '../assets/image/resume/r4.jpg'

export default function Resume () {
    return (
        <div className='flex bg-zinc-900 m-20 ssm:flex-col lg:flex-row'>
            <div className='grid justify-items-center m-10'>
                <h1 className='text-xl text-white mt-6'>COLLABORATORS</h1>
            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={R1} alt="r1" className='absolute -left-4 w-28 h-28 rounded-full shadow-lg'/>
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate'>
                            Joshua Scott B. Peña
                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate'>
                            Assistant CEO
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={R2} alt="r2" className='absolute -left-4 w-28 h-28 rounded-full shadow-lg'/>
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate'>
                            Grazeus Santiago
                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate'>
                            Vice CEO
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={R3} alt="r3" className='absolute -left-4 w-28 h-28 rounded-full shadow-lg'/>
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate'>
                            Kirlian Pacibe
                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate'>
                            BOSS / CEO
                        </div>
                    </div>
                </div>

            </div>
            <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
                <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6">
                    <img src={R4} alt="r4" className='absolute -left-4 w-28 h-28 rounded-full shadow-lg'/>
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate'>
                            Sana Minatozaki
                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight truncate'>
                            Assistant Manager
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}