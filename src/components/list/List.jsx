// @ts-nocheck
import "./list.scss"
import React, { useRef } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import ListItem from "../listItem/ListItem"

import { useState } from "react"
// import { Directions } from "@material-ui/icons"

export default function List() {
  const [slideNumber, setSlideNumber] = useState(0)
  const [isMoved, setIsMoved] = useState(false)

  const listRef = useRef()

  //Pure React Slider
  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50

    if (listRef.current) {
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      } else if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1)
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
    }

    console.log(distance)
  }

  return (
    <>
      <div className="list">
        <span className="listTitle">Continue to watch </span>
        <div className="wrapper">
          <IoIosArrowBack
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{
              display: !isMoved && "none",
            }}
          />
          <div ref={listRef} className="container">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>

          <IoIosArrowForward
            className="sliderArrow right"
            onClick={() => handleClick("right")}
            // style={{ color: "red", fontSize: "50px" }}
          />
        </div>
      </div>
    </>
  )
}
