export default function HomeWarningText() {
    return (
        <>
            <div className="bg-primary/20 rounded p-5 my-5 mx-10 shadow-md text-center">
                <p className="p-5 bg-error rounded text-white font-bold text-center mb-5">
                    ⚡ Toda la documentación aquí presente está destinada a un empleo académico lícito, así que no me hago responsable de su mal uso. ⚡
                </p>
                <label htmlFor="info-modal" className="btn btn-info text-black w-1/5 shadow font-bold">Leer mas...</label>
            </div>


            <input type="checkbox" id="info-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-full flex flex-col gap-3">
                    <h3 className="font-bold text-lg text-center">Información importante</h3>
                    <p className="p-3 bg-info/50 rounded">
                        Esta página sirve de interfaz para el repositorio GitHub <a className="link" href="https://github.com/StephanJ98/Univ_Codes">Univ_Codes</a>. Y todo su contenido es directamente accesible y/o descargable desde esta página.
                    </p>

                    <p className="p-3 bg-info/50 rounded">
                        El repositorio es público, asi que si lo deseais es posible clonarlo, usando  el comando <b>git clone https://github.com/StephanJ98/Univ_Codes.git</b>, para ello es necesario tener instalado Git. Tambien es posible descargarlo directamente en ZIP desde este <a href="https://github.com/StephanJ98/Univ_Codes/archive/refs/heads/main.zip">enlace</a>. Pero no os recomendamos descargar el repositorio completo a no ser extrictamente necesario ya que puede pesar varios GB.
                    </p>

                    <p className="p-3 bg-info/50 rounded">
                        ✨ En caso de querer ayudar o aportar nueva documentación, simplemente crea un fork del repositorio y crea una pull request. O crea una issue directamente en este repositorio explicando que es lo que cambiarias.
                    </p>
                    <p className="p-3 bg-info rounded">
                        &#x1F375; Hay otra forma de ayudarnos: accediendo a nuestra página en <a className="link" href="https://es.tipeee.com/univcodes">Tipeee</a> y contribuyendo para costear nuestro importante consumo de café. De esta forma, nos ayudas a asegurarnos de la calidad del servicio que ofrecemos, ya que podemos verificar todos los documentos con mayor precisión. Además, tus donaciones también nos ayudan a cubrir los gastos de mantenimiento de la página.
                    </p>

                    <p className="p-3 bg-info rounded">
                        🤖 En caso de querer contribuir con documentos que excedan 50MB, por favor usa una herramienta del tipo 7zip para comprimir el archivo y dividirlo en partes para no exceder el límite. Esta medida es para evitar al máximo el empleo de Git LFS que es el que provoca el problema de Unable to render code block comentado anteriormente.
                    </p>

                    <p className="p-3 bg-info rounded">
                        💢 En caso contrario, si consideras que algún documento no debería estar ahí o que es de tu propiedad. Simplemente, crea una issue especificando a que documento te refieres (especificando una URL al menos), el porqué consideras que de debe eliminado y en caso necesario demostrando la autoría del documento al que te refieres. 💢
                    </p>
                    <div className="modal-action justify-center">
                        <label htmlFor="info-modal" className="btn btn-primary text-white">Listo!</label>
                    </div>
                </div>
            </div>

        </>

    )
}
