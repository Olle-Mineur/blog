import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="flex flex-wrap flex-col content-center font-mono my-4">
      <div className="my-4">
        <h1 className="font-bold">Welcome to Olle Mineur</h1>
      </div>
      <div>
        <h2 className="my-4 font-bold">About me:</h2>
        <p className="my-4">
          Currently I am a student at Linköping University studying <Link className="blue-link" href="https://liu.se/en/education/program/6cddd">Master of Science in Computer Science and Engineering</Link>.
        <br/> This is my personal website where I will post about my projects and other things I find interesting.
        <br/> You can also find my resume <Link className="blue-link" href="/resume">here</Link>.
        </p>
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
      <Footer/>
    </main>
  )
}
