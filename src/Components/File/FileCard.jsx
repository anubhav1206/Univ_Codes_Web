import styles from './FileCard.module.css'
import FileIcon from '../../assets/Icons/FileIcon'

export default function FileCard({ data, color }) {
    return (
        <div className={styles.file} style={{ color: color }}>
            <div className={styles.titleSection}>
                <FileIcon className={styles.icon} width={'30px'} height={'30px'} />
                <h3 className={styles.name}>{data.name}</h3>
            </div>
            <div className={styles.linksSection}>
                <a className={styles.repoLink} href={data.html_url} target='_blank'>Ir al Repositorio</a>
                {data.download_url !== null ? <a className={styles.dowloadLink} href={data.download_url} target='_blank'>Descargar</a> : null}
            </div>
        </div>
    )
}
