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
        transition: "background-color 0.1s",
        color: "black",
        textDecoration: "none",
        "&:hover": {
          bgcolor: "#00000044",
        },
        "&:active": {
          bgcolor: "#00000066",
        },
        cursor: "pointer",
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default LandingPageNavButton;
