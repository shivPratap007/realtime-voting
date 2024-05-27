interface PageProps{
    params:{
        topic:string
    }
}
const Page = ({params}:PageProps) => {
  return (
    <div>{params.topic}</div>
  )
}

export default Page