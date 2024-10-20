import { BsLinkedin, BsGithub } from "react-icons/bs"
import HeroPic from '../assets/image/SN3838.jpg'

const hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">I'm</p>
                <h1 className="text-6xl">Sana Minatozaki</h1>
                <hr />
                <p className="mt-10 text-xl text-slate-300 font-sans">
                    
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod libero et scelerisque elementum. Phasellus rutrum sed nibh non imperdiet. Proin vestibulum commodo felis, id tristique est ultricies at. In rhoncus condimentum imperdiet. Curabitur finibus est a mi lobortis fermentum. Aenean dapibus, mauris vitae commodo sodales, mauris mi facilisis lectus, id congue ex metus in mauris. Praesent ut risus justo. Maecenas sed gravida enim, nec auctor lorem. Morbi vestibulum porta ante sodales commodo. Praesent non nisl id est venenatis hendrerit sit amet eget elit. Fusce molestie metus vitae odio vulputate rhoncus. Nam pharetra eget turpis in mollis.
                

                </p>
            </div>
            <div className='w-1/3 items-center ssm:w-fit'>
                <img src={HeroPic} alt="SANA" width={250} height={250} className="rounded-full border-8 border-white"/>

            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About Me</p>
                <p>Sana eopsin sana mana Shy, shy, shy!
                    <br/>
                Oppa-ya, unnie-ya sana eopsi mon sana!</p>
                <button className="bg-zinc-700 text-white px-10 py-2 my-3 rounded-full hover:bg-zinc-900">
                    Show more..
                </button>
                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <BsLinkedin size={40} className="border-4 hover:border-zinc-900 rounded-full"/>
                    <BsGithub size={40} className="border-4 hover:border-zinc-900 rounded-full"/>
                </div>
            </div>
        </section>
    )
}

export default hero