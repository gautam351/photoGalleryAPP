import {React,useEffect,useState} from 'react'

import axios from "axios";

import "./Home.css"
import Cardimg from './Cardimg';
const Home = () => {
  const [gallery, setGallery] = useState();
  useEffect(() => {
   const getData=async()=>{
     const {data}= await axios.get("/api/v1/");
     setGallery(data.galleryItems);
     
     
   }
   getData();
   
  }, [])
 
    return (
      <>
       <div className="header">PHOTO GALLERY</div>
       <div className="photos">
       
       {gallery?.map(e=>{
         
       return  <Cardimg data={e.ImgUrl} id={e._id} ></Cardimg>
       })}
   
       </div>
      </>
     
     
   
     )
  


}

export default Home