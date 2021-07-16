import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width:100%;
  height:100%;
  overflow-y:auto;
  overflow-x:hidden;
  position:relative;
`

const AppContent = styled.div`
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  background-size:cover;
  width:100%;
  height:70vh;
`

const ContentSection = styled.div`
  ${props=> `
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:100%;
    min-height:30vh;
    border-bottom:0.1vh solid black;
    background-color: #2b2c30;
    ${props.styles}
  `}

`

const ContentTitleWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  height:10vh;
  width:calc(39vw);
`

const ContentTitle = styled.h1`
  ${props=> `
    font-weight:400;
    width:max-content;
    ${props.styles}
  `}

`

const ContentText = styled.span`
  ${props =>`
  display:flex;
  font-size:2vh;
  ${props.styles}
  `}
`

const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  min-width:45%;
  margin-top:1%;
`

const ContentBox = styled.div`
  display:flex;
  margin:1%;
  border:0.3vh solid white;
  min-width:50%;
  padding:1%;
`

const LanguageList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-height:25vh;
  overflow-y:auto;
  margin-top:2vh;
`

const LanguageLink = styled.a`
  display:flex;
  text-decoration:none;
  justify-content:center;
  margin-bottom:1vh;
  font-style:italic;
  cursor:pointer;
  transition: text-shadow 0.2s ease-in-out;
  &:hover{
    text-shadow: 0px 0px 10px white;
  }
`


function Aboutme(props) {

  return (
    <Wrapper>
      <AppContent>
        <ContentTitleWrapper>
          <ContentTitle> About me </ContentTitle>
        </ContentTitleWrapper>
        <ContentSection styles={"flex-direction:row; justify-content:space-between;color:white;"}>
          <ContentBox>
            <ContentText >About me </ContentText>
          </ContentBox>
          <ContentWrapper>
            <ContentText styles={"width:100%;height:min-content;justify-content:center;"}>Knowledge</ContentText>
            <LanguageList>
                <LanguageLink > JAVA </LanguageLink>
                <LanguageLink > PHP </LanguageLink>
                <LanguageLink > C# </LanguageLink>
                <LanguageLink > PYTHON </LanguageLink>
                <LanguageLink > JAVASCRIPT </LanguageLink>
                <LanguageLink > HTML </LanguageLink>
                <LanguageLink > CSS3 </LanguageLink>
                
            </LanguageList>
          </ContentWrapper>
        </ContentSection>
      </AppContent>
    </Wrapper>
  );
}

export default Aboutme;
