import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "./nav";
import HomeLayout from "./home";
import Projects from "./project";
import AllProjects from "./allProjects";

export default function Home() {
  return (
    <div>
      <HomeLayout />
      <AllProjects />
    </div>
  );
}
