
import '../App.css';

import { Card } from 'antd';

const { Meta } = Card;

const Department = () => {
  // Department data
  const departments = [
    {
      name: 'Computer Science',
      image: '/cse.jpg',
      information: 'The Department of Computer Engineering was established in the year 2013. Computer Engineering is the most growing subject field that gear up at the new trends in Computer Engineering. The Department of Computer Engineering was established in the year 2013. Computer Engineering is the most growing subject field that gear up at the new trends in Computer Engineering.Department of Computer Science & Engineering welcomes young aspirants around the globe to shape their career by developing strong technical, analytical and communication skills so that the students besides going for software industry, teaching and national laboratories jobs. We also plan to develop entrepreneurial skills in students so that they would drive the spirit of growth of our economy and would be able to generate employment opportunities for other qualified and skilled people. I look forward for preparing my students to face the challenges; the technology and engineering sector would offer in the future and succeed in offering technological solutions for the betterment of the society and our nation. Wishing all our students brilliant and bright future',
    },
    {
      name: 'Civil',
      image: 'civil.jpg',
      information: 'The department of Civil Engineering established in 2013 has the distinction of being the oldest department in the institute. The department has kept updating to well-equipped laboratories and research. The department is proud to have a Plumbing laboratory which is one of its kinds in an engineering institute, in addition to the conventional laboratories of Surveying, Geotechnical, Environmental, Transport, Fluid Mechanics, Strength of Materials, Concrete Technology etc. The faculty believes in high quality teaching and is very active in projects, conferences and research papers. The department offers consultancy in various fields of Civil engineering to reputed government and private sectors.',
    },
    {
      name: 'Mechanical',
      image: 'mech.jpg',
      information: 'The Department of Mechanical Engineering at V. P. S College of Engineering and Technology, loanavala is to provide students with a sound mechanical engineering education, enhance the understanding and application of mechanical engineering principles for technological development through teaching, research, and outreach programs to improve the quality of life of our citizens. Mechanical Engineering is considered to be the core branch in engineering. The curriculum prepares a student for a wide variety of technical and professional areas having their roots in Mechanical Engineering - areas as diverse as Thermodynamics, Manufacturing processes, Fluid mechanics, Heat transfer, Machine design, CAD/CAM/CAE, Automation, Industrial Engineering, Production Technology and others.',
    },
  ];

  return (
    <div style={{ textAlign: 'justify', padding: '140px' }}>

    <div className='deptgrid' style={{ display: 'flex' , flexDirection:'column' , justifyContent: 'space-between' }}>
    {departments.map((department, index) => (
        <div key={index}>
          <Card style={{ width: '100%', minWidth: '100%' }}>
            {index % 2 === 0 ? (
              <img alt={department.name} src={department.image} style={{ width: '50%', float: 'left' }} />
            ) : (
              <div style={{ width: '50%', float: 'left', padding: '0 16px' }}>
                <Meta title={department.name} description={department.information} />
              </div>
            )}
            {index % 2 !== 0 ? (
              <img alt={department.name} src={department.image} style={{ width: '50%', float: 'right' }} />
            ) : (
              <div style={{ width: '50%', float: 'right', padding: '0 16px' }}>
                <Meta title={department.name} description={department.information} />
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Department;


/*
{
  "Computer Science": {
    "HOD": {
      "name": "John Doe",
      "experience": "10 years",
      "email": "john.doe@example.com",
      "teaching_subject": "Computer Science",
      "img_url": "https://example.com/john_doe.jpg"
    },
    "about_department": "The Computer Science department offers courses in...",
    "faculty_members": [
      {
        "name": "Alice Smith",
        "experience": "5 years",
        "email": "alice.smith@example.com",
        "teaching_subject": "Algorithms",
        "img_url": "https://example.com/alice_smith.jpg"
      },
      {
        "name": "Bob Johnson",
        "experience": "8 years",
        "email": "bob.johnson@example.com",
        "teaching_subject": "Database Systems",
        "img_url": "https://example.com/bob_johnson.jpg"
      },
      // Additional faculty members
    ]
  },
  "Electrical Engineering": {
    "HOD": {
      "name": "Emily Brown",
      "experience": "12 years",
      "email": "emily.brown@example.com",
      "teaching_subject": "Electrical Engineering",
      "img_url": "https://example.com/emily_brown.jpg"
    },
    "about_department": "The Electrical Engineering department offers courses in...",
    "faculty_members": [
      {
        "name": "Charlie Wilson",
        "experience": "6 years",
        "email": "charlie.wilson@example.com",
        "teaching_subject": "Power Systems",
        "img_url": "https://example.com/charlie_wilson.jpg"
      },
      {
        "name": "Diana Martinez",
        "experience": "9 years",
        "email": "diana.martinez@example.com",
        "teaching_subject": "Electronics",
        "img_url": "https://example.com/diana_martinez.jpg"
      },
      // Additional faculty members
    ]
  },
  // Additional departments
}

*/ 