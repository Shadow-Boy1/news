import React, { useState } from 'react'


export default function App() {
  const [news, setnews] = useState([]);
  const [data, setdata] = useState("");

  const fetched = () => {

    const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=cf808ef7895a403a96a790089d34119c";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setdata(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };




  return (
    <>
      <input type="text"
        placeholder='Enter the news'
        value={news}
        onChange={(e) => setnews(e.target.value)}
      />
      <button onClick={fetched}>Getnews</button>
      {
        data && data.map((element) => {
          return (
            <div className="card" style={{ width: "400px", height: "500px", marginLeft: "4em" }}>
              <img src={element.urlToImage} style={{ width: "20rem", height: "20em" }} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{element.author}</h5>
                <p className="card-text" style={{ width: "400px", height: "400px", font: "bold" }}>{element.content}</p>
                <a href={element.url} className="btn btn-primary">Read More</a>
              </div>
            </div>



          )
        })
      }
    </>


  )
}
