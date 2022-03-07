import React from 'react';
import SideBbars from '../component/Sidebars';
import '../style/userDetail.scss'
import { useParams } from "react-router-dom";
import {userContent} from '../component/UserData'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';


const BlogDetails = () => {
    const params = useParams();
    const { userName } = params;
    const user = userContent.find((user) => user.userName === userName);
    const { blogImage, blogName, blogDescription, userImage } = user;

   
    const _style ={
        height:"25rem",
        width:"100%",
        backgroundColor:"blue",
        backgroundImage: `url(${blogImage})`,
        backgroundSize: '100% 100%',
    }
  return (
    <div className="blog_detial_div">  
    <SideBbars/>
    <div className="blog_detail_data">
    <div style={_style}></div>
    <div style={{display:'flex', justifyContent:"space-between"}}>
    <Typography variant="h6" component="div" gutterBottom sx = {{color:"#488244"}}>
        {blogName}
      </Typography>
      <Typography variant="body1" component="div" gutterBottom sx = {{color:"#488244"}}>
        01-01-2022
      </Typography>
    </div>
      
    <div style={{display:'flex', alignItems:"center", margin:'10px'}}>
    <Avatar
        alt="Remy Sharp"
        src={userImage}
        sx={{ width: 50, height: 50 }}
      />
      <div style={{display:"fex", flexDirection:'column'}}>

      <Typography variant="body1" component="div"  style={{marginLeft:"10px"}}>
        <strong>{userName}</strong>
      </Typography>
      <Typography variant="caption" component="div" style={{marginLeft:"10px"}} >
        Meditation Specialist
      </Typography>
      </div>
    </div>
    
   
      <Typography variant="body1"  component="div" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
      </Typography>
      <Typography variant="body1"  component="div" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
      </Typography>
      <img  className="blog_secondary_image" src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="extraImage"/>
      <Typography variant="body1"  component="div" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
      </Typography>
      <Typography variant="body1"  component="div" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
      </Typography>
      <Typography variant="body1"  component="div" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat eleifend odio duis faucibus tempor facilisi amet. In in lectus vitae a sit rhoncus aliquet dolor vestibulum. Nisl et dignissim duis nulla. Arcu et, aliquet aliquet ornare porttitor. Ultricies auctor morbi pellentesque dui bibendum at sollicitudin volutpat. Varius sit leo tellus nullam neque, aliquet neque libero vestibulum. Accumsan egestas sed ut elementum vulputate praesent et interdum. Praesent est, tortor congue justo, nibh ipsum in lorem ut. Euismod molestie dictum nulla egestas pulvinar. Vel tincidunt eget lacus, pellentesque ac tellus varius. Ullamcorper sit tincidunt enim sagittis sit. Gravida erat neque id blandit faucibus scelerisque. Facilisi nunc quis at vestibulum facilisis sed in ac nunc.
      </Typography>
    </div>
    </div>
  )
}

export default BlogDetails