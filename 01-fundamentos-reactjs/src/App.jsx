import { Header } from './components/Header'
import Post from './Post'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Claudio Santos" 
        description="Aliqua ipsum elit aute voluptate labore cupidatat officia nulla sunt amet pariatur." 
      />
      <Post 
        author="Aldo Campos" 
        description="Aliqua ipsum elit aute voluptate labore cupidatat officia nulla sunt amet pariatur."
      />
    </div>
  )
}

export default App
