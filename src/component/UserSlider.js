import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { userContent } from "./UserData";
import "../style/dashboard.scss";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 6,
    slidesToSlide: 1,
  },
  smallDesktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 3,
    slidesToSlide: 1,
  },
  smallTablet: {
    breakpoint: { max: 800, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },

  mobile: {
    breakpoint: { max: 600, min: 400 },
    items: 2,
    slidesToSlide: 1,
  },
  smallmobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const UserSlider = () => {
  let navigate = useNavigate();
  const handleOpen = () => {
    navigate("/users");
  };
  return (
    <div
      style={{
        background: "#fff",
        marginBottom: "40px",
        borderRadius: "4px",
        padding: "10px 10px 40px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          All Coaches
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{
            float: "right",
            margin: "10px",
            color: "#ffff",
            borderRadius: "50px",
            background:
              "linear-gradient(90deg, rgba(220,26,85,1) 12%, rgba(109,35,128,1) 87%)",
          }}
        >
          See all coaches
        </Button>
      </div>
      <Divider
        style={{
          marginTop: "10px",
          marginBottom: "15px",
          background: "#E63369",
        }}
      />
      <Carousel responsive={responsive} showDots={true}>
        {userContent.map((ele, index) => (
          <div
            key={ele.userId}
            className="profileCard"
            style={{ margin: "0px 10px 0px 10px" }}
          >
            <Card sx={{ borderRadius: "16px !important" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={ele.userImage}
                  alt="green iguana"
                />
                <CardContent
                  style={{ background: ele.cardColor, color: "#ffff" }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {ele.userName}
                  </Typography>
                  <Link
                    to={`/home/${ele.userId}/${ele.userName}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      variant="text"
                      size="small"
                      style={{ color: "black" }}
                    >
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default UserSlider;
