import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import "./global.css"

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: string


const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: "https://github.com/ellyfbernardo.png", 
      name: "Ellyf Bernardo", 
      role: "Web Developer" 
    },
  
  
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "ellyf.bernardo"},
    ],
    publishedAt: new Date("2024-09-01 11:00:00"),
  },
  {
    id: 2,
    author: { 
      avatarUrl: "https://github.com/rektdeckard.png", 
      name: "Arthur Lira", 
      role: "Backend Developer" 
    },
  
  
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "arthur.lira"},
    ],
    publishedAt: new Date("2024-09-02 09:00:00"),
  },
]


function App() {




  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post=>{
              return(
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}

                />
              )
            })}
          </main>
      </div>
    </>
  )
}

export default App;
