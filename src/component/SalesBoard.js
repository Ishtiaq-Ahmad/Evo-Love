import React from "react";
import "../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import SalesBoardChart from './SalesBoardChart'

const SalesBoard = () => {
  return (
    <div className="user_mood_chart">
      <Typography variant="h6" component="div" gutterBottom>
        Sales Board
      </Typography>
      <Divider sx={{ background: "#E63369", marginBottom:"20px" }} />
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        
      >
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Courses
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Earnings
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" gutterBottom>
              123
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              $873389
            </Typography>
          </div>
          <SalesBoardChart
          sunday={100}
          monday={200}
          tuesday={800}
          wednesday={400}
          thursday={500}
          friday={600}
          saturday ={100}
           />
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Ebooks
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Earnings
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" gutterBottom>
              87
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              $98983
            </Typography>
          </div>
          <SalesBoardChart
            sunday={700}
          monday={200}
          tuesday={400}
          wednesday={1000}
          thursday={500}
          friday={600}
          saturday ={3000}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" gutterBottom>
              Articles
            </Typography>
            <Typography variant="h6" component="div" gutterBottom>
              Earnings
            </Typography>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="div" gutterBottom>
              23
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              $8985
            </Typography>
          </div>
           <SalesBoardChart
            sunday={700}
          monday={200}
          tuesday={400}
          wednesday={1000}
          thursday={500}
          friday={600}
          saturday ={3000}
          />
        </div>
      </Stack>
    </div>
  );
};

export default SalesBoard;
