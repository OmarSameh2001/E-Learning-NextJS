import React from "react";
import List from "./list";

export default async function PlayListItems({ params }) {

  let view = null;
  const api = process.env.API_KEY;
  const id = params.id;
  async function getData() {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=50&playlistId=${id}&part=snippet&key=${api}`
      );
      const { items } = await res.json();
      return {
        items,
      };
      
    } catch (error) {
      console.log(error);
    }
  }
  async function getName() {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?id=${id}&maxResults=15&part=snippet&key=${api}`
      );
      const { items } = await res.json();
      //console.log(items);

      return {
        items,
      };
    } catch (error) {
      console.log(error);
    }
  }
  const handleClick = (id) => {
    return () => {
      view = (
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          className="w-100 min-vh-100"
        ></iframe>
      );
    };
  };

  
  const name = await getName();
  const data = await getData();
  //console.log(data);
  return (<List datas={data} id={id} name={name}/>
    
  );
}
