export default function NoData({ folder }) {
    return (
        <div className='w-full grid place-items-center font-bold text-white'>
            {!folder ?
                "No hay archivos en esta carpeta..."
                :
                "..."
            }
        </div>
    )
}
