"use client"

import { useState } from "react"
import ImageContent from "./models/ImageContent"
import ProjectModel from "./models/ProjectModel"
import Project from "./project"
import styles from "./allProjects.module.css"

const projects = [
    new ProjectModel("Playlist Unite", "Playlist Unite is een project die de muziek van YouTube, SoundCloud en Spotify samenbrengt zodat je alles vanaf één punt kan beluisteren. Playlist Unite is voorzien van verschillende functies om het gebruikersgemak, toegankelijkheid en de aanpasbaarheid hoog te houden. Zo heb je alle functionaliteiten die ook mogelijk zijn inje in Spotify en SoundCloud, maar kan je ook gemakkelijk eigen toetscombinaties toevoegen<br><br>Playlist Unite is gemaakt met TypeScript, NextJS en SCSS. ",
        [
            {Image: "default.png", Description: "Een basisoverzicht"},
            {Image: "settings.png", Description: "De instellingen van de gebruiker"},
            {Image: "addToQueue.png", Description: "Instellingen van individuele liedjes"},
            {Image: "phone.png", Description: "Een overzicht van de telefoon"},
        ], "Sep 2024", "https://github.com/JeannotM/PlaylistUnite"),
    new ProjectModel("Dynamic Difficulty", "DynamicDifficulty is een Minecraft plugin die de moeilijkheidsgraad van spelers aanpast. Wanneer een speler veel moeite heeft in de game wordt de speler op een makkelijkere graad gezet en als het de speler goed af gaat, wordt die op een moeilijkere graad gezet, waar die ook meer spullen kan krijgen.<br><br>Gemaakt met Java en Maven", 
        [
            {Image: "default.png", Description: ""},
        ], "Dec 2020", "https://github.com/JeannotM/DynamicDifficulty"),
    new ProjectModel("Frontend Quiz", "Frontend Quiz was een schoolproject dat gemaakt was om de kennis van nieuwe studenten te testen. Om studenten met meer kennis van JS weg te houden van het vals spelen zijn er ook maatregelen genomen om te zorgen dat ze geen valse scoren konden krijgen (buiten mij natuurlijk).<br><br>Met HTML, CSS en JavaScript gemaakt.", 
        [
            {Image: "welkom.png", Description: "De startpagina van de Quiz"},
            {Image: "vraag.png", Description: "Een van de vragen die voorkomen"},
            {Image: "antwoord.png", Description: "Goed en fout antwoord"},
        ], "Sep 2020", "https://github.com/JeannotM/Quiz"),
]

export default function AllProjects() {
    const [project, setProject] = useState(projects[0]);
    const changeProject = (i: number) => setProject(projects[i]);

    return (
        <div>
            <div className={styles.buttonContainer}>
                {projects.map((project, i) => {
                    return <button onClick={() => changeProject(i)} key={i}>{project.Name}</button>
                })}
            </div>
            <Project project={project}></Project>
        </div>
    )
}