import { CardContent, Typography } from "@material-ui/core";
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
  backgroundColor: theme.palette.icon.third,
}));

const Orders = () => {
  return (
    <StyledCard>
      <StyledIconWrapper>
        <Image src="/orders.svg" width={17} height={17} />
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
            Orders
          </Typography>
          <Typography
            variant="h5"
            color="#5DAE49"
            fontSize={30}
            fontWeight="bold"
          >
            80
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default Orders;
