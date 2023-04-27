import React, { useState } from "react"
import "./listItem.scss"
import { BsFillPlayFill } from "react-icons/bs"
import { MdAdd } from "react-icons/md"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"

export default function ListItem(index) {
  const [isHovered, setIsHovered] = useState(false)
  const trailer = "https://www.youtube.com/watch?v=Ruyl8_PT_y8"
  return (
    <div
      className="listItem"
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
              <BsFillPlayFill />
              <MdAdd />
              <AiOutlineLike />
              <AiOutlineDislike />
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
