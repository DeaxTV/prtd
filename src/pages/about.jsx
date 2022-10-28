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

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                <div>
                    <h1 className="text-4xl font-bold">Who Am <span className="relative whitespace-nowrap text-primary">I</span>?</h1>
                    <p className="text-xl mt-1">
                        Hello, Im deax. I am 15 years old.
                        I am a 2nd year high school student, I have been dealing with software for about 4 years.
                        I started with JS, developed with Minecraft Plugins and made my biggest improvement with the latest Discord bot.
                        Since then, software has been more of a hobby for me than a dream, I spent days developing my hobby, I tried to improve my software knowledge for at least 10 hours a day in 1 year, finally here I am.
                        Thank you for reading <i className="fal fa-heart text-blue-400" />
                    </p>
                    
                </div>
                <div className="relative flex-shrink-0">
                    <img src="https://cdn.discordapp.com/avatars/439450931579453440/e19a1b849c43b451a2dbb130a6683dc6.webp?size=512" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                    <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                </div>
            </div>
        </div>

    </>
}
