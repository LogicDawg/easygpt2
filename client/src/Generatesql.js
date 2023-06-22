import styles from './index.module.css'
import sqllogo from './assets/sql-logo.png'

import { useState } from 'react'

const GenerateSQL= () => {
  const [queryDescription, setQueryDescription] = useState("")
  const [sqlQuery, setSqlQuery]= useState("")

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedQuery = await generateQuery()
    setSqlQuery(generatedQuery)
    console.log("Returned from Sserver: ", generatedQuery)
  }
  
  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/ai_calls/generatesql",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({queryDescription: queryDescription})
    });

    const data = await response.json()
    return data.response.trim();
  }
  return (
   <main className={styles.main}>
    <img src={sqllogo} alt='sqllogo' className={styles.icon}/>
    <h3>Generate SQL with AI</h3>

    <form onSubmit={onSubmit}>
      <input 
        type='text'
        name='query-description'
        placeholder='Describe Query'
        onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type='submit' value="Generate query"/>
        <pre>{sqlQuery}</pre>
    </form>
   </main>
  )
}

export default GenerateSQL;