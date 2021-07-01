import styled from '@emotion/styled';
import { Icon } from '@tablekit/icon';
import { Spacing } from '@tablekit/theme';

export const Status = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const StatusIcon = styled(Icon)`
  margin-right: ${Spacing.L4};
`;
