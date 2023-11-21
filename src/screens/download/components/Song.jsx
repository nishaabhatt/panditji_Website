
import React, { useState } from "react";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import { Container } from "@mui/material";

function Song({ downloadsData }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  // const handlePlay = (index) => {
  //   setCurrentSongIndex(index);
  // };

  const handlePlay = (index) => {
    console.log("Playing song at index:", index);
    setCurrentSongIndex(index);
  };

  return (
    <div>
      <Container>
      {downloadsData.map((downloadPage) => (
        <div key={downloadPage.id} className=" mb-10 pb-10">
          {downloadPage.song.map((song, id) => (
            <div key={song.id} className="w-full mt-12 h-full md:h-[150px] flex justify-between items-center px-2 md:px-10  bg-slate-100 hover:bg-primary">
              <div className="flex w-full md:w-1/2 mb-2">
                {/* Your image code here */}
                <div className="mx-1 md:mx-5">
                  <p className="text-base md:text-xl font-semibold text-secondary">
                    {song.name}
                  </p>
                  
                  <p className="text-base md:text-lg text-footerPrimaryColor">
                    {song.godName}
                  </p>
                  <p className="text-sm text-footerPrimaryColor">{song.time}</p>
                </div>
              </div>
             
             <Container>
              <AudioPlayer
                              autoPlay={false}
                              showSkipControls
                              showFilledVolume
                              autoPlayAfterSrcChange
                              src={song.song.url}
                              onPlay={(e) => console.log("onPlay")}
                              className="rounded-xl w-[30px]"
              />
              
              </Container>
            </div>
          ))}
        </div>
      ))}
      </Container>
    </div>
  );
}

export default Song;


