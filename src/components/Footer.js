import { faGithub, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export function Footer(){
    return(
        <footer className="bg-white-100 dark:bg-slate-700 rounded-t-lg p-3 flex justify-between gap-5 text-xs">
            <div className="grid justify-items-center">
                <p className="text-sm">Page made by Greasy &copy;</p>
                <div className="flex gap-3">
                    <Link href="https://github.com/Gr34sy" className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faGithub} className="size-[20px]"/>
                        <p className="text-red-400 dark:text-red-600">Check Github</p>
                    </Link>  

                    <Link href="https://heroic-quokka-3e69bf.netlify.app" className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faGlobe} className="size-[20px]"/>
                        <p className="text-red-400 dark:text-red-600">Check Portfolio</p>
                    </Link>

                    <Link href="https://www.linkedin.com/in/piotr-słupski-greasy17/" className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faLinkedin} className="size-[20px]"/>
                        <p className="text-red-400 dark:text-red-600">My LinkedIn</p>
                    </Link>    
                </div>
            </div>

            <div className="grid gap-1">
                <p className="flex gap-2 justify-between">Data provided by <Link href="https://openweathermap.org" className="underline dark:text-red-600 text-red-400">OpenWeather</Link></p>
                <p className="flex gap-2 justify-between">Pictures taken from <Link href="https://www.pexels.com" className="underline dark:text-red-600 text-red-400">Pexels</Link></p>
                <p className="flex gap-2 justify-between">Loading spinner made by <Link href="https://cssloaders.github.io" className="underline dark:text-red-600 text-red-400">CssLoaders</Link></p>
            </div>
        </footer>
    )
}