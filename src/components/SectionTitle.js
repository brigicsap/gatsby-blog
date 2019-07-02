import styled from 'styled-components'

const SectionTitle = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.grey.dark};
  position: relative;
  padding-bottom: 1rem;
  font-size: 1rem;

  @media (min-width: ${props => props.theme.breakpoints.phone}) {
    position: absolute;
    left: 2rem;
    top: 3rem;
    writing-mode: vertical-lr;
    text-orientation: upright;
    white-space: nowrap;
  }
`

export default SectionTitle
