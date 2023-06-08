import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillMediumCircle
} from 'react-icons/ai';
import Image from 'next/image';
import miles from '../public/miles-morales.jpg';
import code from "../public/code.png";
import design from "../public/design.png";
import product from "../public/product.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {useState} from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Ramez Al-Siddiq Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-sans'>my-portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href='https://impossible-roundworm-e26.notion.site/Ramez-Al-Siddiq-89ad25c1627246ea93c30de78e53f6a2?pvs=4'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Ramez Al-Siddiq</h2>
            <h3 className='text-2xl py-2 dark:text-white md:text-3xl'>Junior Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'>
              I deliver seamless <span className='text-teal-500'> digital experiences</span> for end-users leveraging user-centred design, extreme programming and lean product management methodologies.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://medium.com/@ramez-sydney'>
              <AiFillMediumCircle />
              </a>
              <a href='https://www.linkedin.com/in/ramezalsiddiq/'>
              <AiFillLinkedin />
              </a>
              <a href='https://github.com/ram-ram14'>
              <AiFillGithub />
              </a>
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'>
              <Image src={miles} layout="fill" objectFit='cover' />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Experience</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since I've graduated from university, I've worked as an
              <span className='text-teal-500'> Associate Product Manager</span> working in cross-functional teams with Product Designers and Software Engineers to deliver products that are desirable, feasible and viable. And now, I've taken a leap of faith and entered the realm of <span className='text-teal-500'>software engineering</span>. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              I offer a wide range of services from programming to consulting.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'>
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'>
                <Image src={code} layout="fill" objectFit="cover"/>
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Software Engineering
              </h3>
              <p className='py-2'>
                Accelerate the delivery of software and modernise legacy apps. 
              </p>
              <h4 className='py-4 text-teal-600'>Practices</h4>
              <p className='text-gray-800 py-1'>TDD</p>
              <p className='text-gray-800 py-1'>CI/CD</p>
              <p className='text-gray-800 py-1'>Pair-Programming</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'>
              <Image src={design} layout="fill" objectFit="cover" />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                User-Centred Design
              </h3>
              <p className='py-2'>
                Gather user insights and incorporate findings to eliminate the risk of building the wrong thing.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools I know</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Sketch</p>
              <p className='text-gray-800 py-1'>Canva</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'>
              <Image src={product} layout="fill" objectFit="cover" />
              </div>
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Lean Product Management
              </h3>
              <p className='py-2'>
                Deliver customer experiences that make an impact and drive business outcomes.
              </p>
              <h4 className='py-4 text-teal-600'>What it involves?</h4>
              <p className='text-gray-800 py-1'>Aligning market needs & business priority</p>
              <p className='text-gray-800 py-1'>Reducing risk through frequent validation</p>
              <p className='text-gray-800 py-1'>Measuring impact & continuously improving</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              During my Software Engineering Immersive Bootcamp at <span className='text-teal-500'> General Assembly</span>, I worked on a variety of <span className='text-teal-500'> projects</span> which are featured below.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}