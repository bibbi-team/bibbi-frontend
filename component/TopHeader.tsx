export default function TopHeader({title}: { title: string }) {
  return <div className={"flex flex-row justify-between items-center w-screen py-3"}>
    <div/>
    <a className={"text-center text-base"}>
      {title}
    </a>
    <div/>
  </div>
}
