
import { Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const Admission = () => {
    const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '140px' }}>
      <Row gutter={16} justify="center">
        <Col span={8}>
          <Card onClick={()=>{navigate('/admission-fy')}}
            hoverable
            style={{ width: 300 , height: 320}}
            cover={<img alt="example" src="admission_fy.jpg" />}
          >
            <Card.Meta title="First Year Admission" description=" Admission Enquiry of First Years" />
          </Card>
        </Col>
        <Col span={8}>
          <Card  onClick={()=>{navigate('/admission-dsy')}}
            hoverable
            style={{ width: 300 , height: 320 }}
            cover={<img alt="example" src="admission_dsyy.jpg" />}
          >
            <Card.Meta title="Direct Second Admission" description="Admission Enquiry of Direct Second Years" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Admission;
