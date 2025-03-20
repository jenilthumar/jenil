import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="container flex justify-between items-center py-3 text-[24px]">
            <div>Jenil HT.</div>
            <div className="flex items-center gap-x-[48px]">
                <Link href={'/'}>Projects</Link>
                <Link href={'/'}>Exploration</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
            </div>
        </div>
    )
}