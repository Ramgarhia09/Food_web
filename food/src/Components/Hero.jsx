import React, { useEffect } from 'react'
import {useState} from 'react'
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Hero = () => {
  
    const imgDAta = [
        {
        url:'https://img.freepik.com/premium-photo/burgers-fries-generative-ai_73944-30872.jpg?w=1400',
        },
        {
            url:'https://domf5oio6qrcr.cloudfront.net/medialibrary/9696/iStock-647133812.jpg',
        },
        {
            url:'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg',
        },
        {
            url:"https://ik.imagekit.io/shortpedia/Voices/wp-content/uploads/2021/03/Momos-in-Tibet.jpg"
        },
        
    ];
     const [slider, setSlider] = useState(0);


    const handlePlus = () =>{
 setSlider(slider === imgDAta.length-1?0:slider+1)
    }

    const handleMinus = () =>{
        setSlider(slider == 0?imgDAta.length-1:slider-1)
    };

     useEffect(()=>{
 const sliderClear =  setInterval(()=>{
    handlePlus();
  },2000)
   return() => clearInterval(sliderClear);
     },[slider]) 

    return(
        <>
        <div className='mt-[100px]'>
            < div className='w-[100%] mx-auto h-[70vh] my-5 relative '> 
{
    imgDAta.map((item,i)=>(
     <div key={i} className={`${slider === i? "block":"hidden "}`}>
            <img src={item.url} alt='' className='w-full h-[70vh] rounded-2xl object-cover'/>

     </div>
    
       )   )
}
<div className='w-full mx-auto h-[70vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl '></div>
         </div>
<div className='absolute w-full text-[20px] md:text-[30px] top-[50%] text-center  font-semibold text-white flex justify-center'>
         <p className=''>Welcome To Ramgarhia Frozen <span className='text-[#681f9a]'>ℱℴℴ𝒹</span></p>
         </div>
            <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
            <FaAngleLeft  size={30} className='cursor-pointer' onClick={handleMinus}/>
            <FaAngleRight size={30} className='cursor-pointer' onClick={handlePlus}/>
            </div>
          </div>  
          </>
    )
}



export default Hero