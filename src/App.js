import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [job , setJob] = useState([]) // ek const job jo empty array initialize kiye
  const [value, setValue] = useState('TOMMY') // value me company name pass kr diye qki isi se check krnge kon sa object hai isse related

  

  const fetchUrl = async () => { 
    const res = await fetch(url)
    const data = await res.json()
    setJob(data)
  }

  useEffect (() =>{
    fetchUrl()
  },[])
  // const axiosProfile = async (url) => { // yeh nh chal rha qki axiosProfile ko call nh kr rhe the isko call krne ke liye usefect me dalo
  //   const res = await axios.get(url)
  //   setIndex(res.data)
  // }

  // const{title, company, dates, duties} = job[value]

  const handleClick = (value) => { // handle click se value pass kiye jo yaha company name ke naam se pass ha fr filter kiye
    setValue(job.filter(item => item.company === value)) // yeh filter array dega jisme ek object hga so uska index automaticlly 0 ho jayega
      
  }

  // [
  //   {}, 0
  //   {} 1
  // ]

  return (
    <div className="App">
      <h1>Experience</h1>
      {/* {job.map((item) => ( */}
        <div className='container' >
        <div className='left'>
          <button onClick={() => {handleClick('TOMMY')}}>TOMMY</button>
          <button onClick={() => {handleClick('BIGDROP')}}>BIGDROP</button>
          <button onClick={() => {handleClick('CUKER')}}>CUKER</button>
          {/* id nh tha to company name pass kr diye */}
        </div>
        <div className='right'>
          <span className='title'>{value?.[0]?.title}</span>
            upar wale statement ka matlab niche hai
          {/* <span className='title'>{value && job[value].title}</span> */}
          <span className='company'>{value?.[0]?.company}</span>
          {/* value?.[0]?.company ka matlav value exit krta hai ya nh agr krta hai to value 0 assign kro aur uska company ka value do
          0 use kiye hai qki yaha index = value ka baat kr rhe h to jb filter ke baad array me ek object aayeha to uska index=value=0 hi hga */}
          <p className='dates'>{value?.[0]?.dates}</p>
          <p className='duties'>{value?.[0]?.duties}</p>
        </div>


        {/* <B  job={job[value]}/>  */}
        <button>More Info</button>
      </div>
       
      
      
    </div>
  );
}

export default App;
