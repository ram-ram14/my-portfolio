import Head from 'next/head'; // Importing the 'Head' component from Next.js
import { BsFillMoonStarsFill } from 'react-icons/bs'; // Importing an icon from the 'react-icons/bs' library
import { 
  AiFillLinkedin, 
  AiFillGithub, 
  AiFillMediumCircle,
} from 'react-icons/ai'; // Importing icons from the 'react-icons/ai' library
import Image from 'next/image'; // Importing the 'Image' component from Next.js
import miles from '../public/miles-morales.jpg'; // Importing an image file
import code from "../public/code.png"; // Importing an image file
import design from "../public/design.png"; // Importing an image file
import product from "../public/product.png"; // Importing an image file
import web1 from "../public/web1.png"; // Importing an image file
import web2 from "../public/web2.png"; // Importing an image file
import web3 from "../public/web3.png"; // Importing an image file
import web4 from "../public/web4.png"; // Importing an image file
import web5 from "../public/web5.png"; // Importing an image file
import web6 from "../public/web6.png"; // Importing an image file
import {useState} from 'react'; // Importing the 'useState' hook from React

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); // Using the 'useState' hook to create a state variable 'darkMode' and a setter function 'setDarkMode'
  return (
    <div className={darkMode ? 'dark' : ''}> {/* A div with a dynamic className based on the value of 'darkMode' */}
      <Head> {/* The 'Head' component to update the document's head */}
        <title>Ramez Al-Siddiq Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40'> {/* The main content of the page */}
        <section className='min-h-screen'> {/* A section element */}
          <nav className='py-10 mb-12 flex justify-between dark:text-white'> {/* The navigation bar */}
            <h1 className='text-gray-800 text-xl font-sans dark:text-white'>my-portfolio</h1> {/* The heading */}
            <ul className='flex items-center'> {/* A list */}
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-gray-800 cursor-pointer text-2xl dark:text-white'/> {/* An icon that toggles dark mode */}
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" href='https://impossible-roundworm-e26.notion.site/Ramez-Al-Siddiq-89ad25c1627246ea93c30de78e53f6a2?pvs=4' target="_blank" rel="noopener noreferrer">
                  Resume
                </a> {/* A link to the resume */}
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'> {/* A container div */}
            <h2 className='text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Ramez Al-Siddiq</h2> {/* The name */}
            <h3 className='text-gray-800 text-2xl py-2 dark:text-white md:text-3xl'>Junior Software Engineer</h3> {/* The job title */}
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl'> {/* The description */}
              I deliver seamless <span className='text-teal-500'> digital experiences</span> for end-users leveraging user-centered design, extreme programming and lean product management methodologies.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'> {/* Social media icons */}
              <a href='https://medium.com/@ramez-sydney' target="_blank" rel="noopener noreferrer">
              <AiFillMediumCircle />
              </a>
              <a href='https://www.linkedin.com/in/ramezalsiddiq/' target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
              </a>
              <a href='https://github.com/ram-ram14' target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
              </a>
            </div>
            <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96'> {/* An image container */}
              <Image src={miles} layout="fill" objectFit='cover' /> {/* The image */}
            </div>
          </div>
        </section>

        <section> {/* Another section */}
          <div> {/* A div */}
            <h3 className='text-gray-800 text-3xl py-1 dark:text-white'>Experience</h3> {/* Section heading */}
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'> {/* Text content */}
              Since I've graduated from university, I've worked as an
              <span className='text-teal-500'> Associate Product Manager</span> working in cross-functional teams with Product Designers and Software Engineers to deliver products that are desirable, feasible and viable. And now, I've taken a leap of faith and entered the realm of <span className='text-teal-500'>software engineering</span>. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'> {/* Text content */}
              I offer a wide range of services from programming to consulting.
            </p>
          </div>
          <div className='lg:flex gap-10'> {/* A container div */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1'> {/* A div */}
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'> {/* An image container */}
                <Image src={code} layout="fill" objectFit="cover"/> {/* The image */}
              </div>
              <h3 className='text-gray-800 text-lg font-medium pt-8 pb-2'> {/* Heading */}
                Software Engineering
              </h3>
              <p className='text-gray-800 py-2'> {/* Text content */}
                Accelerate the delivery of software and modernise legacy apps. 
              </p>
              <h4 className='py-4 text-teal-600'>Practices</h4> {/* Subheading */}
              <p className='text-gray-800 py-1'>TDD</p> {/* Text content */}
              <p className='text-gray-800 py-1'>CI/CD</p> {/* Text content */}
              <p className='text-gray-800 py-1'>Pair-Programming</p> {/* Text content */}
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'> {/* A div */}
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'> {/* An image container */}
              <Image src={design} layout="fill" objectFit="cover" /> {/* The image */}
              </div>
              <h3 className='text-gray-800 text-lg font-medium pt-8 pb-2'> {/* Heading */}
                User-Centered Design
              </h3>
              <p className='text-gray-800 py-2'> {/* Text content */}
                Gather user insights and incorporate findings to eliminate the risk of building the wrong thing.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools I know</h4> {/* Subheading */}
              <p className='text-gray-800 py-1'>Figma</p> {/* Text content */}
              <p className='text-gray-800 py-1'>Sketch</p> {/* Text content */}
              <p className='text-gray-800 py-1'>Canva</p> {/* Text content */}
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'> {/* A div */}
              <div className='mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-20 md:w-20'> {/* An image container */}
              <Image src={product} layout="fill" objectFit="cover" /> {/* The image */}
              </div>
              <h3 className='text-gray-800 text-lg font-medium pt-8 pb-2'> {/* Heading */}
                Lean Product Management
              </h3>
              <p className='text-gray-800 py-2'> {/* Text content */}
                Deliver customer experiences that make an impact and drive business outcomes.
              </p>
              <h4 className='py-4 text-teal-600'>What it involves?</h4> {/* Subheading */}
              <p className='text-gray-800 py-1'>Aligning market needs & business priority</p> {/* Text content */}
              <p className='text-gray-800 py-1'>Reducing risk through frequent validation</p> {/* Text content */}
              <p className='text-gray-800 py-1'>Measuring impact & continuously improving</p> {/* Text content */}
            </div>
          </div>
        </section>
        
        <section className="py-10"> {/* Another section */}
          <div> {/* A div */}
            <h3 className='text-gray-800 text-3xl py-1 dark:text-white'>Portfolio</h3> {/* Section heading */}
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'> {/* Text content */}
              During my Software Engineering Immersive Bootcamp at <span className='text-teal-500'> General Assembly</span>, I worked on a variety of <span className='text-teal-500'> projects</span> which are featured below.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'> {/* A container div */}
            <div className='basis-1/3 flex-1'> {/* A div */}
              <Image src={web4} layout="responsive" objectFit="cover" className='rounded-lg shadow-lg' /> {/* The image */}
              <h3 className='text-gray-800 text-lg font-medium py-4 dark:text-white'>Little Scribbles</h3> {/* Project name */}
              <p className='text-gray-800 dark:text-white'>Built a blog with GraphQL and next.js.</p> {/* Project description */}
            </div>
            <div className='basis-1/3 flex-1'> {/* A div */}
              <Image src={web4} layout="responsive" objectFit="cover" className='rounded-lg shadow-lg' /> {/* The image */}
              <h3 className='text-gray-800 text-lg font-medium py-4 dark:text-white'>Delectable</h3> {/* Project name */}
              <p className='text-gray-800 dark:text-white'>Built for foodies.</p> {/* Project description */}
            </div>
            <div className='basis-1/3 flex-1'> {/* A div */}
              <Image src={web4} layout="responsive" objectFit="cover" className='rounded-lg shadow-lg' /> {/* The image */}
              <h3 className='text-gray-800 text-lg font-medium py-4 dark:text-white'>Formula Driver Academy</h3> {/* Project name */}
              <p className='text-gray-800 dark:text-white'>Side-project using Vanilla javaScript, HTML & CSS.</p> {/* Project description */}
            </div>
            <div className='basis-1/3 flex-1'> {/* A div */}
              <Image src={web4} layout="responsive" objectFit="cover" className='rounded-lg shadow-lg' /> {/* The image */}
              <h3 className=' text-gray-800 text-lg font-medium py-4 dark:text-white'>Dive Track</h3> {/* Project name */}
              <p className='text-gray-800 dark:text-white'>Built for scuba diving enthusiasts using React and Supabase.</p> {/* Project description */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
