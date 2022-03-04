import React from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { userContent } from "../UserData";

const Course = () => {
  const frameVide = "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1";
  return (
    <div>
      <Grid container spacing={2}>
        {userContent.map((coach) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="courseCard" key={coach.userId}>
              <iframe
                width="100%"
                height="100%"
                src={frameVide}
                frameborder="0"
                style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
                allowfullscreen
                title="Course video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="card_data">
                <Typography variant="body1" gutterBottom component="div">
                  Dr. {coach.userName}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                  Introduction to Psychology
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    color: "#ffff",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(90deg, rgba(220,26,85,1) 12%, rgba(109,35,128,1) 87%)",
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Course;
