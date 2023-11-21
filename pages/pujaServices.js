
// import React, { useState } from "react";
// import PujaServices from "../src/screens/puja services/PujaServices";
// import { fetchDataFromApi } from "../utils/api";

// export default function pujaServices({ services }) {

//   return (
//     <div> 
//       <PujaServices services={services} />
      
//     </div>
//   );
// }

// export async function getStaticProps() {
//     const services = await fetchDataFromApi('/api/services?populate=*');

//     return {
//         props: {services}
//     }
// }


import { gql } from "@apollo/client";
import React from "react";
import apolloClient from "../lib/apolloClient";
import PujaServices from "../src/screens/puja services/PujaServices";

function pujaServices({ data }) {
  // console.log(data);
  return (
    <div>
      <PujaServices data={data} />
    </div>
  );
}

export default pujaServices;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query MyQuery {
        poojaServicesPages {
          bannerImage {
            url
          }
        }
        servicePages {
          slug
          name
          description
          cities {
            name
          }
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};


