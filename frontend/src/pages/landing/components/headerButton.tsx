import { Box, BoxProps, Typography } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  isLink: boolean;
  href?: string;
  onClick?: () => void;
};
const LandingPageNavButton: React.FC<Props> = ({
  children,
  isLink,
  href,
  onClick,
}) => {
  const boxProps: BoxProps = {
    ...(isLink
      ? {
          component: "a",
          href,
        }
      : {
          onClick,
        }),
  };
  return (
    <Box
      sx={{
        height: "100%",
        px: 2,
        display: "flex",
        alignItems: "center",
        "&:hover": {
          bgcolor: "#00000044",
        },
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default LandingPageNavButton;
