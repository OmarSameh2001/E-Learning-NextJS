"use client";
import React from "react";

export default async function PlayListItems({ params }) {
    let view = null
  const id = params.id;
  async function getData() {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=${id}&part=snippet&key=AIzaSyDZoiIXQEX2iNVjpbSD8lhfM3JJVaII9X0`
      );
      const { items } = await res.json();
      console.log(items);
      console.log(items[0].snippet.title);
      return {
        items,
        revalidate: 1000,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async function getName() {
    try {
        const res = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlists?id=${id}&maxResults=15&part=snippet&key=AIzaSyDZoiIXQEX2iNVjpbSD8lhfM3JJVaII9X0`
        );
        const { items } = await res.json();
        console.log(items);
        
        return {
          items,
          revalidate: 1000,
        };
      } catch (error) {
        console.log(error);
      }
    
  }

  const name = await getName();
  const data = await getData();
  console.log(data);
  return (
    <div className="min-vh-100 row mx-auto">
      <h1>{name?.items[0]?.snippet?.title}</h1>
        <p>{name?.items[0]?.snippet?.description}</p>
        <div className="col-md-9">
            {!view ? <iframe src="https://www.youtube.com/embed?listType=playlist&list=${id}" className="w-100 min-vh-100"></iframe> : view}
        
      </div>
      <div className="d-flex flex-wrap col-md-3 justify-content-center">
        {data?.items?.map((item) => (
          <div className="card m-1" key={item.id} style={{ width: "18rem" }}>
            <div className="row no-gutters" onClick={() => view = item.snippet.resourceId.videoId}>
              <div className="col-md-4  p-0">
                <img
                  src={item.snippet.thumbnails.default.url}
                  className="card-img"
                  alt="Item Image"
                />
              </div>
              <div className="col-md-8 p-0">
                <p className="card-title px-3">{item.snippet.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
