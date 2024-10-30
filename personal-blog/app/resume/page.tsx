import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Olle Mineur\'s resume',
}

interface knowledgeList {
    name: string;
    technologies: technologies[];
}

interface technologies {
    name: string;
    image?: string;
    darkImage?: string;
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
    const favoriteProgrammingLanguages: technologies[] = [
        {
            name: "TypeScript",
            image: "https://skillicons.dev/icons?i=ts&theme=light",
            darkImage: "https://skillicons.dev/icons?i=ts&theme=dark"
        },
        {
            name: "Python",
            image: "https://skillicons.dev/icons?i=python&theme=light",
            darkImage: "https://skillicons.dev/icons?i=python&theme=dark"
        },
    ]

    const otherProgramming: technologies[] = [
        {
            name: "JavaScript",
            image: "https://skillicons.dev/icons?i=js&theme=light",
            darkImage: "https://skillicons.dev/icons?i=js&theme=dark"
        },
        {
            name: "Java",
            image: "https://skillicons.dev/icons?i=java&theme=light",
            darkImage: "https://skillicons.dev/icons?i=java&theme=dark"
        },
        {
            name: "C",
            image: "https://skillicons.dev/icons?i=c&theme=light",
            darkImage: "https://skillicons.dev/icons?i=c&theme=dark"
        },
        {
            name: "C++",
            image: "https://skillicons.dev/icons?i=cpp&theme=light",
            darkImage: "https://skillicons.dev/icons?i=cpp&theme=dark"
        },
        {
            name: "VHDL"
        },
    ]

    const clientKnowledge: technologies[] = [
        {
            name: "React",
            image: "https://skillicons.dev/icons?i=react&theme=light",
            darkImage: "https://skillicons.dev/icons?i=react&theme=dark"
        },
        {
            name: "Next.js",
            image: "https://skillicons.dev/icons?i=nextjs&theme=light",
            darkImage: "https://skillicons.dev/icons?i=nextjs&theme=dark"
        },
        {
            name: "Gatsby",
            image: "https://skillicons.dev/icons?i=gatsby&theme=light",
            darkImage: "https://skillicons.dev/icons?i=gatsby&theme=dark"
        },
        {
            name: "Tailwind",
            image: "https://skillicons.dev/icons?i=tailwind&theme=light",
            darkImage: "https://skillicons.dev/icons?i=tailwind&theme=dark"
        },
        {
            name: "Figma",
            image: "https://skillicons.dev/icons?i=figma&theme=light",
            darkImage: "https://skillicons.dev/icons?i=figma&theme=dark"
        },
        {
            name: "CSS",
            image: "https://skillicons.dev/icons?i=css&theme=light",
            darkImage: "https://skillicons.dev/icons?i=css&theme=dark"
        },
        {
            name: "HTML",
            image: "https://skillicons.dev/icons?i=html&theme=light",
            darkImage: "https://skillicons.dev/icons?i=html&theme=dark"
        },
        {
            name: "Wordpress",
            image: "https://skillicons.dev/icons?i=wordpress&theme=light",
            darkImage: "https://skillicons.dev/icons?i=wordpress&theme=dark"
        }
    ]

    const serverKnowledge: technologies[] = [
        {
            name: "Node.js",
            image: "https://skillicons.dev/icons?i=nodejs&theme=light",
            darkImage: "https://skillicons.dev/icons?i=nodejs&theme=dark"
        },
        {
            name: "Django",
            image: "https://skillicons.dev/icons?i=django&theme=light",
            darkImage: "https://skillicons.dev/icons?i=django&theme=dark"
        },
        {
            name: "Selenium",
            image: "https://skillicons.dev/icons?i=selenium&theme=light",
            darkImage: "https://skillicons.dev/icons?i=selenium&theme=dark"
        },
        {
            name: "Appwrite",
            image: "https://skillicons.dev/icons?i=appwrite&theme=light",
            darkImage: "https://skillicons.dev/icons?i=appwrite&theme=dark"
        },
        {
            name: "Docker",
            image: "https://skillicons.dev/icons?i=docker&theme=light",
            darkImage: "https://skillicons.dev/icons?i=docker&theme=dark"
        },
        {
            name: "Nginx",
            image: "https://skillicons.dev/icons?i=nginx&theme=light",
            darkImage: "https://skillicons.dev/icons?i=nginx&theme=dark"
        },
        {
            name: "Cloudflare",
            image: "https://skillicons.dev/icons?i=cloudflare&theme=light",
            darkImage: "https://skillicons.dev/icons?i=cloudflare&theme=dark"
        },
        {
            name: "Linux",
            image: "https://skillicons.dev/icons?i=linux&theme=light",
            darkImage: "https://skillicons.dev/icons?i=linux&theme=dark"
        }
    ]

