import "./App.css";

import {
  AppBar,
  Container,
  CssBaseline,
  Stack,
  Divider,
  Drawer,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TrainIcon from "@mui/icons-material/Train";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import DensityLargeIcon from "@mui/icons-material/DensityLarge";
import BusinessIcon from "@mui/icons-material/Business";

//  Import Roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Name, timezone, region, division

const columns = [
  { field: "name", headerName: "Name", width: 350, sortable: true },
  { field: "region", headerName: "Region", width: 350, sortable: true },
  { field: "timezone", headerName: "Timezone", width: 150, sortable: false },
  { field: "division", headerName: "Division", width: 350, sortable: true },
];

const sampleRows = [
  {
    id: 1,
    name: "Chicago West Station",
    region: "Midwest",
    timezone: "CST",
    division: "Chicago",
  },
  {
    id: 2,
    name: "Rodney Street Station",
    region: "Northeast",
    timezone: "EST",
    division: "New York",
  },
  {
    id: 3,
    name: "Mezzanine",
    region: "Northeast",
    timezone: "EST",
    division: "New York",
  },
  {
    id: 4,
    name: "30th Street",
    region: "Northeast",
    timezone: "EST",
    division: "Philadelphia",
  },
  {
    id: 5,
    name: "South Port Knot City",
    region: "Northeast",
    timezone: "EST",
    division: "Boston",
  },
  {
    id: 6,
    name: "King Street Station",
    region: "West",
    timezone: "PST",
    division: "Seattle",
  },
  {
    id: 7,
    name: "Santa Fe Depot",
    region: "West",
    timezone: "PST",
    division: "Los Angeles",
  },
];

function App() {
  return (
    <>
      <CssBaseline />
      <Stack
        direction="column"
        sx={{ height: "100vh" }}
        divider={<Divider orientation="horizontal" />}
      >
        <AppBar
          component="header"
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h5" component="h1">
              Training Data Manager
            </Typography>
          </Toolbar>
        </AppBar>

        <Stack direction="row" flexGrow={1}>
          <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
            }}
          >
            {/* This empty toolbar is simply used to take up the same amount of space that the fixed header toolbar takes */}
            <Toolbar />

            <Stack
              direction="column"
              justifyContent="space-between"
              flexGrow={1}
              sx={{
                overflow: "auto",
              }}
            >
              <List disablePadding>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="Stations" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <DensityLargeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tracks" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeRepairServiceIcon />
                    </ListItemIcon>
                    <ListItemText primary="Equipment" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TrainIcon />
                    </ListItemIcon>
                    <ListItemText primary="Train Profiles" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List disablePadding>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Drawer>
          <Stack direction="column" flexGrow={1}>
            {/* This empty toolbar is simply used to take up the same amount of space that the fixed header toolbar takes */}
            <Toolbar />

            <Container
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexGrow: 1,
                paddingY: 4,
              }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                Stations Management
              </Typography>
              <DataGrid
                rows={sampleRows}
                columns={columns}
                sx={{ maxHeight: 600 }}
              />
            </Container>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
