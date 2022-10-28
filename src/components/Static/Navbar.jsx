import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import { useTheme } from "context/theme";
import useSWR from "hooks/useSWR";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import clquConfig from "../../../clqu.config";

export default function Navbar() {
    const router = useRouter();
    let [isOpen, setMenu] = useState(false);
    const { data: $socials } = useSWR('/api/socials');
    const socials = $socials?.data;

    const { isTheme, toggleTheme } = useTheme();

    const pages = [
        {
            link: '/',
            label: 'Home',
            icon: {
                default: 'fal fa-home',
                active: 'fas fa-home'
            },
            active: router.pathname === '/'
        },
        {
            link: '/about',
            label: 'About',
            icon: {
                default: 'fal fa-user',
                active: 'fas fa-user'
            },
            active: router.pathname === '/about'
        },
        {
            link: '/projects',
            label: 'Projects',
            icon: {
                default: 'fal fa-project-diagram',
                active: 'fas fa-project-diagram'
            },
            active: router.pathname === '/projects'
        },
        {
            link: '/posts',
            label: 'Posts',
            icon: {
                default: 'fal fa-newspaper',
                active: 'fas fa-newspaper'
            },
            active: router.pathname === '/posts'
        }
    ]

    const setIsOpen = (value) => {
        if (value === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        setMenu(value);
    }

    return <>
        <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <a className="text-2xl font-bold transition-all duration-200">{clquConfig.name}<span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">.</span></span></a>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <i onClick={() => setIsOpen(true)} className="fas fa-bars text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200" />
                    <div onClick={() => toggleTheme()} className="text-2xl text-zinc-400 hover:text-black hover:dark:text-white cursor-pointer bg-gray-500/5 w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200">
                        {isTheme === 'dark' ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
                    </div>
                    
                </div>
            </div>
        </div>

        <Transition
            show={isOpen}
            appear
        >
            <Transition.Child
                as={"div"}
                enter="transition-all duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed right-0 top-0 w-full h-full bg-black/50 z-[999]"
                onClick={() => setIsOpen(false)}
            />
            <Transition.Child
                enter="transition-all duration-500"
                enterFrom="opacity-0 translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition-all duration-200"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-full"
                className="fixed right-0 top-0 w-full lg:w-[30rem] h-full bg-[#f5f5f5] dark:bg-[#050505] lg:rounded-l-2xl p-6 z-[1000]"
            >
                <div style={{ zIndex: 999 }}>
                    <div className="flex justify-between w-full items-center">
                        <p className="text-2xl font-semibold">{clquConfig.name}</p>
                        <i onClick={() => setIsOpen(false)} className="fa fa-times w-12 h-12 hover:bg-gray-500/5 text-xl flex items-center justify-center transition-all duration-200 rounded-lg " />
                    </div>

                    <div className="mt-8 space-y-2">
                        <div className="flex items-center gap-2">
                            <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">Menu</p>
                            <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
                        </div>
                        {pages.map((page, index) => {
                            return <Link href={page.link} key={index}>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 text-xl transition-all duration-200 ${page.active ? 'bg-gray-500/5 text-black dark:text-white font-semibold' : 'hover:bg-gray-500/10 text-zinc-400 hover:text-black hover:dark:text-white'} px-4 py-3 rounded-lg`}
                                >
                                    <i className={(page.active ? page.icon.active : page.icon.default) + " w-6"} />
                                    <p>{page.label}</p>
                                </a>
                            </Link>
                        })}
                    </div>

                    <div className="mt-8 space-y-2">
                    <div className="flex items-center gap-2">
                    <p className="text-xs font-medium uppercase text-black/50 dark:text-white/10">Socials</p>
                            <div className="w-full h-0.5 bg-black/50 dark:bg-white/10" />
                        </div>
                        <div className="flex items-center gap-2">
                            {socials?.map((social, index) => {
                                return <a href={social.url} key={index} target="_blank" rel="noreferrer">
                                    <i className={`fab fa-${social.name} text-2xl text-zinc-400 hover:text-black hover:dark:text-white transition-all duration-200 w-12 h-12 flex justify-center items-center bg-gray-500/5 rounded-lg hover:bg-gray-500/10`} />
                                </a>
                            })}
                            <Link href="/contact">
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className="flex gap-2 px-4 items-center w-full h-12 bg-gray-500/5 rounded-lg hover:bg-gray-500/10 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
                                    <i className="fas fa-envelope text-2xl" />
                                    <p>Contact</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Transition.Child>
        </Transition>
    </>
}
