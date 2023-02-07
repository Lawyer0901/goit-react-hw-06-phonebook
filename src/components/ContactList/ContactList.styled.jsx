import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${p => p.theme.colors.accent};
`;

export const SpanText = styled.span`
  /* display: block; */
  color: ${p => p.theme.colors.red};
`;
