import styled from 'styled-components'

import type { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  display: inline-block;
  white-space: nowrap; /* Faz com que o texto não quebre */
  display: inline-block;

  @media (max-width: 768px) {
    display: block;
  }
`
