import React from 'react'
import {Aligner, Block, Bottom, Column, Grid, Top, Wrapper} from "../components/Grid";
import {CoverImage, Heading, Intro, Small} from "../components/Elements";
import {LoginForm} from "../components/LoginForm";

export const LoginPage = () => (
    <Wrapper>
        <Grid>
            <Column width="40%">
                <Aligner>
                    <Top>
                        <Block>
                            <Heading>Project Manager</Heading>
                            <Intro>Lorem ipsum dolor sit amet.</Intro>
                            <LoginForm/>
                        </Block>
                    </Top>
                    <Bottom>
                        <Block>
                            <Small>© 2020 Lorem Ipsum Dolor.<br/>All Rights Reserved.</Small>
                        </Block>
                    </Bottom>
                </Aligner>
            </Column>
            <Column width="60%">
                <CoverImage src="/login.png" alt="Welcome screen illustration"/>
            </Column>
        </Grid>
    </Wrapper>
)