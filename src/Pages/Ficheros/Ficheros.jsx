import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Folder from '../../Components/Folder/InnerFolder'
import FileCard from '../../Components/File/FileCard'
import styles from './Ficheros.module.css'
const token = import.meta.env.VITE_TOKEN

export default function Ficheros() {
    const [result, setData] = useState(null)
    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [path, setPath] = useState('')
    const location = useLocation()

    const updateTheme = () => {
        color === 'black' ? setColor('white') : setColor('black')
    }

    useEffect(() => {
        const fetchData = async () => {
            setPath(location.pathname.split("/")[2])
            try {

                /** First fetch to request data tree from github */
                const response = await fetch(
                    "https://api.github.com/repos/StephanJ98/Univ_Codes/git/trees/26b15012af4c796283b271e3668ecef6692c5c69?recursive=true",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `token ${token}`
                        }
                    }
                )
                const data = await response.json()
                let dataTemp = Object.values(data)

                /** Second fetch to request data of the selected folder*/

                let sha = location.pathname.split("/")[2]

                const res = dataTemp[2].find((item) => item.sha === sha)
                document.title = `Estas en ${res?.path}`
                setItem(res)

                const response2 = await fetch(
                    `https://api.github.com/repos/StephanJ98/Univ_Codes/contents/${res.path}?ref=main`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `token ${token}`,
                        },
                    }
                );

                const data2 = await response2.json();
                setData(data2)
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
            <h1>Estas en <span className={styles.text_gradient}>{item.path}</span></h1>
            <div className={`${styles.instructions} ${styles.folderContainer}`}>
                {
                    result.map((elem) =>
                        elem.type === "dir" ? <Folder key={elem.name} data={elem} /> : null
                    )
                }
            </div>

            <div className={`${styles.instructions} ${styles.fileContainer}`}>
                {
                    result.map((elem) =>
                        elem.type !== "dir" ? <FileCard key={elem.name} data={elem} /> : null
                    )
                }
            </div>
        </main>
    )
}