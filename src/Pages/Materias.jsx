import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Folder from '../Components/InnerFolder'
import FileCard from '../Components/FileCard'
import { Ring } from '@uiball/loaders'
import Header from '../Components/header'
import { useGetContent } from '../hooks/useGetContent'
import NoData from '../Components/NoData'
import Navigation from '../Components/Navigation'

export default function Materias() {

    const { name: path } = useParams()
    const { data, error, loading } = useGetContent(path)

    useEffect(() => {
        document.title = `Estas en ${path}`
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <Header />
            <main>
                <div className="bg-primary/20 rounded p-5 my-5 mx-10 shadow-md flex justify-center flex-wrap gap-6">
                    {!loading ?
                        <div className="flex w-full">
                            <div className="bg-primary/10 p-2 rounded">
                                <Navigation res={path} />
                                <div className="divider mt-0"></div>
                                <div className='flex flex-col gap-2'>
                                    {(data.message != 'Not Found') ? (
                                        data.find(elem => elem.type === "dir") ?
                                            data.map((elem) => elem.type === "dir" && <Folder key={elem.name} data={elem} />)
                                            :
                                            <NoData folder={true} />
                                    ) : (<NoData folder={true} />)
                                    }
                                </div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="bg-primary/10 w-full p-5 rounded flex flex-wrap gap-6">
                                {(data.message != 'Not Found') ? (
                                    data.find(elem => elem.type !== "dir") ?
                                        data.map((elem) => elem.type !== "dir" && <FileCard key={elem.name} data={elem} /> )
                                        :
                                        <NoData folder={false} />
                                ) : (<NoData folder={false} />)
                                }
                            </div>
                        </div>
                        :
                        <Ring color='white' />
                    }
                </div>
            </main>
        </>
    )
}
