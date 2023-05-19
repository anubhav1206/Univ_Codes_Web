import useSWR from "swr"
const token = import.meta.env.VITE_TOKEN

export function useGetContent(path = "") {

    const fetcher = (url, token) => (
        fetch(url, {
            method: "GET",
            headers: {
                Authorization: `token ${token}`
            }
        }).then(res => res.json())
    )

    const { data, error, isLoading } = useSWR([`https://api.github.com/repos/StephanJ98/Univ_Codes/contents/${path}?ref=main`, token], ([url, token]) => fetcher(url, token))

    return { data, error, loading: isLoading }
}