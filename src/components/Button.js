import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border: none;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '1.2rem' : '1rem')};
  font-size: ${props => (props.big ? '1.2rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  padding: ${props => (props.big ? '0.5rem 1.75rem' : '0.35rem 1.65rem')};
  transition: all ${props => props.theme.transitions.normal};
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
    transform: translateY(-1px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: ${props => props.theme.colors.white};
  }
`

export default Button
