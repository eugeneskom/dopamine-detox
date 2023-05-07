import React from 'react'
import styled from 'styled-components'

interface CircleProps{
  active:boolean;
}

const PaginationCircle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #eee;
  border-radius: 50%;
  &.active{
    background-color: blue;
  }
`

function Circle({active}:CircleProps) {

  return (
    <PaginationCircle className={`${active ? 'active': ''}`}>
    </PaginationCircle>
  )
}

export default Circle