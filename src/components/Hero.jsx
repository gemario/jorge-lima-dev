import profile from '../assets/profile.jpeg';
import { HERO_CONTENT } from '../constants';
import { RiDownload2Fill } from 'react-icons/ri';

export function Hero() {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img src={profile} className='border border-stone-900 rounded-3xl' />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <h2 className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
              Jorge Lima
            </h2>
            <span 
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight 
              text-transparent'>
                Front-end Developer
            </span>
            <p className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
              {HERO_CONTENT}
            </p>
            <a href="/resume.pdf" 
               target='_blank'
               rel='noopener noreferrer'
               download
               className='bg-white rounded-2xl p-4 font-bold text-base text-stone-800 mb-10 flex items-center gap-2
               hover:opacity-85'>
                Download Resume
                <RiDownload2Fill className='size-5'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}