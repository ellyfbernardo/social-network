import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css"
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            <Post
              author= "Ellyf Bernardo"
              content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti accusantium quas porro libero voluptates eveniet. Modi corrupti corporis dolores unde eligendi excepturi explicabo esse praesentium accusamus autem? Labore, blanditiis."
            />
            <Post
              author= "Ellyf Bernardo"
              content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta corrupti accusantium quas porro libero voluptates eveniet. Modi corrupti corporis dolores unde eligendi excepturi explicabo esse praesentium accusamus autem? Labore, blanditiis."
            />  
          </main>
      </div>
    </>
  )
}

export default App;
