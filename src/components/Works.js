import React from 'react';
import { forwardRef } from "react";
import styles from './Works.module.css'
import app_styles from'../App.module.css'
const Works = forwardRef((props, ref) =>{
  return (
    <div ref={ref} className={styles.Works}>
      <h1 className={app_styles.section_name}>Works</h1>
      <div className={styles.grid_container}>
        <div className={styles.grid_item}>
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
        <div className={styles.grid_item}>
          <iframe src="https://www.youtube.com/embed/TCy32QcjJtM" title="EndlessDrive" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
        <div className={styles.grid_item}>          
        <iframe src="https://www.youtube.com/embed/mUso8G_TEcc" title="PARIDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
        </div>  
        {/* <div className={styles.grid_item}>         
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
        <div className={styles.grid_item}>          
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
          </div>  
        <div className={styles.grid_item}>          
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe></div>
        <div className={styles.grid_item}>          
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div>
        <div className={styles.grid_item}>
          <iframe src="https://www.youtube.com/embed/qf_tlLK8_YU" title="Unreal Stealth" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </div> */}
      </div>
    </div>
  )
});

export default Works;