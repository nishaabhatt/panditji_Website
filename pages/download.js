// import React from "react";
// import Download from "../src/screens/download/Download";

// function download() {
//   return (
//     <div>
//       <Download />
//     </div>
//   );
// }

// export default download;

// // download.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";
import Download from '../src/screens/download/Download';

const  { data } = await apolloClient.query({
  query: gql`
  query MyQuery {
    downloadsPages {
      id
      playing {
        songName
      }
      playlist {
        id
      }
      song {
        name
        id
        godName
        time
        song {
          url
        }
      }
    }
  }
`,
});
function DownloadPage() {


  const downloadsData = data.downloadsPages;

  return (
    <div>
      {/* Pass the fetched data to the Download component */}
      <Download downloadsData={downloadsData} />
    </div>
  );
}

export default DownloadPage;


