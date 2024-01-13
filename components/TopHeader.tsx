"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {MouseEventHandler} from "react";

export default function TopHeader({title}: { title: string }) {
  const unknownWindow = typeof window !== 'undefined' ? ((window as unknown) as any) : undefined;
  const onReturn: MouseEventHandler = (e) => {
    if(unknownWindow.android) {
      unknownWindow.android.goBack()
    }
  }
  return <div className={"flex flex-row justify-between items-center w-screen py-3"}>
    {unknownWindow ? <div className={"px-3"} onClick={onReturn}>
      <FontAwesomeIcon color={"blue"} icon={faChevronLeft} className={"text-white text-base"}/>
    </div> : <div className={"w-8"}/>}
    <a className={"text-center text-base text-white"}>
      {title}
    </a>
    <div className={"w-8"}/>
  </div>
}
