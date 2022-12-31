import styles from './Folder.module.css';

import FolderIcon from '../../assets/Icons/FolderIcon'

export default function InnerFolder({ data }) {
    return (
        <div className={styles.folder}>
            <div className={styles.titleSection}>
                <FolderIcon className={styles.icon} width={'30px'} height={'30px'} />
                <h3 className={styles.name}>{data.name}</h3>
            </div>
            <div className={styles.linksSection}>
                <a href={`/ficheros/${data.sha}`}>Ver</a>
                <a className={styles.repoLink} href={data.html_url} target='_blank'>Ir al Repositorio</a>
                {data.download_url !== null ? <a className={styles.dowloadLink} href={data.download_url} target='_blank'>Descargar</a> : null}
            </div>
        </div>
    )
}


