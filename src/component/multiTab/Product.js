import React from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const blogData = [
  {
    productImage:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
    productTitle: "Mastery Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://pixc.com/wp-content/uploads/2019/10/product-photography-basics-quality.png",
    productTitle: "Passive Income",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://img.buzzfeed.com/buzzfeed-static/static/2021-12/30/1/campaign_images/d0cc3190f950/41-coffee-table-books-that-are-so-beautiful-it-hu-2-11183-1640826416-2_dblbig.jpg?resize=1200:*",
    productTitle: "Benefits of Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    productTitle: "Benefits of Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
    productTitle: "Mastery Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://pixc.com/wp-content/uploads/2019/10/product-photography-basics-quality.png",
    productTitle: "Passive Income",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://img.buzzfeed.com/buzzfeed-static/static/2021-12/30/1/campaign_images/d0cc3190f950/41-coffee-table-books-that-are-so-beautiful-it-hu-2-11183-1640826416-2_dblbig.jpg?resize=1200:*",
    productTitle: "Benefits of Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    productTitle: "Benefits of Meditation",
    productName: "Ebook",
    productPrice: 19.99,
  },
];

const Product = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {blogData.map((coach) => (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className="courseCard" key={coach.index}>
              <img
                width="100%"
                height="50%"
                src={coach.productImage}
                alt="pdocutimage"
                style={{ borderRadius: "18px 20px 0px 0px", height: "200px" }}
              />
              <div className="card_data">
                <Typography variant="h6" gutterBottom component="div">
                  {coach.productTitle}
                </Typography>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="body1" gutterBottom component="div">
                    {coach.productName}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    component="div"
                    style={{ color: "#268244" }}
                  >
                    <strong>${coach.productPrice}</strong>
                  </Typography>
                </div>

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

export default Product;
