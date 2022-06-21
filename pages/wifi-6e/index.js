import Image from 'next/image';
import styled from "styled-components";

import pngImage from "../../components/assets/img/wifi-6e/mobile-banner.png";

const SubContainer = styled.div`
display: flex;
align-items: center;
height: 100vh;
.img-conatiner {
  @media screen and (max-width: 500px) {
    img {
      height: 100%;
      width: 100%;
      position: relative !important;
    }
  }
  @media screen and (max-width: 1050px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@media screen and (max-width: 500px) {
  flex-direction: column-reverse;
 }
}
`

const Container = styled.div`
justify-content:center;
 background-color: #111111;
 width:100%;
 height: 100%;
 display:flex;
 overflow:hidden;
 @media screen and (max-width: 500px) {
  justify-content: space-evenly;
 }
`
const LeftContainer = styled.div`
 color: #FFFFFF;
 font-weight: 400;
 width: 51%;
 padding-left: 89px;
 @media screen and (max-width: 500px) {
  width: 80% !important;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  margin-top: 0px !important;
  margin-left: 0px;
  padding-left: 0px;
 }
 @media screen and (max-width: 1050px) {
  width: 53%;
  padding-left: 24px;
}
`
const Heading = styled.div`
 font-family: '-OC Rey';
 font-size: 72px;
 display: inline-block;
 width: 40vw;
 max-width: 30rem;
 min-width: 29rem;
 @media screen and (max-width: 500px) {
   font-size: 1.5rem;
   width: 100%;
   margin-top:0;
   min-width: unset;
 }
 @media screen and (max-width: 1050px) {
  font-size: 1.5rem;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
 }
`

const SubHeading= styled.div`
font-family: 'Wigrum';
 display: flex;
 width: 30vw;
 font-size: 18px;
 padding-top: 31px;
 max-width: 21rem;
 min-width: 21rem;
 @media screen and (max-width: 500px) {
    width: 100%;
    min-width: unset;
 }
`
const ImageSection = styled.div`

`

const Button = styled.button`
 color: #FFFFFF;
 margin-top: 30px;
 height:40px;
 background: #656CFF;
 border-radius: 30px;
 font-family: 'Wigrum';
 font-size: 18px;
 padding:10px 20px;
 cursor:pointer;
 display: flex;
 width: auto;
 border:none;
 @media screen and (max-width: 500px) {
  width: 100%;
  justify-content: center;
}
`

const Wifi6E = () => {
  return (
    <Container>
      <SubContainer>
      <LeftContainer>
        <Heading>
       Future-proof your business. WiFi 6E is here.
       </Heading>
       <SubHeading>
       Offer your customers the fastest performance possible with Plume. They’re ready.
       </SubHeading>
       <Button>
      Learn more about WiFi 6E
       </Button>
      </LeftContainer>
      <div className='img-conatiner'>
        <Image src={pngImage} alt= "image" layout="raw" />
      </div>
      </SubContainer>
    </Container>
  )
}

export default Wifi6E;
