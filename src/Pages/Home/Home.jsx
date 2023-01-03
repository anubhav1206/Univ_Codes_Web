import { useState, useEffect } from 'react'
import './Home.css'
import Folder from '../../Components/Folder/Folder'
import HomeWarningText from '../../Components/HomeWarningText/HomeWarningText'
import { Ring } from '@uiball/loaders'
const token = import.meta.env.VITE_TOKEN

function Home() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('black')

  const updateTheme = () => {
    color === 'black' ? setColor('white') : setColor('black')
  }

  useEffect(() => {
    document.title = 'Bienvenido a Univ_Codes'

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/StephanJ98/Univ_Codes/contents/?ref=main",
          {
            method: "GET",
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        const data = await response.json()
        const responseT = await fetch(
          "https://api.github.com/repos/StephanJ98/Univ_Codes/git/trees/26b15012af4c796283b271e3668ecef6692c5c69?recursive=true",
          {
            method: "GET",
            headers: {
              Authorization: `token ${token}`
            }
          }
        )
        const dataT = await responseT.json()
        localStorage.setItem('dataTree', JSON.stringify(Object.values(dataT)[2]))

        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        let elemFolder = document.querySelector(".foldersContainer");
        if (elemFolder?.childNodes?.length <= 1) {
          let text = document.createElement("p");
          text.innerText = "No han encontrado carpetas a mostrar";
          elemFolder.classList.add("empty");
          elemFolder.appendChild(text);
        }
      }
    };
    fetchData()
  }, [])


  if (loading) {
    return <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Ring
        size={60}
        lineWeight={10}
        speed={2}
        color="gainsboro"
      />
    </div>
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <h1>Bienvenido a <span className="text-gradient">Univ_Codes</span></h1>
      <div className="instructions">
        {<HomeWarningText color={color} />}
      </div>
      <div className="instructions foldersContainer">
        {
          data.map((folder) =>
            folder?.type === "dir" ? <Folder key={folder.name} data={folder} /> : null
          )
        }
      </div>
    </main>
  )
}

export default Home
