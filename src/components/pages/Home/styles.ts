import { Box, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center', // Center everything better
  gap: '24px', // Add spacing between columns
  padding: '20px 40px', // More padding on large screens
  color: theme.palette.text.primary,

  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    padding: '10px', // Less padding on small screens
  },
}));
