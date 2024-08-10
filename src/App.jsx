import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import {motion} from 'framer-motion';


const App = () => {
  
  const transition = { 
    duration: 3, ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" 
  };
  return (
    <div className="App">
      <motion.div
        className='svg-img'
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ ...transition, type: 'tween' }}>
          
        <img src="./icons8-bootstrap.svg" alt="" />
      </motion.div>
      <motion.div
        className='svg-img'
        initial={{ y: -20 }}
        animate={{ y: 10 }}
        transition={{ ...transition, type: 'tween' }}
        >
        <img src="./icons8-html.svg" alt="" />
      </motion.div>
      <motion.div
        className='svg-img'
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ ...transition, type: 'tween' }}
        >
        <img src="./icons8-react-native.svg" alt="" />
      </motion.div>
      <motion.div
        className='svg-img'
        initial={{ y: -20 }}
        animate={{ y: 10 }}
        transition={{ ...transition, type: 'tween' }}
        >
        <img src="./icons8-redux.svg" alt="" />
      </motion.div>
      <motion.div
        className='svg-img'
        initial={{ y: -20 }}
        animate={{ y: 40 }}
        transition={{ ...transition, type: 'tween' }}
        >
        <img src="./icons8-sass.svg" alt="" />
      </motion.div>
      <motion.div
        className='svg-img'
        initial={{ y: -10 }}
        animate={{ y: 60 }}
        transition={{ ...transition, type: 'tween' }}
        >
        <img src="./icons8-tailwind-css.svg" alt="" />
      </motion.div>
          
         
      <Header/>
      <Body/>

    </div>
  )
}

export default App