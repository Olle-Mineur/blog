import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Olle Mineur\'s projects',
}

export default function Page() {
    return (
        <main className="flex flex-wrap flex-col content-center font-mono my-4">
            <div className="flex flex-row">
                <h1 className="font-bold text-left my-auto">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://github.com/Olle-Mineur/Blog" className="blue-link">Personal Blog</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            This is my personal blog, where I write about things I find interesting.
                        </p>
                        <p className="text-sm">
                            It is built with Next.js and Tailwind CSS.
                        </p>
                        <p className="text-sm">
                            The source code can be found <a href="https://github.com/Olle-Mineur/Blog" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I made this website in 2023.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://www.rumfastighet.se/" className="blue-link">Rum Fastighet</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            Building a website for Rum Fastighet to show their properties and to make it easier for people to contact them.
                        </p>
                        <p className="text-sm">
                            It is built with Next.js, TypeScript, Tailwind CSS, Appwrite and Cloudflare CDN.
                        </p>
                        <p className="text-sm">
                            The source code is closed but you can visit the website <a href="https://www.rumfastighet.se/" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I started this website summer 2023 and I am still working on it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap flex-col pl-4">
                <div className="my-2">
                    <h1 className="font-bold "><a href="https://oskarshamnsgasthamn.se/" className="blue-link">Oskarshamns Gästhamn</a></h1>
                    <div className="pl-4 my-2">
                        <p className="text-sm">
                            This is a website I made for Oskarshamns Gästhamn, a guest harbour in Oskarshamn.
                        </p>
                        <p className="text-sm">
                            It is built with HTML and CSS.
                        </p>
                        <p className="text-sm">
                            The source code is closed but you can visit the website <a href="https://oskarshamnsgasthamn.se/" className="blue-link">here</a>.
                        </p>
                        <p className="text-sm">
                            I made this website as a freelance project in 2021.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}