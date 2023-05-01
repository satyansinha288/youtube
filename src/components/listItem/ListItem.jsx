import React, { useState } from "react"
import "./listItem.scss"
import { BsFillPlayFill } from "react-icons/bs"
import { MdAdd } from "react-icons/md"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"

export default function ListItem(index) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"

  return (
    <div
      className="listItem"
      // @ts-ignore
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <BsFillPlayFill className="icon" />
              <MdAdd className="icon" />
              <AiOutlineLike className="icon" />
              <AiOutlineDislike className="icon" />
            </div>
            <div className="itemTopInfo">
              <span>1hrs 34mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum officia blanditiis dolores
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}
