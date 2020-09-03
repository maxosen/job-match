import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{'display': 'flex', 'justifyContent': 'space-between', 'padding': '4rem'}}>
      <h1 style={{'fontWeight': '400'}}>Job match</h1>
      <input style={{'borderRadius': '10px'}}></input>
    </div>

  )
}
