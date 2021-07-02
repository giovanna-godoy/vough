import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  
  @media (min-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  text-align: center;
  padding-top: 20px;
  color: #11637C;
  font-size: 2.5rem;
  text-align: center;
  
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  width: ${px2vw(180, 320)};
  min-height: ${px2vw(90, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  border-radius: ${px2vw(20)};
  border: solid ${px2vw(1)} #000000;
  box-shadow: 0 0 ${px2vw(14)} ${px2vw(6)} rgba(0,0,0,0.2);
  background-color: #ffffff;
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(250, 768)};
    min-height: ${px2vw(180, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(350)};
    min-height: ${px2vw(200)};
    height: 100%;
  }
`;

export const CardTitle = styled.h3`
  color: #167896;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  margin-top: ${px2vw(20)};
  color: #575757;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;