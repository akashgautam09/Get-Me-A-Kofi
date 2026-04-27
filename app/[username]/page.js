const page = ({params}) => {
  return (
    <div className="text-2xl font-bold">{params.username}</div>
  )
}

export default page