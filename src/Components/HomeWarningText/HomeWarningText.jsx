export default function HomeWarningText({ color }) {
    return (
        <>
            <p style={{ color: 'gainsboro', backgroundColor: 'red', padding: '5px', borderRadius: '5px', textAlign: 'center', fontWeight: 'bolder' }}>
                ⚡ Toda la documentación aquí presente está destinada a un empleo académico lícito, así que no me hago responsable de su mal uso. ⚡
            </p>

            <p style={{ color: color, textAlign: 'justify' }}>
                Esta página sirve de interfaz para el repositorio GitHub <a href="https://github.com/StephanJ98/Univ_Codes">Univ_Codes</a>. Y todo su contenido es directamente accesible y/o descargable desde esta página.
            </p>

            <p style={{ color: color, textAlign: 'justify' }}>
                El repositorio es público, asi que si lo deseais es posible clonarlo, usando  el comando <b>git clone https://github.com/StephanJ98/Univ_Codes.git</b>, para ello es necesario tener instalado Git. Tambien es posible descargarlo directamente en ZIP desde este <a href="https://github.com/StephanJ98/Univ_Codes/archive/refs/heads/main.zip">enlace</a>. Pero no os recomendamos descargar el repositorio completo a no ser extrictamente necesario ya que puede pesar varios GB.
            </p>

            <p style={{ color: color, textAlign: 'justify' }}>
                ✨ En caso de querer ayudar o aportar nueva documentación, simplemente crea un fork del repositorio y crea una pull request. O crea una issue directamente en este repositorio explicando que es lo que cambiarias.
            </p>

            <p style={{ color: color, textAlign: 'justify' }}>
                🤖 En caso de querer contribuir con documentos que excedan 50MB, por favor usa una herramienta del tipo 7zip para comprimir el archivo y dividirlo en partes para no exceder el límite. Esta medida es para evitar al máximo el empleo de Git LFS que es el que provoca el problema de Unable to render code block comentado anteriormente.
            </p>

            <p style={{ color: color, backgroundColor: 'orange', padding: '5px', borderRadius: '5px', textAlign: 'justify', fontWeight: 'bolder' }}>
                💢 En caso contrario, si consideras que algún documento no debería estar ahí o que es de tu propiedad. Simplemente, crea una issue especificando a que documento te refieres, el porqué consideras que de debe eliminado y en caso necesario demostrando la autoría del documento al que te refieres. 💢
            </p>
        </>
    )
}
