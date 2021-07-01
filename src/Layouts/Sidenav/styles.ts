import styled from '@emotion/styled';
import { Button } from '@tablekit/button';
import { ItemGroup } from '@tablekit/item';
import { Panel } from '@tablekit/panel';
import { Spacing } from '@tablekit/theme';

import { BREAKPOINTS, GRID_MARGIN } from 'Layouts';

export const SidenavWrapper = styled(Panel)`
  padding: ${GRID_MARGIN};
`;

export const SidenavItems = styled(ItemGroup)`
  padding-top: ${Spacing.L6};
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: ${GRID_MARGIN};
`;

export const MobileOnlyItems = styled.div`
  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;
