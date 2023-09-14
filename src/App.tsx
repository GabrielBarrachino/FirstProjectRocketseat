import { Header } from './Components/Header';
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar';
import './global.css'
import styles from './app.module.css';

// author: { avatar_url: "", name: "", role: "", }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: "Fala galera"},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocetseat. O nome do projeto é DoctorCare"},
      { type: 'link', content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('08-09-2023 14:04:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: "Fala galera"},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocetseat. O nome do projeto é DoctorCare"},
      { type: 'link', content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date('2023-09-08 14:04:00')
  },
]

function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
              return(
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>     
    </>
  )
}

export default App
