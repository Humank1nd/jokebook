// src/components/organisms/HomeWall/index.tsx

import { Typography, useTheme } from '@mui/material';
import { StyledRoot } from './styles';

export default function HomeWall({ sx, ...rootProps }) {
  const theme = useTheme();
  return (
    <StyledRoot sx={sx} {...rootProps}>
      <Typography>HomeWall</Typography>
    </StyledRoot>
  );
}
