import React from 'react'
import styled from '@emotion/styled'
import Flex from './flex'
import { myFunction } from "./my-dependency";

const Button = ({css, ...props}) => <button css={[{marginTop: 0}, css]} {...props} />

const Description = styled.p({wordBreak: 'break-word'})

const Panel = (props) => <Flex css={{backgroundColor: 'red'}} {...props}>
  <Description>Some text</Description>
  <Button css={{backgroundColor: 'blue'}}/>
</Flex>

export const myResult = () => myFunction();
