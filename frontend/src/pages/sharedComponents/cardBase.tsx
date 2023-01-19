import { Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  sx?: SxProps;
};
const CardBase: React.FC<Props> = ({ children, sx }) => {
  return (
    <Stack
      sx={{
        maxWidth: "100%",
        boxShadow: "0px 10px 25px 5px rgba(0, 0, 0, 0.15)",
        borderRadius: "14px",
        p: 2,
        ...sx,
      }}
    >
      {children}
    </Stack>
  );
};
export default CardBase;
