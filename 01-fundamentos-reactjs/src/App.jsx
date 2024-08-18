import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import Post from './Post'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Claudio Santos" 
            description="Aliqua ipsum elit aute voluptate labore cupidatat officia nulla sunt amet pariatur." 
          />
          <Post 
            author="Aldo Campos" 
            description="Aliqua ipsum elit aute voluptate labore cupidatat officia nulla sunt amet pariatur."
          />
        </main>
      </div>

    </div>
  )
}

export default App
