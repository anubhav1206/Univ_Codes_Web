import { useParams } from "react-router-dom"
import useSWR from "swr"
const token = import.meta.env.VITE_TOKEN

export function useGetContentWithSha() {

    const { sha } = useParams()

    const fetcher = (url, token) => (
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `token ${token}`
            }
        }).then(res => res.json())
    )

    const fetcherWithFind = (url, token) => (
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `token ${token}`
            }
        }).then(res => res.json())
            .then(data => data.tree.find(item => item.sha === sha).path)
    )



    const { data: shaResponse } = useSWR(['https://api.github.com/repos/StephanJ98/Univ_Codes/branches/main', token], ([url, token]) => fetcher(url, token))
    const { data: dataTemp } = useSWR(() => [`https://api.github.com/repos/StephanJ98/Univ_Codes/git/trees/${shaResponse.commit.sha}?recursive=true`, token, sha], ([url, token]) => fetcherWithFind(url, token))
    const { data: result } = useSWR(() => dataTemp ? [`https://api.github.com/repos/StephanJ98/Univ_Codes/contents/${dataTemp}?ref=main`, token, sha] : null, ([url, token]) => fetcher(url, token))

    return { result, res: dataTemp }

}