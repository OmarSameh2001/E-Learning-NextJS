"use client";
import Link from "next/link";

import React from "react";

// export async function getServerSideProps() {}

export default async function GoalKeep() {
  const EndPoint = "https://youtube.googleapis.com/youtube/v3/playlists";
  const key = "AIzaSyDZoiIXQEX2iNVjpbSD8lhfM3JJVaII9X0";
  
  //const key = process.env.API_KEY
  //console.log(key)
  
  async function getData() {
    try {
      const res = await fetch(
        `${EndPoint}?channelId=UCB-ePKJsjZnSzzghga21OpQ&maxResults=15&part=snippet&key=${key}`
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
  
  const data = await getData();
  console.log(data);
  return (
    <div className="min-vh-100 mx-auto">
      <h1 className="d-flex justify-content-center my-5">GoalKeeping:</h1>

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
                {item?.snippet?.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
