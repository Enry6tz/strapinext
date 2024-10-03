
import { getHomeInfo } from '@/lib/get-home-info'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'



export const Hero = async () => {
  const {title ,description,  image} = await getHomeInfo()
  console.log(image)
  return (
    <div>
      <h1>{title}</h1>
      <div className='[&>p>strong]:font-bold'>
      <BlocksRenderer content={description}></BlocksRenderer>
      </div>
      <p>{image}</p>
    </div>
  )
}
