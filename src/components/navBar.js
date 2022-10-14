import {Link} from 'react-router-dom'

const links = [
    {
        label: 'docs',
        url: '/docs'
    },
    {
        label: 'marketplace',
        url: '/marketplace'
    },
    {
        label: 'courses',
        url: '/courses'
    },
]
function NavBar(){
    return(
        <div className="h-[100px] bg-slate-800 shadow-lg">
            <div className="h-full flex container max-w-7xl mx-auto items-center justify-between">
                <h1 className="text-3xl tracking-wider">EDCHAIN</h1>
                <div className="flex justify-around">
                    {links.map((link, i)=>{
                        return <Link key={i} className='px-5 uppercase text-lg ' to={link.url}>{link.label}</Link>
                    })}
                </div>
            </div>
        </div>
    )
}


export default NavBar