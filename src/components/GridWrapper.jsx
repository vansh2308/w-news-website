import React from 'react'
import web3 from "./../assets/image-web-3-desktop.jpg"
import web3mobile from "./../assets/image-web-3-mobile.jpg"

const new_list = [
  {
    title: "Hydrogen vs Electric Cars",
    content: "Will hydrogen fueled cars ever catch up to EV?"
  },
  {
    title: "The Downsides of AI Aritstry",
    content: "What are the possible effects of on-demand AI image generation?"
  },
  {
    title: "Is VC Funding drying up?",
    content: "Private funding by VC firms is down 50% YOY. We take a look at what that means"
  },
  {
    title: "Is VC Funding drying up?",
    content: "Private funding by VC firms is down 50% YOY. We take a look at what that means"
  },
  {
    title: "Is VC Funding drying up?",
    content: "Private funding by VC firms is down 50% YOY. We take a look at what that means"
  },

]

const RightPanel = (props) => {
  return (
    <div className='w-full bg-black right-panel p-8 text-white max-[850px]:max-h-[80vh] max-[850px]:mt-5'>
      <h2 className='font-bold text-4xl text-gold'> New </h2>

      {
        new_list.map((item) => {
          return (
            <NewItem title={item.title} content={item.content} />
          )
        })
      }

    </div>
  )
}

const NewItem = (props) => {
  return (
    <div className='h-fit w-full py-8 border-b border-[#cac9cf78] new-item'>
      <h4 className='font-medium text-lg text-white hover:text-gold'>
        {props.title}
      </h4>
      <p className='font-light text-sm text-greyl mt-4'> {props.content} </p>
    </div>
  )
}

const GridWrapper = () => {
  return (
    <div className='w-full mt-10 grid-wrapper gap-8 max-[850px]:flex max-[850px]:flex-col max-[850px]:h-max max-[850px]:mt-5'>
      <div className="img-container w-full col-start-1 col-end-3 max-[850px]:hidden "></div>

      <img src={web3mobile} className='w-full aspect-square hidden max-[850px]:block' />

      <div className='h-full min-h-fit col-start-1 col-end-2 row-start-2 row-end-4'>
        <h2 className='font-black text-5xl leading-20 max-[850px]:text-4xl'> The Bright Future of Web 3.0?</h2>
      </div>

      <div className='h-full min-h-fit col-start-2 col-end-3 row-start-2 row-end-4 flex flex-col justify-between'>
        <p className='text-md text-greyd max-h-5/6 mb-8 w-5/6 max-[850px]:w-full max-[850px]:mb-5'>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it's promise ?
        </p>
        <button className='w-fit px-6 py-3 bg-black text-white text-xs tracking-widest'> READ MORE </button>
      </div>

      <RightPanel />







    </div>
  )
}




export default GridWrapper
