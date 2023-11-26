import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-wrap flex-col content-center font-mono w-screen my-4">
      <div className="my-4">
        <h1 className="font-bold">Welcome to Olle Mineur</h1>
      </div>
      <div>
        <h2 className="my-4 font-bold">About me:</h2>
        <p className="my-4">
          Currently I am a student at Linköping University studying <Link className="blue-link" href="https://liu.se/en/education/program/6cddd">Master of Science in Computer Science and Engineering</Link>.
        </p>
      </div>
      <div className="my-4 flex flex-wrap flex-col">
        <h2 className="flex-auto font-bold">Links:</h2>
        <div className="flex text-center">
          <Link href="https://github.com/Olle-Mineur" className="flex-auto blue-link">Github</Link>
          <Link href="https://www.linkedin.com/in/olle-mineur/" className="flex-auto blue-link">LinkedIn</Link>
        </div>
      </div>
      <div className="my-4 flex flex-wrap flex-col content-center">
        <Image
          className="flex-auto circular-image"
          src="/profile_picture.jpg"
          alt="Picture of Olle Mineur"
          width={300}
          height={300}
          priority/>
      </div>
    </main>
  )
}
