import React from "react";

function MarvelPostBox () {

    const [data, setData] = React.useState(null);

    const key = process.env.REACT_APP_MARVEL_API;

    let offset = "offset=" + Math.floor(Math.random() * 1000) + "&"

    React.useEffect(() => {
      fetch("https://gateway.marvel.com:443/v1/public/characters?" + offset + key, { method: "GET", headers: { "content-type": "application/json",
    "accept": "application/json"}
  })
      .then((res) => res.json())
      .then((data) => setData(data))
      //.catch((err) => console.error("Error fetching data: ", err))
  }); 
  
    const num = Math.floor(Math.random() * 20)
    console.log(num)

    console.log(data)
    if (data != null)
    return (
        <div className='TrendingPostBox'>
            <div className='TrendingPostBox-name'>{data.data.results[num].name}</div>
            <div className='TrendingPostBox-date'>{data.data.results[num].description}</div>
            <div className='TrendingPostBox-pic' ><img className='TrendingPostBox-picture' src={data.data.results[num].thumbnail.path + ".jpg"} alt='' /></div>
            <div className='TrendingPostBox-title'></div>
        </div>
    )
    else return (
      <div>Still Loading...</div>
    )
}

export default MarvelPostBox;