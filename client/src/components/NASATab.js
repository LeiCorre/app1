import React from "react";

function NasaTab () {

    let [data, setData] = React.useState(null);
    const key = process.env.REACT_APP_NASA_API

    React.useEffect(() => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=" + key, { method: "GET", headers: { "content-type": "application/json",
        "accept": "application/json"}
    })
          .then((res) => { 
              if (res.ok) {
                return res.json() 
              } 
              throw res
            })
          .then((data) => setData(data))
          .catch((err) => console.error("Error fetching data: ", err))
      }); 

    return (
        <div className='NasaTab-Main'>
            NASA Content will Appear here!
            {data}
        </div>
    )
}

export default NasaTab;