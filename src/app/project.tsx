import ImageSlide from "./imageSlide";
import ProjectModel from "./models/ProjectModel"
import styles from "./project.module.css"
import Image from "next/image"

export default function Projects(project: {project: ProjectModel}) {
    const p = project.project;
    return (
        <div className={styles.content}>
            <p className={styles.projectDate}>{p.Date}</p>
            <div className={styles.timeline} />
            <div className={styles.projectInformation}>
                <p className={styles.projectText} dangerouslySetInnerHTML={{ __html: p.Description}}></p>
                <div className={styles.projectPictureContainer}>
                    <div className={styles.projectIconContainer}>
                        <a href={p.Link} className={styles.projectIcon}>
                            <Image src="/hyper.png" alt="gitlogo" width={30} height={30} />
                        </a>
                    </div>
                    <ImageSlide name={p.Name} content={p.Content} className={styles.projectPicture} />
                </div>
            </div>
        </div>
    )
}