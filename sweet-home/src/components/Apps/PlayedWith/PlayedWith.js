import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
`

const AppContent = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
    height:100%;
`

const SectionContent = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
    height:65.7vh;
`

const ContentColumn = styled.div`
    ${props =>`
        display:flex;
        align-items:center;
        flex-direction:column;
        width:50%;
        height:100%;
        ${props.styles}
    `}
`

const TitleContent = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    margin-top:2vh;
    margin-bottom:2vh;
    font-size:2.3vh;
    padding:0.5vh;
    width:90%;
    height:auto;
    border-radius:0.5vh;
    background-color:white;
    box-shadow: 0 0 3vh 0.1vh rgba(101,102,103,0.3);
`

const List = styled.ul`
`

const ItemLi = styled.li`
`

const TextContent = styled.span``

function PlayedWith(props) {


    return (
        <Wrapper>
            <AppContent>
                <SectionContent>
                    <ContentColumn>
                        
                    </ContentColumn>
                    <ContentColumn styles={"border-left:0.1vh solid #393939;"}>
                        <TitleContent> Lenguajes o tecnologias que he usado </TitleContent>
                        <TextContent> 
                            <List>

                                <ItemLi>Processing</ItemLi>
                                <ItemLi>ReactJS</ItemLi>
                                <ItemLi>PHP</ItemLi>
                                <ItemLi>Javascript</ItemLi>
                                <ItemLi>JAVA</ItemLi>
                                <ItemLi>Python</ItemLi>
                                <ItemLi>Hiberante</ItemLi>
                                <ItemLi>Spring</ItemLi>
                                <ItemLi>C#</ItemLi>
                                <ItemLi>Unity 3D</ItemLi>
                                <ItemLi>Android Studio</ItemLi>
                                <ItemLi>HTML</ItemLi>
                                <ItemLi>CSS3</ItemLi>
                                <ItemLi>MySQL</ItemLi>
                                <ItemLi>MySQL Lite</ItemLi>
                                <ItemLi>Laravel</ItemLi>

                            </List>    
                        </TextContent>
                    </ContentColumn>
                </SectionContent>

            </AppContent>
        </Wrapper>
    );
}

export default PlayedWith;
