import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function About() {
    const { page } = usePage();
  const { data: $skills } = useSWR('/api/skills');
  const skills = $skills?.data;

  const { data: $repositories } = useSWR('/api/repos');
  const repositories = $repositories?.data;

  const { data: $projects } = useSWR('/api/projects');
  const projects = $projects?.data;
  
  const { data: $posts } = useSWR('/api/posts');
  const posts = $posts?.data;
    return <>
      
      <div className="h-[40rem] flex flex-col justify-center items-center mb-72">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-center">Hi there, Im <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">{clquConfig.name}</span></span>.</h1>
      <p className="mx-auto max-w-4xl font-display text-2xl text-gray-500/50 text-center">
        A full-stack developer
      </p>
      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Technologies</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">{skills?.length}+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Years of Experience</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">3+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Completed Projects</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">60+</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-primary uppercase">Repositories</span>
          <p className="text-gray-500 dark:text-gray-300 font-semibold text-xl">{repositories?.length}+</p>
        </div>
      </div>
    </div>
      
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                <div>
                    <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                    <p className="text-xl mt-1">
                        Hello, Im deax. I am 15 years old.
                        I am a 2nd year high school student, I have been dealing with software for about 4 years.
                        I started with JS, developed with Minecraft Plugins and made my biggest improvement with the latest Discord bot.
                        Since then, software has been more of a hobby for me than a dream, I spent days developing my hobby, I tried to improve my software knowledge for at least 10 hours a day in 1 year, finally here I am.
                        Thank you for reading <i className="fal fa-heart" />
                    </p>
                    
                </div>
                <div className="relative flex-shrink-0">
                    <img src="https://cdn.discordapp.com/avatars/439450931579453440/e19a1b849c43b451a2dbb130a6683dc6.jpg" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                    <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                </div>
            </div>
        </div>

    </>
}
