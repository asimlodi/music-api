import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import Videos from './Videos'
import ChannelCard from './ChannelCard'

import { fetchFromApi } from '../utils/fetchFromApi'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])


  const { id } = useParams();

  console.log(channelDetail, videos)

  useEffect(() =>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));
      

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  },[id])


  return (
    <Box minHeight="95vh">
      <Box>
       <div 
        style={{ backgroundColor: '#FA8BFF',
               backgroundImage: 'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
               zIndex: 10,
               height: '300px'
           }}
       />

       <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
       </Box>
        <Box display="flex" p="2">
           <Box sx={{ mr: { sm : '100px' }}} />
               <Videos videos={videos}/>
       </Box>
    </Box>
  )
}

export default ChannelDetail