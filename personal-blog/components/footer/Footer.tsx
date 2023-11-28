import Link from 'next/link'

export default function Footer() {
    return (
        <div className="my-4 flex flex-wrap flex-col relative bottom-0">
            <h2 className="flex-auto font-bold">Links:</h2>
            <div className="flex text-center">
                <Link href="https://github.com/Olle-Mineur" className="flex-auto blue-link">Github</Link>
                <Link href="https://www.linkedin.com/in/olle-mineur/" className="flex-auto blue-link">LinkedIn</Link>
            </div>
        </div>
    )
}