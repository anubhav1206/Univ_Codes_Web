import { useEffect } from 'react'
import Folder from '../Components/Folder'
import HomeWarningText from '../Components/HomeWarningText'
import { Ring } from '@uiball/loaders'
import Header from '../Components/header'
import { useGetContent } from '../hooks/useGetContent'

function Home() {

  const { data, error, loading } = useGetContent()

  useEffect(() => {
    document.title = 'Bienvenido a Univ_Codes'
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <main>
        <HomeWarningText />
        <div className="bg-primary/20 rounded p-5 my-5 mx-10 shadow-md flex justify-center flex-wrap gap-6">
          {!loading ?
            data.map((folder) => folder?.type === "dir" && (<Folder key={folder.name} data={folder} />))
            :
            <Ring color='white'/>
          }
        </div>
      </main>
    </>
  )
}

export default Home