    const knowledgeGroups: knowledgeList[] = [
        {
            name: "Client knowledge",
            technologies: clientKnowledge
        },
        {
            name: "Server knowledge",
            technologies: serverKnowledge
        },
        {
            name: "Other programming languages",
            technologies: otherProgramming
        }
    ]

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
                    <br/><span className="font-dark text-xs">Favorite Languages: </span>
                    <div className="flex flex-row flex-wrap">
                        {favoriteProgrammingLanguages.map((technology, techIndex) => (
                            technology.image? (
                                <picture key={techIndex}>
                                    <source srcSet={technology.darkImage} media="(prefers-color-scheme: dark)" />
                                    <Image
                                    className="mr-2 mb-2"
                                    src={technology.image}
                                    alt={technology.name}
                                    width={30}
                                    height={30}
                                    priority/>
                                </picture>
                            ) :
                            <p key={techIndex} className="text-sm font-bold">{technology.name}</p>
                        ))}
                    </div>
                </h1>
            </div>
            <div className="flex flex-wrap flex-col">
                <div className="my-2">
                <div className="flex flex-col my-2">
                    <h1 className="font-bold">Skills</h1>
                    {knowledgeGroups.map((knowledgeGroup, groupIndex) => (
                        <div className="m-2" key={groupIndex}>
                            <p className="font-bold text-sm">{knowledgeGroup.name}:</p>
                            <div className="flex flex-row flex-wrap gap-x-8 items-center align-middle content-center">
                                {knowledgeGroup.technologies.map((technology, techIndex) => (
                                    technology.image? (
                                        <picture key={techIndex} className="group my-1 w-[50px] h-[50px]">
                                            <p className="opacity-0 group-hover:opacity-100 text-center text-xs font-bold text-nowrap">{technology.name}</p>
                                            <source srcSet={technology.darkImage} media="(prefers-color-scheme: dark)" />
                                            <Image
                                            className="mx-auto"
                                            src={technology.image}
                                            alt={technology.name}
                                            width={30}
                                            height={30}
                                            priority/>
                                        </picture>
                                    ) :
                                    <p key={techIndex} className="text-sm font-bold">{technology.name}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="font-bold ">Work Experience</h1>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Team leader @ Linköpings universitet</h2>
                        <p className="text-sm font-bold">
                            Worked: June 2024 - July 2024
                        </p>
                        <p className="text-sm">
                        Team leader of a 5 group team at <span lang='sv' className="italic-text">Digitaliseringsavdelningen</span>, within the <span lang='sv' className="italic-text">Digitala resursenheten</span> team. The work involves installing and maintaining computers in various halls across all campuses of Linköping University. I was responsible for the team and the work we did. I also had to report to the project manager and make sure everything was done correctly.
                        </p>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Student Employee @ Linköpings universitet</h2>
                        <p className="text-sm font-bold">
                            Worked: November 2023 - Present
                        </p>
                        <p className="text-sm">
                        Student assistant at the <span lang='sv' className="italic-text">Digitaliseringsavdelningen</span>, within the <span lang='sv' className="italic-text">Digitala resursenheten</span> team. The work involves installing and maintaining computers in various halls across all campuses of Linköping University. I work in a team of approximately 10 people to cover all the work.
                        </p>
                    </div>
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
                        <h2 className="font-bold">Property Manager / Carpenter @ Rum Fastighet</h2>
                        <p className="text-sm font-bold">
                            Worked: Summers between 2017 - 2023
                        </p>
                        <p className="text-sm">
                            Worked with taking care of the properties owned by Rum Fastighet. This included everything from cleaning to fixing things that were broken.
                            <br/> Also helped with carpentry work when needed, for example when renovating apartments or smaller things like changing windows.
                        </p>
                    </div>
                </div>
                <div className="my-2">
                    <h1 className="font-bold ">Student Organizations</h1>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Webmaster @ Datateknologsektionen</h2>
                        <p className="text-sm font-bold">
                            Worked: April 2024 - Present
                        </p>
                        <p className="text-sm">
                            Stayed as Webmaster for another year, had a lot of fun and wanted to continue working with the website.
                            Working with the website for the Computer Science and Engineering student union at Linköping University.
                            Also taking care of the servers and other technical things.
                            This year I wanted to make our development process more efficient. More Docker and more automation.
                            Also started to work more agile and with sprints.
                        </p>
                        <p className="text-sm mt-1">
                            Technologies: React, Gatsby, Django, Docker, Nginx, Wordpress, Cloudflare CDN
                        </p>
                        <Link href="https://d-sektionen.se/" className="text-sm blue-link">Link to website</Link>
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Webmaster @ Datateknologsektionen</h2>
                        <p className="text-sm font-bold">
                            Worked: April 2023 - June 2024
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
                        <Link href="https://d-lan.se/" className="text-sm blue-link">Link to website</Link> 
                    </div>
                    <div className="pl-4 my-2">
                        <h2 className="font-bold">Chef & Bartender @ VilleValla Pub</h2>
                        <p className="text-sm font-bold">
                            Worked: March 2024 - Present
                        </p>
                        <p className="text-sm">
                            Started in the kitchen at VilleValla Pub, a student pub in Linköping.
                            Wanted to try something new and decided to start at VilleValla.
                            Works both in the kitchen and as a bartender.
                        </p>
                        <Link href="https://www.villevallapub.se/" className="text-sm blue-link">Link to website</Link>
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
                        <Link href="https://liu.se/en/education/program/6cddd" className="text-sm blue-link">Link to program</Link>
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
                        <Link href="https://www.oskarshamn.se/forskola-och-utbildning/oscarsgymnasiet/program/teknikprogrammet/" className="text-sm blue-link">Link to program</Link>
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
            <Footer/>
        </main>
    )
}