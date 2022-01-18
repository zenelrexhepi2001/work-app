import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
//Components
import LaunchItems from "../card-items/launch-items.component";
import Spinner from "../spinner/spinner.component";
//Styles
import { FlexBoxContainer, TitleCenter } from "../../styles/Flexbox.styles";


//obj GET_QUERY
const GET_QUERY = gql`
  {
    ships {
      id
      name,
      home_port
      image,
    }
  }
`;

const Launch = () => {
  const { data,error } = useQuery(GET_QUERY);
  const [loading,setLoading] = useState(true);

  setTimeout(() => {
        setLoading(false);
        if(error) return <pre>Error</pre>
  },2500);

  return loading ? (<Spinner/>) : (
    <>
    <TitleCenter>SpaceX App</TitleCenter>
    <FlexBoxContainer>
      {data.ships.map((launch) => (
            <LaunchItems key={launch.id} launch={launch}/>
      ))}
    </FlexBoxContainer>
    </>
  );
};

export default Launch;
