import React from "react";
import "../../style/userDetail.scss";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const blogData = [
    {
        blogImage: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        blogName:'Benefits of Meditation',
        blogDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, semfacilisis sed fringilla. Nunc, aliquam nunc cras 01-01-2022',

    },
    {
        blogImage: 'https://www.slma.cc/wp-content/uploads/2020/08/shutterstock_1107674573-1080x675.jpg',
        blogName:'Benefits of Meditation',
        blogDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, semfacilisis sed fringilla. Nunc, aliquam nunc cras 01-01-2022',

    },
    {
        blogImage: 'https://www.who.int/images/default-source/imported/men-health-blood-pressure-measuring.jpg?sfvrsn=89ae0f2b_14',
        blogName:'Benefits of Meditation',
        blogDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, semfacilisis sed fringilla. Nunc, aliquam nunc cras 01-01-2022',

    },
    {
        blogImage: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        blogName:'Benefits of Meditation',
        blogDescription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque molestie elementum, id ut condimentum quis. Vitae nisi, semfacilisis sed fringilla. Nunc, aliquam nunc cras 01-01-2022',

    }
]


const Blog = () => {
  return (
    <div>
    {
        blogData.map((blog) => (
            <div style={{ display: "flex" , marginBottom:'20px'}}>
        <div style={{  padding:'5px', border: '1px solid #ffff',
        background:'#ffff',
         width: "25vw", height: "20vh" }}>
          <img
            style={{ width: "100%", height: "auto" , borderRadius:'10px'}}
            src= {blog.blogImage}
            alt="blogpost"
          />
        </div>

        <div style={{padding:"10px"}}>
          <Typography variant="h5" gutterBottom>
           {blog.blogName}
          </Typography>
          <Typography variant="body1">
          {blog.blogDescription}
          </Typography>
          <Button
          variant="contained"
          style={{
            color: "black",
             marginTop:"10px",
            borderRadius:"50px",
            background: 'linear-gradient(90deg, rgba(220,26,85,1) 12%, rgba(109,35,128,1) 87%)',
          }}
        >
          View Details
        </Button>
        </div>
      </div>
        ))
    }
      
      

      {/* </Stack> */}
    </div>
  );
};

export default Blog;
