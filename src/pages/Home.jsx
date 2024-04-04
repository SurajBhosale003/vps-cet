import '../App.css'
import { Card } from 'antd';
// import NavBar from '../components/Navbar'
import Slider from '../components/parts/Slider'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase.js';
import  { useState, useEffect } from 'react';


// MUI component

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

function Home() {
  const [newsObject, setNewsObject] = useState([]);
  // const navigate = useNavigate();
//   let newsObject = [
//     {
//         title: "Breaking News: Scientists Discover New Species of Frog in Amazon Rainforest",
//         link: "https://example.com/news1"
//     },
//     {
//         title: "Economic Growth Surpasses Expectations in Q2, Experts Optimistic",
//         link: "https://example.com/news2"
//     },
//     {
//         title: "Tech Giant Unveils Revolutionary AI Technology for Healthcare",
//         link: "https://example.com/news3"
//     },
//     {
//         title: "Political Unrest Escalates in Region, Leaders Call for Dialogue",
//         link: "https://example.com/news4"
//     },
//     {
//         title: "World Cup Finals: Excitement Builds as Top Teams Vie for Victory",
//         link: "https://example.com/news5"
//     },
//     {
//         title: "New Study Reveals Alarming Decline in Bee Populations Worldwide",
//         link: "https://example.com/news6"
//     },
//     {
//         title: "Space Exploration: Astronauts Successfully Complete Mission to Mars",
//         link: "https://example.com/news7"
//     },
//     {
//         title: "Entertainment Industry Braces for Major Disruption with Release of New Streaming Service",
//         link: "https://example.com/news8"
//     },
//     {
//         title: "Climate Change Summit Concludes with Agreement on Emission Reduction Targets",
//         link: "https://example.com/news9"
//     }
// ];
useEffect(() => {
  // Fetch data from Firebase collection
  const fetchData = async () => {
    try {
      const formDataCollection = collection(db, 'news');
      const formDataSnapshot = await getDocs(formDataCollection);
      const formDataData = formDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsObject(formDataData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  };

  fetchData();
}, []);


  return (
    <div>
      {/* <NavBar/> */}
      <Slider/>
        
      <div className="HomePageContainer">
        <div className='why-vps-cet-main'>
          <span className="main-title-home"><h3>Why VPSCET</h3></span>
        <div className="why-vps-cet">
          <div className='wvc-left'>
            <h3> <span className='title-sub'>Who We Are</span></h3>
            <h4 className='about-info-p'>
            VPS College of Engineering & Technology (VPSCET) is private unaided institution that was established in the year 2013. The institute offers three undergraduate engineering programmes of four year duration namely Mechanical Engineering, Computer Engineering, Civil Engineering.
            </h4>
            <br />
            <h4 >
            All the courses are approved by All India Council for Technical Education (AICTE) and affiliated to University of Pune.
            </h4>
          </div>
          {/*  */}
          <div className='wvc-right'>
          <h3> <span className='title-sub'>News & Updates</span></h3>
          <div className='wvc-news-grid'>
      

        {newsObject.map((news, index) => (
          <div key={index} className='wvc-items news'> 
          <Card  title={news.title} bordered={false}>
             <a href={news.link}>{news.link}</a>
          </Card>
          </div>

        ))}

    </div>
          </div> 
             
        </div>
      </div>
      {/* 2nd */}
      <div className='our-courses-main'>
      <span className="main-title-home"><h3>Our Courses</h3></span>
          <div className='our-courses'>
              <div className='our-courses-items'>
                  <h4> <span className='our-courses-title'>Civil Engineering</span></h4>
                  <br />
                  <h4> <span className='our-courses-info'>Civil engineering department was established in the year 2013 with current intake 30.</span></h4>
              </div>

              <div className='our-courses-items'>
                  <h4> <span className='our-courses-title'>Mechanical Engineering</span></h4>
                  <br />
                  <h4> <span className='our-courses-info'>Department of Mechanical Engineering at VPS Lonavala, started in year 2013. with all the facilities.</span></h4>
              </div>

              <div className='our-courses-items'>
                  <h4> <span className='our-courses-title'>Computer Engineering</span></h4>
                  <br />
                  <h4> <span className='our-courses-info'>Computer Engineering has become an integral part of ourday to day life. It is the most important element.</span></h4>
              </div>
          </div>
      </div>
      {/* 3nd */}
      <div className='our-core-values-main'>
      <span className="main-title-home"><h3>Our Core Values</h3></span>
          <div className='our-courses'>
              <div className='our-core-values-items'>
                  <h4> <span className='our-courses-title'>VPS MISSION</span></h4>
                  <br />
                  <h4> <span className='our-core-values-info'>To provide an environment of high academic and entrepreneurship for all those aspiring students, which will prepare them to face global challenges and maintaining high standards.</span></h4>
              </div>

              <div className='our-core-values-items'>
                  <h4> <span className='our-courses-title'>VPS VISION</span></h4>
                  <br />
                  <h4> <span className='our-core-values-info'>To be recognized as among the leading institutions imparting quality Engineering Education to produce world class professional to take challenges at global level. They will be pride of india.</span></h4>
              </div>

              <div className='our-core-values-items'>
                  <h4> <span className='our-courses-title'>QUALITY POLICY</span></h4>
                  <br />
                  <h4> <span className='our-core-values-info'>To provide educational services of the highest quality both curricular and co-curricular to enable students integrate skills and serve the industry and society equally well at global level.</span></h4>
              </div>
          </div>
          <div>
            <div>

            </div>
            <div>
            
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Home