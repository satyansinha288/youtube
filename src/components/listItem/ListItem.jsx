import React from "react"
import "./listItem.scss"
import { BsFillPlayFill } from "react-icons/bs"
import { MdAdd } from "react-icons/md"
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai"

export default function ListItem() {
  return (
    <div className="listItem">
      <img
        src="https://letstalkcinemamovie.files.wordpress.com/2020/08/peaky-blinders.jpg"
        alt=""
      />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          officia blanditiis dolores similique voluptatem facilis numquam
          corrupti esse nisi! Vitae deserunt est molestiae quod debitis
          quibusdam saepe laborum nobis quo.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  )
}
