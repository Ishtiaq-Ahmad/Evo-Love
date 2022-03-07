import React from 'react';
import Sidebars from '../component/Sidebars';
import '../style/userDetail.scss';
import { useParams } from "react-router-dom";
import {userContent} from '../component/UserData';
import Typography from '@mui/material/Typography';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const CourseDetails = () => {
    const params = useParams();
    const { userName } = params;
    const user = userContent.find((user) => user.userName === userName);
    // const { productImage, productName, productPrice, productTitle, userImage } =user;
    const frameVide = "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1";
  return (
      <div className="blog_detial_div">
 <div className="blog_detail_data">
    <Sidebars/>
    <iframe
                width="100%"
                height="100%"
                src={frameVide}
                frameborder="0"
                style={{ borderRadius: "10px 10px 10px 10px", height: "400px" }}
                allowfullscreen
                title="Course video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
          <Typography variant="body1" component="div" gutterBottom>
            DR. Johan Kevin
          </Typography>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
          
          >
            Mastery of Spirituality
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
           <strong> Description</strong>
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed fringilla. Nunc, aliquam nunc cras
          </Typography>
        {/* </div> */}
        <div className="course_cordian">
        <Typography variant="h6" component="div" gutterBottom m ={2}>
           <strong> Curriculum</strong>
          </Typography>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Intro to Course</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Mindfullness</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                neque molestie elementum, id ut condimentum quis. Vitae nisi,
                sem facilisis sed fringilla. Nunc, aliquam nunc cras Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Duis neque molestie
                elementum, id ut condimentum quis. Vitae nisi, sem facilisis sed
                fringilla. Nunc, aliquam nunc cras
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

    </div>
      </div>
   
  )
}

export default CourseDetails