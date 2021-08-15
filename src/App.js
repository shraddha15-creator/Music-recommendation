import "./styles.css";
import { useState } from "react";
import songsData from "./songs.json";

export default function App() {
  var [genre, setGenre] = useState(songsData.lofi);

  function lofiMusicClickHandler() {
    setGenre(songsData.lofi);
  }

  function remixMusicClickHandler() {
    setGenre(songsData.remix);
  }

  function evergreenMusicClickHandler() {
    setGenre(songsData.evergreen);
  }

  function zumbaGymMusicClickHandler() {
    setGenre(songsData.zumba);
  }

  return (
    <div className="App">
      <h1 id="heading">Music Recommendation</h1>
      <p id="app-details">Checkout My Playlist. Select any Genre to listen!</p>

      <div className="genres">
        <button id="lofi" onClick={lofiMusicClickHandler}>
          Lofi Bollywood
        </button>
        <button id="remix" onClick={remixMusicClickHandler}>
          Bollywood Remix
        </button>
        <button id="evergreen" onClick={evergreenMusicClickHandler}>
          EverGreen
        </button>
        <button id="zumba-gym" onClick={zumbaGymMusicClickHandler}>
          Zumba or Gym
        </button>
      </div>
      <hr />

      <div className="fav-playlist">
        <ul className="playlist">
          {genre.map(function (playlist) {
            return (
              <a href={playlist.link}>
                <li
                  key={playlist.name}
                  styel={{
                    backgroundPosition: "top 30% center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1rem"
                  }}
                >
                  <div className="playlist-details">
                    <h1 id="playlis-name">{playlist.name}</h1>
                    <div id="artist">{playlist.artist}</div>
                    <div id="genre">Genre: {playlist.genre}</div>
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
