import styled from '@emotion/styled';
import { Spacing } from '@tablekit/theme';
import { getLinkStyles } from '@tablekit/typography';
import { Link } from 'react-router-dom';

import { BREAKPOINTS, GRID_MARGIN, TOPNAV_HEIGHT } from 'Layouts';

export const FooterWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.canvas};
  min-height: ${TOPNAV_HEIGHT};
  width: 100%;
  padding: 0 ${GRID_MARGIN};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    display: flex;
  }
`;

export const FooterLink = styled(Link)`
  ${getLinkStyles};

  &:not(:last-child) {
    margin-right: ${Spacing.L6};
  }
`;

export const Copyright = styled.span`
  margin-left: ${Spacing.L2};
`;
