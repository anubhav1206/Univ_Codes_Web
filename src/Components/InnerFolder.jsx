import { Link } from 'react-router-dom'
import FolderIcon from '../assets/Icons/FolderIcon'
import { ArrowIcon } from '../assets/Icons/ArrowIcon'

export default function InnerFolder({ data }) {
    return (
        <Link to={`/ficheros/${data.sha}`} className='group bg-primary hover:bg-primary/70 w-max rounded p-2 flex gap-2 items-center text-white'>
            <div className='flex justify-center items-center gap-2'>
                <FolderIcon width={'25px'} height={'25px'} />
                <h3 className='font-bold text-white text-md'>{data.name}</h3>
            </div>
            <span className='transition-transform group-hover:translate-x-1 motion-reduce:transform-none'><ArrowIcon /></span>
        </Link>
    )
}


