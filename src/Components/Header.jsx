export default function Header() {
    return (
        <header className="bg-primary rounded flex flex-col justify-center gap-6 mx-10 my-2 text-center text-white font-bold p-5 shadow">
            <h1 className="text-5xl mb-2">Bienvenido a <span className='bg-gradient-to-r from-[#7c3aed] to-[#da62c4] inline-block text-transparent bg-clip-text'>Univ_Codes</span></h1>
            <span className="text-sm">Hecho por: <a className="link" href="https://github.com/StephanJ98" target="_blank" rel="noopener noreferrer">StephanJ98</a></span>
        </header>
    )
}
