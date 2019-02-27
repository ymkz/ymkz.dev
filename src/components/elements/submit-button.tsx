import styled from '@emotion/styled'
import colors from '../../colors'

const SubmitButton = styled.button`
  background-color: #d8dee9;
  border: 0;
  border-radius: 4px;
  color: #2e3440;
  font-size: 1rem;
  margin: 1rem 0 0 0;
  padding: 10px 16px;
  :disabled {
    background-color: ${colors.nord5};
    color: ${colors.nord3};
  }
`

export default SubmitButton
