import { useRouteError } from "react-router-dom"

export default function NotFound() {
    const error = useRouteError()

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>Oops!</h2>
            <p style={{ textAlign: 'center' }}>Sorry, an unexpected error has occurred.</p>
            <p style={{ textAlign: 'center' }}>
                <b>Cause:</b> <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}