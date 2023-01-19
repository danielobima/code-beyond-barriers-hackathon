import { Box, Fade, Stack, Typography } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  icon: ReactNode;
  page: string;
  text: string;
};
const VolunteersSideNavButton: React.FC<Props> = ({ icon, page, text }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();

  const selected = useMemo(() => location.pathname === page, [location]);
  return (
    <Box
      component={Link}
      to={page}
      sx={{
        width: "40px",
        aspectRatio: "1/1",
        borderRadius: "14px",
        boxShadow:
          selected && !hover
            ? " 0px 1px 10px 1px rgba(255, 255, 255, 0.1)"
            : "none",
        bgcolor: selected && !hover ? "white" : "transparent",
        color: selected || hover ? "#9F141B" : "white",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Fade in={hover}>
        <Stack
          sx={{
            position: "absolute",
            bgcolor: "white",
            height: "40px",
            pl: "40px",
            pr: "16px",
            alignItems: "center",
            borderRadius: "14px",
            boxShadow: "0px 3px 6px rgba(0,0,0,0.2)",
          }}
          direction="row"
        >
          <Typography>{text}</Typography>
        </Stack>
      </Fade>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default VolunteersSideNavButton;
