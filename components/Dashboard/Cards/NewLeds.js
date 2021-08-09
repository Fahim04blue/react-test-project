import { Card, CardContent, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { styled } from "@material-ui/core/styles";
import Image from "next/dist/client/image";

export const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  display: "flex",
  width: theme.spacing(52),
  height: theme.spacing(16),
  borderRadius: theme.spacing(3),
}));

const StyledIconWrapper = styled("div")(({ theme }) => ({
  marginTop: 30,
  marginLeft: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(4),
  height: theme.spacing(9),
  borderRadius: 18,
  backgroundColor: theme.palette.icon.first,
}));

const NewLeds = () => {
  return (
    <StyledCard>
      <StyledIconWrapper>
        <Image src="/leds.svg" width={15} height={17} />
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
            New Leds
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            fontSize={30}
            fontWeight="bold"
          >
            205
          </Typography>
        </CardContent>
      </Box>
    </StyledCard>
  );
};

export default NewLeds;
