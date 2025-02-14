import React from 'react'
import "@/globals.css"
import Link from 'next/link'

export default function () {
    return (
        <main className='w-full h-full bg-[#1A191B] min-w-screen min-h-screen flex justify-center items-center p-1.5'>
            <container className="flex flex-col sm:flex-row items-center sm:items-stretch w-full">
                <figure className=" sm:w-2/5  ">
                    <img alt="Minecraft Earth" src="/favicon.png" />
                </figure>
                <article className="w-full sm:w-3/5 flex flex-col justify-center p-6 
                 text-[#EEEEF0] font-sans leading-relaxed tracking-wide">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100">
                        <span className="text-red-500">Hi</span>, I'm Gourav Sharma! 👋
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        I'm a passionate <span className="font-semibold">Full-Stack Developer</span> and <span className="font-semibold">AI/ML enthusiast</span> with expertise in building scalable web applications. Skilled in <span className="font-semibold">MERN stack 🍔, Next.js , and Python 🐍</span>, I specialize in crafting immersive user experiences and optimizing application performance.
                    </p>
                    <h2 className="mt-6 text-xl sm:text-2xl font-medium text-gray-200">
                        📍 Based in India, I'm always eager to explore new technologies and innovate.<br /> <span className="font-semibold text-red-400">Let's build something amazing together!</span>
                    </h2>
                    <div className='mt-2'>
                        <Link href='https://github.com/gouravsharma-00' className='bg-gray-200 rounded-sm text-black p-1.5'>Projects</Link>
                    </div>
                </article>

            </container>

        </main>
    )
}