import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { Trash, ThumbsUp} from "@phosphor-icons/react";

export function Comment(){
     return(
          <>
               <div className={styles.comment}>
                    <Avatar hasBorder={false} className={styles.avatar} src="https://avatars.githubusercontent.com/u/79612590?v=4" alt="Avatar do comentário"/>
                    
                    <div className={styles.commentBox}>
                         <div className={styles.commentContent}>
                              <header>
                                   <div className={styles.authorAndTime}>
                                        <strong>Ellyf Bernardo</strong>
                                        <time title="30 de Agosto às 20:54h" dateTime="30/08/2024 20:54:30"> Cerca de 1h atrás
                                        </time>
                                   </div>
                                   <button title="Deletar comentário">
                                        <Trash size={24}/>
                                   </button>
                              </header>

                              <p>Muito bom Ellyf, parabéns!!</p>
                         </div>

                    <footer>
                         <button>
                              <ThumbsUp/> Aplaudir<span>20</span>
                         </button>
                    </footer>
                    </div>
               </div>
          
          </>
     )
}