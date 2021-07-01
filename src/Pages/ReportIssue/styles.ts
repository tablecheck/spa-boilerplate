import styled from '@emotion/styled';
import { Textarea } from '@tablekit/textarea';
import { Spacing } from '@tablekit/theme';

export const MessageTextarea = styled(Textarea)`
  margin-bottom: ${Spacing.L5};
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
