import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Folder from '../../Components/Folder/InnerFolder'
import FileCard from '../../Components/File/FileCard'
import Back from '../../assets/Icons/Back'
import styles from './Materias.module.css'
const token = import.meta.env.VITE_TOKEN

export default function Materias() {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [path, setPath] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const updateTheme = () => {
        color === 'black' ? setColor('white') : setColor('black')
    }

    useEffect(() => {
        document.title = `Estas en ${location.pathname.split("/")[2]}`

        const fetchData = async () => {
            setPath(location.pathname.split("/")[2])
            try {
                const response = await fetch(
                    `https://api.github.com/repos/StephanJ98/Univ_Codes/contents/${location.pathname.split("/")[2]}/?ref=main`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `token ${token}`
                        }
                    }
                )
                const data = await response.json()
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
                let elemFolder = document.querySelector(`.${styles.folderContainer}`)
                if (elemFolder?.childNodes.length < 1) {
                    let text = document.createElement("p");
                    text.innerText = "No han encontrado carpetas a mostrar";
                    elemFolder.classList.add(styles.empty);
                    elemFolder.appendChild(text);
                }

                let elemFile = document.querySelector(`.${styles.fileContainer}`);
                if (elemFile?.childNodes.length < 1) {
                    let text = document.createElement("p");
                    text.innerText = "No han encontrado archivos a mostrar";
                    elemFile.classList.add(styles.empty);
                    elemFile.appendChild(text);
                }
            }
        };
        fetchData()
    }, [])


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <main>
            <h1>
                <Back className={styles.icon} onClick={() => navigate(-1)}/> Estas en <span className={styles.text_gradient}>{path}</span>
            </h1>
            <div className={`${styles.instructions} ${styles.folderContainer}`}>
                {
                    data.map((elem) =>
                        elem.type === "dir" ? <Folder key={elem.name} data={elem} /> : null
                    )
                }
            </div>

            <div className={`${styles.instructions} ${styles.fileContainer}`}>
                {
                    data.map((elem) =>
                        elem.type !== "dir" ? <FileCard key={elem.name} data={elem} /> : null
                    )
                }
            </div>
        </main>
    )
}
