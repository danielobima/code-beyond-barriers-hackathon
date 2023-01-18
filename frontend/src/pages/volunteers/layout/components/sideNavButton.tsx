import { Box, Fade, Stack, Typography, useTheme } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { HomeRounded } from "@mui/icons-material";
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
        width: "45px",
        aspectRatio: "1/1",
        borderRadius: "14px",
        bgcolor: selected && !hover ? "white" : "transparent",
        color: selected || hover ? "#9F141B" : "white",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <Fade in>
          <Stack
            sx={{
              position: "absolute",
              bgcolor: "white",
              height: "45px",
              pl: "45px",
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
      )}
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
