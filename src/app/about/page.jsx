import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Tin Tran. I am a full stack developer and jack of all trades as a hobby.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Daniel Gurczynski - Full Stack Developer & Designer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Hello and welcome to my portfolio website! I'm Daniel Gurczynski, 
              a passionate full-stack developer hailing from the sunny shores of 
              Daytona Beach, Florida. With over 17 years of experience in the 
              ever-evolving world of web development, UI design, and graphic design, 
              I've had the privilege of crafting digital experiences that not only 
              look stunning but also function seamlessly.
            </p> 

            <p>
              In the fast-paced realm of technology, I've honed my skills to adapt 
              to the latest trends and technologies. From coding elegant and 
              efficient websites to conceptualizing captivating UI designs, my 
              journey in the digital landscape has been both exciting and rewarding.
            </p> 

            <p>
              As you explore this portfolio, you'll dive into a world of projects 
              that reflect my dedication to innovation, user-centric design, and 
              technical prowess. From e-commerce platforms to sleek mobile apps, 
              I've had the opportunity to work on a diverse range of projects, 
              each with its unique challenges and solutions.
            </p> 

            <p>
              I believe that design and functionality go hand in hand, and I strive 
              to strike the perfect balance in every project I undertake. With a keen 
              eye for aesthetics and a robust understanding of development principles, 
              I create digital solutions that not only meet but exceed expectations.
            </p> 

            <p>
              Thank you for taking the time to visit my portfolio website. I invite 
              you to browse through my work, explore my skills, and get in touch if 
              you're interested in collaborating on your next digital endeavor. 
              Together, we can transform your ideas into visually stunning and highly 
              functional realities.
            </p> 

            <p>
              Let's embark on a journey of innovation and creativity. Welcome to my 
              world of web development and design!   
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:dpgdph@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              dpgdph@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
