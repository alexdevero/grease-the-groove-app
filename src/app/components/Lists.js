import React from 'react'
import styled from 'styled-components'

export const ListUnstyled = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const ListInline = styled(ListUnstyled)`
  li {
    margin-left: -5px;
    display: inline-block;
  }
`
