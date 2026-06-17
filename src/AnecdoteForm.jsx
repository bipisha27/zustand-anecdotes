import {useState} from 'react'
import { useAnecdoteActions } from './store'

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState('')
  const {addAnecdote} = useAnecdoteActions()

  const handleSubmit = (e) => {
    e.preventDefault()
    addAnecdote(newAnecdote)
    setNewAnecdote('')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        value = {newAnecdote}
        onChange = {(e) => setNewAnecdote(e.target.value)}
      />

      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm