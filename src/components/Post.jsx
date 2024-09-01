import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(){
     return(
          <>
              <article className={styles.post}>
                    <header>
                         <div className={styles.author}>
                              <Avatar src="https://avatars.githubusercontent.com/u/79612590?v=4"/>
                              <div className={styles.authorInfo}>
                                   <strong>Ellyf Bernardo</strong>
                                   <span>Web Developer</span>
                              </div>
                         </div>

                         <time title="30 de Agosto às 20:54h" dateTime="30/08/2024 20:54:30"> Publicado há 1h</time>

                    </header>


                    <div className={styles.content}>
                         <p>Fala galeraa 👋</p>

                         <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                         <p><a href="">ellyf.bernardo</a></p>

                         <p>
                              <a href="">#novoprojeto</a> {' '}
                              <a href="">#github</a> {' '}
                              <a href="">#post</a>{' '}
                         </p>
               </div>
               <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                         placeholder="Deixe um comentário"
                    />
                    
                    <footer>
                         <button type="submit">Publicar</button>
                    </footer>
              </form>

              <div className={styles.commentList}>
               <Comment/>
               <Comment/>
               <Comment/>
              </div>
              </article>


          </>
     )
}