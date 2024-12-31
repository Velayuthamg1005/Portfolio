import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: `Web developer`,
        social: {
            Github: 'https://github.com/Velayuthamg1005',
            linkedin: 'https://www.linkedin.com/in/velayutham-g-773646277/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-40 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font py-10'>Hii,This is <br/> <span className='text-black'>G</span> Velayutham
                <p className='text-2xl py-5'>{config.subtitle}</p>
            </h1>
            <div className='flex py-2'>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
