import divide from '../src/assets/pattern-divider-desktop.svg'
import dice from '../src/assets/icon-dice.svg'
import { useState } from 'react'

function App() {
  const [advice,setAdvice] = useState('')
  const [adviceFetched, setAdviceFetched] = useState(false);
  const  [id, setId] = useState(0)

 function getAdvice(){

  fetch('https://api.adviceslip.com/advice')
  .then(res=>{
   return res.json()
  })
 .then(data=>{
   setAdvice(data.slip.advice)
   setId(data.slip.id)
   setAdviceFetched(true)
 })
 .catch(error => {
  alert('Error fetching advice:', error);
})
 } 
  


  return (
    <>
   <div className="container">
     {adviceFetched?<h3>Advice #{id}</h3>:<h3>Advice #117</h3>}
      { adviceFetched?<p>&quot;{advice}&quot;</p>:<p>It is easy to sit up and take notice, whats difficult is standing up and taking action</p>}
  
   <img className='divide'src={divide} alt="A divider"/>
   <div className='dice' onClick={getAdvice}>
    <img  src={dice} alt='dice to randomize advice'/>
  </div>
  

  
  
  </div>
 </>
  )
}

export default App
