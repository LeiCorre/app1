import React from "react";

function EntertainmentTab () {

    let [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species", { method: "GET", headers: { "Content-Type": "application/json",
    "Accept": "application/json", "Cache-Control": "max-age=1800"}
})
      .then((res) => { 
          if (res.ok) {
            return res.json() 
          } 
          throw res
        })
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data: ", err))
  }, []); 


    return (
        <div className='EntertainmentTab-Main'>
            Entertainment Content will Appear here!
            {data}
        </div>
    )
}

export default EntertainmentTab;