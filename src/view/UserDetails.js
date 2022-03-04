import React from "react";
import Sidebars from "../component/Sidebars";
import "../style/userDetail.scss";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { userContent } from "../component/UserData";
import SalesBoard from "../component/SalesBoard";
import MultiTabs from "../component/multiTab/MultiTabs";

const UserDetails = () => {
  const params = useParams();
  const { userName } = params;
  const user = userContent.find((user) => user.userName === userName);
  const { userEmail, userImage } = user;
  return (
    <div className="userDetails_div">
      <Sidebars />
      <Grid container spacing={{ xs: 1, sm: 1, md: 3, lg: 3 }}>
        <Grid
          item
          sm={12}
          md={3}
          sx={{ marginBottom: "20px", marginTop: "10px" }}
        >
          <Card
            sx={{
              borderRadius: "16px ",
              border: "1px solid #E63369",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={userImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {userName}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {userEmail}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          sm={12}
          md={9}
          sx={{ marginBottom: "20px", marginTop: "10px" }}
        >
          <SalesBoard />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: "20px", marginTop: "10px" }}>
          <MultiTabs />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserDetails;
