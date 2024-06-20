
import { IoMdClose } from "react-icons/io";

export default function MobileMenu({setMobileMenuDisplay}){
  return(
    <div className="w-screen h-screen fixed mobile-menu hidden max-[850px]:block top-0 left-0">
      <div className="w-[70%] bg-white absolute p-5 right-0 h-full flex flex-col">
        <IoMdClose className="self-end text-3xl cursor-pointer" onClick={() => setMobileMenuDisplay(false)} />

        <ul className="flex flex-col gap-5 mt-7">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </div>
  )
}