import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useState } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";
import Input from 'components/Global/Input'
import axios from 'axios'

export default function About() {
    const { page } = usePage();
    let [error, setError] = useState(false);
    let [success, setSuccess] = useState(false);
    let [loading, setLoading] = useState(false);
  const { data: $skills } = useSWR('/api/skills');
  const skills = $skills?.data;

  const { data: $repositories } = useSWR('/api/repos');
  const repositories = $repositories?.data;

  const { data: $projects } = useSWR('/api/projects');
  const projects = $projects?.data;
  
  const { data: $posts } = useSWR('/api/posts');
  const posts = $posts?.data;
    const Submit = async (e) => {
        e.preventDefault();
        const form = e.target;

        setLoading(true);

        setTimeout(() => {
            axios.post('/api/contact', {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            }).then(res => {
                setLoading(false);
                let data = res.data;
                if (data.success) {
                    setSuccess(true);
                    let subject = data.data.subject;
                    let body = data.data.body;

                    window.open(`mailto:${clquConfig.email}?subject=${subject}&body=${body}`, '_blank', 'noopener,noreferrer')
                } else {
                    setSuccess(false);
                    setError(data.message);
                }
            }).catch(err => {
                setLoading(false);
                let data = err.response.data;
                setSuccess(false);
                setError(data.message);
            })
        }, 1000);
    }

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
            <div className="flex justify-between w-full h-full py-24 gap-24">
                <div className="w-full">
                    <form onSubmit={Submit}>
                        <h1 className="text-4xl font-bold">Contact</h1>
                        <p className="text-sm mt-1 text-gray-500">
                            <i className="fa fa-envelope" /> {clquConfig.email}
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <Input name="name" placeholder="Username" startsWith={<i className="fa fa-user" />} />
                            <Input name="email" placeholder="Email" startsWith={<i className="fa fa-envelope" />} />
                            <Input name="message" wrapper="textarea" placeholder="Message" startsWith={<i className="fa fa-comment" />} />
                        </div>

                        <div className="flex items-center gap-4 justify-between mt-4">
                            {!success && !error && <div />}
                            {!success && error && <p className="bg-red-500/5 px-4 py-2 rounded-lg shadow-xl text-red-500 italic flex items-center gap-2">
                                <i className="fa fa-exclamation-circle" />
                                {error}
                            </p>}
                            {success && <p className="bg-green-500/5 px-4 py-2 rounded-lg shadow-xl text-green-500 italic flex items-center gap-2">
                                <i className="fa fa-check-circle" />
                                Message sent successfully
                                </p>}

                            <Button disabled={loading} className={`flex items-center gap-4 ${loading && 'opacity-50 cursor-not-allowed'}`}>
                                {loading && <i className="fal fa-spinner-third fa-spin" />}
                                {!loading && (
                                    <>
                                        <i className="fa fa-paper-plane" />
                                        Send
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>
}
