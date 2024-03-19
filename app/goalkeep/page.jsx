import Link from "next/link";
import React from "react";


export default async function GoalKeep() {
  const EndPoint = "https://youtube.googleapis.com/youtube/v3/playlists";
  const key = process.env.API_KEY
  
  
  async function getData() {
    try {
      const res = await fetch(
        `${EndPoint}?channelId=UCB-ePKJsjZnSzzghga21OpQ&maxResults=15&part=snippet&key=${key}`, { next: { revalidate : 100 } }
      );
      const { items } = await res.json();
      //console.log(items);
      console.log(items[4].snippet.localized.description);
      return {
        items,
      };
    } catch (error) {
      console.log(error);
    }
  }
  
  const data = await getData();
  //console.log(data);
  return (
    <div className="min-vh-100 mx-auto">
      <h1 className="d-flex justify-content-center my-5" style={{textDecoration: "underline"}}>GoalKeeping:</h1>

      <div
        className="card-container d-flex justify-content-center"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {data?.items?.map((item) => (
          <div
            className="card col-md-3 m-3"
            key={item.id}
            
          >
            <Link
              href={`/goalkeep/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img src={item.snippet.thumbnails.high?.url} alt="Thumbnail" className="card-img" />
              <h2 className="card-title text-center mt-2">
                {item.snippet.title}
              </h2>
              <p className="card-text text-center">
                {item.snippet?.description }
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
