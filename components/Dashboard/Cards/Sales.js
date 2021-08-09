import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import Image from "next/dist/client/image";
import { StyledCard } from "./NewLeds";

const StyledIconWrapper = styled("div")(({ theme }) => ({
  marginTop: 30,
  marginLeft: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(4),
  height: theme.spacing(9),
  borderRadius: 18,
  backgroundColor: theme.palette.icon.second,
}));

const Sales = () => {
  return (
    <StyledCard>
      <StyledIconWrapper>
        <Image src="/sales.svg" width={18} height={15} />
      </StyledIconWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="subtitle2" color="text">
            Sales
          </Typography>
          <Typography
            variant="h5"
            color="#3981F7"
            fontSize={30}
            fontWeight="bold"
          >
            $4021
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default Sales;
