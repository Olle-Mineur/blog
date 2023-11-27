import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'About me',
    description: 'About Olle Mineur',
}

function getStudyYear() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Adding 1 to get the current month

    const isBeforeAugust = currentMonth < 8;
    if (isBeforeAugust) {
        if (currentYear - 2021 > 4) {
            return "final year"
        }
        else if (currentYear - 2021 == 3) {
            return "3rd"
        }
        return currentYear - 2021 + "th";
    } else {
        if (currentYear - 2021 + 1 > 4) {
            return "final year"
        }
        else if (currentYear - 2021 + 1 == 3) {
            return "3rd"
        }
        return currentYear - 2021 + 1 + "th";
    }
}


export default function Page() {
    return (
        <main className="flex flex-wrap flex-col content-center font-mono my-4">
            <div className="flex flex-row">
                <Image
                className="mr-8 circular-image"
                src="/profile_picture.jpg"
                alt="Picture of Olle Mineur"
                width={150}
                height={150}
                priority/>
                <h1 className="font-bold text-left my-auto">
                    Olle Mineur
                    <br/><span className="font-light">Student @ Linköping University</span>
                </h1>
            </div>
            <div className="flex flex-wrap flex-col">
                <div className="my-2">
                <h1 className="font-bold ">Work Experience</h1>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Web developer @ Rum Fastighet</h2>
                        <p className="text-sm font-bold">
                            Worked: Summer 2023 - Present
                        </p>
                        <p className="text-sm">
                            Building a website for Rum Fastighet to show their properties and to make it easier for people to contact them.
                        </p>
                        <p className="text-sm mt-1">
                            Technologies: Next.js, TypeScript, Tailwind CSS, Appwrite, Cloudflare CDN
                        </p>
                        <Link href="https://rumfastighet.se/" className="text-sm blue-link">Link to website</Link>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Freelance Web developer @ Oskarshamns Gästhamn</h2>
                        <p className="text-sm font-bold">
                            Worked: 2021
                        </p>
                        <p className="text-sm">
                            At the end of High School I got asked to make a website for the local guest harbour. The website was supposed to give information to guests.
                            Made in only HTML and CSS. Focused on simplicity and ease of use.
                        </p>
                        <p className="text-sm mt-1">
                            Technologies: HTML, CSS, Cloudflare CDN
                        </p>
                        <Link href="https://oskarshamnsgasthamn.se/" className="text-sm blue-link">Link to website</Link>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Caretaker @ Rum Fastighet</h2>
                        <p className="text-sm font-bold">
                            Worked: Summers between 2017 - 2023
                        </p>
                        <p className="text-sm">
                            Worked with taking care of the properties owned by Rum Fastighet. This included everything from cleaning to fixing things that were broken.
                        </p>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Webmaster @ Datateknologsektionen</h2>
                        <p className="text-sm font-bold">
                            Worked: April 2023 - Present
                        </p>
                        <p className="text-sm">
                            Working with the website for the Computer Science and Engineering student union at Linköping University.
                            Also taking care of the servers and other technical things.
                        </p>
                        <p className="text-sm mt-1">
                            Technologies: React, Gatsby, Django, Docker, Nginx, Wordpress, Cloudflare CDN
                        </p>
                        <Link href="https://d-sektionen.se/" className="text-sm blue-link">Link to website</Link>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">ElWerk @ D-LAN</h2>
                        <p className="text-sm font-bold">
                            Worked: October 2022 - June 2023
                        </p>
                        <p className="text-sm">
                            Working with the electricity at D-LAN, a LAN party in Linköping.
                            Also took care of logistics at the event.
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <h1 className="font-bold">Education</h1>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Master of Science in Computer Science and Engineering @ Linköping University</h2>
                        <p className="text-sm font-bold">
                            2021 - Present
                        </p>
                        <p className="text-sm">
                            Currently studying my {getStudyYear()} year of the program.
                        </p>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Teknikprogrammet, inriktning informations- och medieteknik @ Oscarsgymnasiet</h2>
                        <p className="text-sm font-bold">
                            2018 - 2021
                        </p>
                        <p className="text-sm">
                            3 year program in High School. Focused on programming and web development.
                            Took extra courses in welding, CAD, and electricity.
                        </p>
                    </div>
                </div>
                <div className="my-4">
                    <h1 className="font-bold">Spoken languages</h1>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Swedish: Native</h2>
                        <h2 className="font-bold">English: Fluent</h2>
                        <h2 className="font-bold">German: Basic</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}