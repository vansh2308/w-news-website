import React from 'react'
import img1 from "./../assets/image-retro-pcs.jpg"
import img2 from "./../assets/image-top-laptops.jpg"
import img3 from "./../assets/image-gaming-growth.jpg"

const footer_list = [
  {
    img: img1,
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?"
  },
  {
    img: img2,
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?"
  },
  {
    // img: require( "./../assets/image-gaming-growth.jpg"),
    img: img3,
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?"
  }

]


export default function Footer(props){
  return (
    <div className='w-full h-fit my-10 mt-16 flex footer justify-between'>
      
      {
        footer_list.map((item, idx) => {
          // console.log(ite)
          return(
            <FooterItem img={item.img} title={item.title} content={item.content} idx={idx} />
          )
        })
      }

      

      {/* <FooterItem img={img1} />
      <FooterItem img={img2} />
      <FooterItem img={img3} /> */}



    </div>
  )
}

const FooterItem = (props) => {
  return (
    <div className='flex w-1/3 footer-item pr-8'>
      <img src={props.img} className='h-40' />
      <div>
        <h3 className='text-greyl text-3xl font-bold'> {'0' + (props.idx +1)} </h3>
        <p className='font-bold my-3 text-base hover:text-orange footer-item-title'> {props.title} </p>
        <p className='font-medium text-greyd text-sm'>{props.content} </p>
      </div>
    </div>
  )
}
