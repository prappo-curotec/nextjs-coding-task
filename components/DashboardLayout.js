import React from "react";
import Image from "next/image";
import styled from "styled-components";
import px2vw from "./px";
import Button from "./Button";

export const Section = styled.div`
  background: #111111;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  margin-right: 20px;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(100, 100)};
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  height: 100%;
  @media (min-width: 591px) and (max-width: 1020px) {
    order: ${({ id }) => (id === "second" ? 1 : 2)};
  }
  @media (max-width: 590px) {
    width: 100%;
    min-height: ${px2vw(20, 20)};
    height: 20%;
    margin: 8px;
    align-items: center;
    order: ${({ id }) => (id === "second" ? 1 : 2)};
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
    order: ${(id) => (id === "second" ? 1 : 2)};
  }
`;

export const BoxTitle = styled.h3`
  font-family: -OC Rey;
  font-style: normal;
  line-height: 109%;
  margin-bottom: 0px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
  @media (max-width: 590px) {
    font-family: "-OC Rey";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 120%;
    /* or 48px */
    color: #ffffff;
  }
  @media (min-width: 1024px) {
    font-weight: 400;
    font-size: 65px;
  }
`;

export const BoxText = styled.p`
  font-family: Wigrum;
  font-style: normal;
  line-height: 130%;
  color: #ffffff;
  @media (max-width: 590px) {
    font-family: "Wigrum";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */
  }

  color: #ffffff;
  @media (min-width: 1024px) {
    font-weight: 400;
    font-size: 18px;
  }
`;

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function DashboardLayout({ ...props }) {
  return (
    <Section>
      <Container>
        <Box id="first">
          <BoxTitle>Future-proof your business. WiFi 6E is here.</BoxTitle>
          <BoxText>
            Offer your customers the fastest performance possible with Plume.
            They’re ready.
          </BoxText>
          <Button custom="custom-button" width="300">
            Learn more about WiFi 6E
          </Button>
        </Box>
        <Box id="second">
            <Image
              src={'/image.svg'}
              width={800}
              height={800}
              loader={myLoader}
              alt="loading..."
            />
        </Box>
      </Container>
    </Section>
  );
}
