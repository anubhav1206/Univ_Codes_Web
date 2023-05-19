import { Link, useNavigate } from 'react-router-dom'
import Back from '../assets/Icons/BackArrowIcon'
import HomeIcon from '../assets/Icons/HomeIcon'

export default function Navigation({ res }) {
    const navigate = useNavigate()

    return (
        <>
            <div className='flex flex-none items-center gap-2 mx-2'>
                    <Link className='btn btn-ghost text-white' to="/"><HomeIcon /></Link>
                    <div className='divider divider-horizontal m-0' />
                    <button className='btn btn-ghost text-white' onClick={() => navigate(-1)}><Back /></button>
                <div className="text-md breadcrumbs text-white">
                    <ul>
                        {res.split("/").map(i => (
                            <li key={i}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {i}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}