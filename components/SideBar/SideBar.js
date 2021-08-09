import { IconButton, List, Toolbar } from "@material-ui/core";
import {
  Search,
  SearchIconWrapper,
  StyledAppBar,
  StyledAvatar,
  StyledBadge,
  StyledDrawer,
  StyledInputBase,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
  StyledTypography,
} from "./Styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@material-ui/system";
import Image from "next/image";
import { menuItems } from "./ListItems";
import { useRouter } from "next/dist/client/router";

const SideBar = () => {
  const router = useRouter();

  return (
    <div>
      {/* AppBar */}
      <StyledAppBar color="transparent" elevation={0}>
        <Toolbar sx={{ marginTop: 2 }}>
          <IconButton size="large" edge="start">
            <MenuIcon color="primary" />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon color="secondary" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search" />
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton size="large">
              <Image src="/arrow.svg" width={16} height={16} />
            </IconButton>
            <IconButton size="large">
              <StyledBadge badgeContent={4} color="primary">
                <Image src="/bell.svg" width={16} height={18} />
              </StyledBadge>
            </IconButton>
            <StyledAvatar src="/avatar.jpg" variant="rounded" />
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Drawer */}
      <StyledDrawer variant="permanent" anchor="left">
        <Box sx={{ marginTop: 2 }}>
          <StyledTypography variant="h3">Gull</StyledTypography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <StyledListItem
              button
              key={item.text}
              onClick={() => router.push(item.path)}
              sx={
                router.pathname === item.path && {
                  backgroundColor: "#7D48B1",
                  borderRadius: 3,
                }
              }
            >
              <StyledListItemIcon> {item.icon}</StyledListItemIcon>
              {router.pathname === item.path && (
                <StyledListItemText primary={item.text} />
              )}
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
    </div>
  );
};

export default SideBar;
