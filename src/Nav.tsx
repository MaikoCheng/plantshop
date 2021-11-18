import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    background: black;
`

const Inner = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    justify-content: space-between;
`
const Button = styled.button`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    width: 100px;
    height:100%;
    background:transparent;
    border: none;
    cursor: pointer;

    &:hover {
        border-bottom: 3px solid cyan;
    }
`
const ButtonWrapper = styled.div`
    
`

const Logo = styled.button`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1.3rem;
    width: 100px;
    height:100%;
    background:transparent;
    align-self: left;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    

`

const LogoWrapper = styled.div`

`

const Right = styled.div`
    width: 100px;
    margin-right: 20px;
`
export interface INavProps {

}

export default function Nav (props: INavProps) {
  return (
    <Wrapper>
        <Inner>
            <LogoWrapper>
                <Logo>PLANTED</Logo>
            </LogoWrapper>
            <ButtonWrapper>
                <Button>Plants</Button>
                <Button>About</Button>
                <Button>Contact</Button>
            </ButtonWrapper>
            <Right></Right>

        </Inner>
    </Wrapper>
  );
}
