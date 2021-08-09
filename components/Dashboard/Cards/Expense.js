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
  backgroundColor: theme.palette.icon.fourth,
}));

const Expense = () => {
  return (
    <StyledCard>
      <StyledIconWrapper>
        <Image src="/orders.svg" width={20} height={13} />
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
            Expense
          </Typography>
          <Typography
            variant="h5"
            color="#FFC620"
            fontSize={30}
            fontWeight="bold"
          >
            $1200
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default Expense;
