import { Divider, IconButton, Badge, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
    <>
      <Toolbar>
        <IconButton color="inherit" edge="start">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blogging Website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar
        sx={{
          justifyContent: "center",
          fontStyle: "italic",
          color: "text.secondary",
        }}
      >
        Express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
