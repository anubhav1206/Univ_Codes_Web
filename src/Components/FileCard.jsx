import FileIcon from '../assets/Icons/FileIcon'

export default function FileCard({ data, color }) {
    return (
        <div className='bg-primary w-auto h-max rounded p-5 flex flex-col text-white'>
            <div className='flex justify-center items-center gap-2'>
                <FileIcon width={'30px'} height={'30px'} />
                <h3 className='font-bold text-white text-xl'>{data.name}</h3>
            </div>
            <div className='flex flex-col mt-4 gap-2'>
                <a className='btn btn-sm btn-secondary text-black' href={data.html_url} target='_blank'>Ir al Repositorio</a>
                {data.download_url && <a className='btn btn-sm btn-secondary text-black' href={data.download_url} target='_blank'>Descargar</a>}
            </div>
        </div>
    )
}
