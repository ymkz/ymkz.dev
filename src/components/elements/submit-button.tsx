import styled from '@emotion/styled'
import colors from '../../constants/colors'

const SubmitButton = styled.button`
  background-color: ${colors.nord4};
  border: 0;
  border-radius: 4px;
  color: ${colors.nord0};
  font-size: 1rem;
  margin: 1rem 0 0 0;
  padding: 10px 16px;
  :disabled {
    color: ${colors.nord3};
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export default SubmitButton
