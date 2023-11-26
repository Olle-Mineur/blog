import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About me',
    description: 'About Olle Mineur',
}

export default function Page() {
    return (
        <h1>Hello, About Page!</h1>
    )
}