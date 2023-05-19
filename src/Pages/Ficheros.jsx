import React, { useEffect } from 'react'
import Folder from '../Components/InnerFolder'
import FileCard from '../Components/FileCard'
import { Ring } from '@uiball/loaders'
import Header from '../Components/header'
import { useGetContentWithSha } from '../hooks/useGetContentWithSha'
import NoData from '../Components/NoData'
import Navigation from '../Components/Navigation'

export default function Ficheros() {

    const { result, res } = useGetContentWithSha()

    useEffect(() => {
        document.title = `Estas en ${res ?? ""}`
    }, [res])

    return (
        <>
            <Header />
            <main>
                <div className="bg-primary/20 rounded p-5 my-5 mx-10 shadow-md flex justify-center flex-wrap gap-6">
                    {result ?
                        <div className="flex w-full">
                            <div className="bg-primary/10 p-2 rounded">
                                <Navigation res={res} />
                                <div className="divider mt-0"></div>
                                <div className='flex flex-col gap-2'>
                                    {result.find(elem => elem.type === "dir") ?
                                        result.map((elem) =>
                                            elem.type === "dir" ? <Folder key={elem.name} data={elem} /> : null
                                        )
                                        :
                                        <NoData folder={true} />
                                    }
                                </div>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="bg-primary/10 w-full p-5 rounded flex flex-wrap gap-6">
                                {result.find(elem => elem.type !== "dir") ?
                                    result.map((elem) =>
                                        elem.type !== "dir" ? <FileCard key={elem.name} data={elem} /> : null
                                    )
                                    :
                                    <NoData folder={false} />
                                }
                            </div>
                        </div>
                        :
                        <Ring color='white'/>
                    }
                </div>
            </main>
        </>
    )
}