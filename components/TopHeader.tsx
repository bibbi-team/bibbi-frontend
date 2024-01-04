"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {MouseEventHandler} from "react";

export default function TopHeader({title}: { title: string }) {
  const onReturn: MouseEventHandler = (e) => {
    history.back();
  }
  return <div className={"flex flex-row justify-between items-center w-screen py-3"} onClick={onReturn}>
    <div className={"px-3"}>
      <FontAwesomeIcon color={"blue"} icon={faChevronLeft} className={"text-white text-base"}/>
    </div>
    <a className={"text-center text-base text-white"}>
      {title}
    </a>
    <div/>
  </div>
}
