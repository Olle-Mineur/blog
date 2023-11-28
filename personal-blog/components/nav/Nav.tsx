export default function Nav() {
    return (
        <nav className="flex sm:justify-center space-x-4">
            {[
            ['Home', '/'],
            ['Resume', '/resume'],
            ['Projects', '/projects'],
            //['Food Blog', '/food'],
            ].map(([title, url]) => (
                <a key={title} href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 dark:text-gray-100">{title}</a>
            ))}
        </nav>
    )
}