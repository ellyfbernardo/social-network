import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

// Lib date-fns
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";



export function Post({ author, publishedAt, content }){

     const [comments, setComments] = useState([
          'post muito bacana'
     ]);

     const [newCommentText, setNewCommentText] = useState('');

     const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr,});

     const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
          locale: ptBr,
          addSuffix: true,
     });


     function handleCreateNewComment(){
          event.preventDefault();

          const newCommentText = event.target.comment.value;
          setComments([...comments, newCommentText]);

          setNewCommentText('');

     };
     
     function handleCreateNewCommentChange(){
          setNewCommentText(event.target.value);
          
     };

     return(
          <>
              <article className={styles.post}>
                    <header>
                         <div className={styles.author}>
                              <Avatar src={author.avatarUrl}/>
                              <div className={styles.authorInfo}>
                                   <strong>{author.name}</strong>
                                   <span>{author.role}</span>
                              </div>
                         </div>

                         <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                         
                              {publishedRelativeToNow}
                         </time>

                    </header>


                    <div className={styles.content}>
                         {content.map(line =>{
                              if(line.type === 'paragraph'){
                                   return <p key={line.content}>{line.content}</p>

                         }else if(line.type === 'link'){
                              return <p key={line.content}><a href="">{line.content}</a></p>
                         }
                    
                         })}
                    </div>

               <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                    <strong>Deixe seu feedback</strong>

                    <textarea 
                         placeholder="Deixe um comentário"
                         name="comment"
                         value={newCommentText}
                         onChange={handleCreateNewCommentChange}
                    />
                    
                    <footer>
                         <button type="submit">Publicar</button>
                    </footer>
              </form>

              <div className={styles.commentList}>
                    {comments.map(comments =>{
                         return <Comment key={comments} content={comments}/>
                    })}
              </div>
              </article>


          </>
     )
}