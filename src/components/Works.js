import React from 'react';
import { forwardRef, useState } from "react";
import { Link } from 'react-router-dom'
import styles from './Works.module.css'
import dashboard from '../images/MainWindow.jpeg';
import threejs from '../images/threejs.png';
import tictac from '../images/tictactoe.png';
import app_styles from'../App.module.css'

const Works = forwardRef((props, ref) =>{
  const [showAnimation, setShowAnimation] = useState(true);
  const [showWebdev, setShowWebdev] = useState(true);
  const [showGame, setShowGame] = useState(true);
  
  const toggleAnimation = () => {
    setShowAnimation(true);
    setShowGame(false);
    setShowWebdev(false);
  };
  const toggleWebdev = () => {
    setShowWebdev(true);
    setShowAnimation(false);
    setShowGame(false);
  };
  const toggleGame = () => {
    setShowGame(true);
    setShowAnimation(false);
    setShowWebdev(false);
  };
  const toggleAll = () => {
    setShowGame(true);
    setShowAnimation(true);
    setShowWebdev(true);
  };
  return (
    <div ref={ref} className={styles.Works}>
      <h1 className={app_styles.section_name}>Works</h1>
      <div className={styles.worksallbuttons}>
        <button className={!showAnimation&&!showGame&&showWebdev? styles.worksbuttonOn:styles.worksbutton} onClick={toggleWebdev}>Web Dev</button>
        <button className={!showAnimation&&showGame&&!showWebdev? styles.worksbuttonOn:styles.worksbutton} onClick={toggleGame}>Game & AR</button>
        <button className={showAnimation&&!showGame&&!showWebdev? styles.worksbuttonOn:styles.worksbutton} onClick={toggleAnimation}>Animation</button>
        <button className={showAnimation&&showGame&&showWebdev? styles.worksbuttonOn:styles.worksbutton} onClick={toggleAll}>All</button>
      </div>
      <div className={styles.grid_container}>
        {showGame ?
          <div className={styles.grid_item}>
            <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            <p className={styles.description}>Third Person Shooter game developed in Unreal Engine</p>
          </div>:<></>
        }
        {showGame ?
        <div className={styles.grid_item}>
          <iframe src="https://www.youtube.com/embed/TCy32QcjJtM" title="EndlessDrive" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
          <p className={styles.description}>Endless Runner game developed in Unity</p>
        </div>:<></>
        }
        {showGame ?
        <div className={styles.grid_item}>          
          <iframe src="https://www.youtube.com/embed/mUso8G_TEcc" title="PARIDA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
          <p className={styles.description}>AR applicationf or interior designing. Developed in Unity and ARFoundation</p>
        </div>  :<></>
        }
        {showWebdev ?
        <div className={styles.grid_item}>     
            <a href='https://github.com/ranjurave/NativeSoftwareDashboard' target='blank'> <img src={dashboard} alt = "screen"></img></a>
            <p className={styles.description}>Web API for ticket tracking developed in .Net</p>
        </div>:<></>
        }
        {showWebdev ?
        <div className={styles.grid_item}>     
            <Link to='/driveme' target='_self'> <img src={threejs}></img></Link>
            <p className={styles.description}>ThreeJS page</p>
        </div>:<></>
        }
        {showWebdev ?
        <div className={styles.grid_item}>     
            <Link to='/tictactoe' target='_self'> <img src={tictac}></img></Link>
            <p className={styles.description}>TicTacToe</p>
        </div>:<></>
        }
        {showWebdev ?
        <div className={styles.grid_item}>     
            <Link to='/todoapp' target='_self'> <img src={tictac}></img></Link>
            <p className={styles.description}>ToDo App</p>
        </div>:<></>
        }
        {showAnimation ?
        <div className={styles.grid_item}>          
          <iframe src="https://player.vimeo.com/video/200655338?h=44b1baff68" title="animation" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          <p className={styles.description}>Animation works demo</p>
        </div> :<></>
        } 
        {showAnimation ?
        <div className={styles.grid_item}>          
          <iframe src="https://player.vimeo.com/video/241484659?h=47b237f7fd" title="Modelling" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          <p className={styles.description}>Modelling works</p>
        </div> :<></>
        } 
        {showAnimation ?
        <div className={styles.grid_item}>          
          <iframe src="https://player.vimeo.com/video/235095959?h=96d7f0f01f" title="Rigging" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
          <p className={styles.description}>Rigging works</p>
        </div> :<></>
        }
      </div>
    </div>
  )
});

export default Works;