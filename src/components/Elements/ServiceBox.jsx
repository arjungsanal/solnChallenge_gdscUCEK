import React from "react";
import styled from "styled-components";
// Assets
import FoodIcon from "../../assets/svg/Services/Food.jsx";
import AnonymusIcon from "../../assets/svg/Services/Anonymous.jsx";
import NgoIcon from "../../assets/svg/Services/NGO.jsx";
import OpenSourceIcon from "../../assets/svg/Services/OpensSource.jsx";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "food":
      getIcon = <FoodIcon />;
      break;
    case "anonymus":
      getIcon = <AnonymusIcon />;
      break;
    case "ngo":
      getIcon = <NgoIcon />;
      break;
    case "open":
      getIcon = <OpenSourceIcon />;
      break;
    default:
      getIcon = <FoodIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;