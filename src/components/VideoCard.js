import React from 'react'

function formatNumber(number) {
    if (number < 1000) {
      return number.toString();
    } else if (number < 1000000) {
      return (number / 1000).toFixed(2) + 'K';
    } else {
      return (number / 1000000).toFixed(2) + 'M';
    }
  }

const VideoCard = ({info}) => {
    console.log(info)
    const { snippet, statistics } = info;
    const {title, channelTitle, thumbnails} = snippet;
    const {viewCount} = statistics;


    return (
    <div className='p-2 m-2 w-72 shadow-lg'>
        <img alt="thumbnail" className='rounded-lg' src={thumbnails.medium.url}  />

        <ul>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount}</li>
        </ul>
       
     

    </div>
  )
}

export default VideoCard