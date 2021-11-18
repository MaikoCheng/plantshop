import * as React from 'react';
import styled from 'styled-components';
import Video from './videos/video.mp4';

export interface IBodyProps {
}

const Videoalia = styled.video`
    top:0;
    z-index: -1;
    width: 100%;
    height: 100%;

    -o-object-fit: cover;
    object-fit: cover;
    background-color: black;
`

const Wrapper = styled.div`
    top:0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`

const VideoWrap = styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const TextWrap = styled.div`
    position: absolute;
    z-index: 3;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width:1200px;
`
const Maintext = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 48px;
    color:white;
`
export default function Body (props: IBodyProps) {
  return (
    <Wrapper>
        <VideoWrap>
            <Videoalia autoPlay loop muted src={Video}/>
        </VideoWrap>
        <TextWrap>
            <Maintext>Are you looking for plants?</Maintext>
            <Maintext>You're at the right place.</Maintext>
        </TextWrap>
    </Wrapper>
  );
}
