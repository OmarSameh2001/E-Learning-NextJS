"use client";
import React, { useState } from "react";

export default function List({ datas, id, name }) {

  let [view, setView] = useState(null);
  const data = datas;
  console.log(view);
  return (
    <div className="min-vh-100 row mx-auto">
      <h1>{name?.items[0]?.snippet?.title}</h1>
      <p>{name?.items[0]?.snippet?.description}</p>
      <div className="col-md-9">
        {!view ? (
          <iframe
            src={"https://www.youtube.com/embed?list=" + id}
            className="w-100 min-vh-100"
          ></iframe>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${view}`}
            className="w-100 min-vh-100"
          ></iframe>
        )}
      </div>
      <div className="d-flex flex-wrap col-md-3 justify-content-center">
        <div className="d-flex flex-wrap" style={{ overflowY: "scroll", maxHeight: "100vh" }}>
          {data?.items?.map((item) => (
            <div
              className="card m-1 col-md-4 px-1"
              key={item.id}
              style={{ width: "18rem", cursor: "pointer" }}
              onClick={() => setView(item.snippet.resourceId.videoId)}
            >
              <div className="row no-gutters">
                <div className="col-md-4 p-0">
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
    </div>
  );
}
