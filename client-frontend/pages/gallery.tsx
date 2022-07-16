import type { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '../helpers/fetchhelper'

const Gallery: NextPage = () => {

    const {data,error} = useSWR("https://mck-joinery-glazing-backend.herokuapp.com/gallery",fetcher)
  
  return(
    <>
      <h1>MCK Joinery Glazing</h1>
      <p>{JSON.stringify(data)}</p>
    </>
    )
}

export default Gallery
