import styled from 'styled-components'
import type { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${(props) =>
    props.tipo === 'principal' ? props.theme.corPrincipal : '#949494'};
  line-height: 22px;
`
