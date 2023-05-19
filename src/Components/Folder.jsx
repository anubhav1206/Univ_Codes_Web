import { Link } from 'react-router-dom'
import FolderIcon from '../assets/Icons/FolderIcon'

export default function Folder({ data }) {
    return (
        <div className='bg-primary w-64 rounded p-5 flex flex-col'>
            <div className='flex justify-center items-center gap-2'>
                <FolderIcon width={'30px'} height={'30px'} />
                <h3 className='font-bold text-white text-xl'>{data.name}</h3>
            </div>
            <div className='flex justify-evenly mt-4'>
                <Link className='btn btn-sm btn-secondary text-black' to={`/materias/${data.name}`}>Ver</Link>
                <a className='btn btn-sm btn-secondary text-black' href={data.html_url} target='_blank'>Ir al Repositorio</a>
                {data.download_url !== null ? <a href={data.download_url} target='_blank'>Descargar</a> : null}
            </div>
        </div>
    )
}
