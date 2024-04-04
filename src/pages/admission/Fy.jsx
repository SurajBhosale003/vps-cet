import { useState } from 'react';
import { Button, Input, Select, Form, Row, Col } from 'antd';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css';
const { Option } = Select;

const Fy = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    admissionProcess: '',
    department: '',
    year: '',
    phoneNumber: '',
    email: '',
    address: '',
    pincode: '',
    twelfthPercentage: '',
    tenthPercentage: '',
  });

  const handleChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const storeData = async () => {
    if (!formData || Object.values(formData).some(value => !value)) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const admissionFyCollection = collection(db, 'admissionFy');
      await addDoc(admissionFyCollection, formData);
      toast.success("Data Saved Successfully");
      resetFields();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error Saving Data");
    }
  };

  const resetFields = () => {
    setFormData({
      firstName: '',
      lastName: '',
      admissionProcess: '',
      department: '',
      year: '',
      phoneNumber: '',
      email: '',
      address: '',
      pincode: '',
      twelfthPercentage: '',
      tenthPercentage: '',
    });
  };



  return (
    <div className='enquiry-main'>
      <div className='enquiry'>
        <div className='form-title'>1st Year Admmision Form</div>
        <Form layout="vertical" onFinish={storeData}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="First Name">
                <Input
                  name='firstName'
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Last Name">
                <Input
                  name='lastName'
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Are you interested in the admission process?">
                <Select
                  value={formData.admissionProcess}
                  onChange={(value) => handleChange('admissionProcess', value)}
                >
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Intrested Department?">
                <Input
                  name='department'
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="12th Passout Year">
                <Input
                  name='year'
                  value={formData.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Phone Number">
                <Input
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Email">
                <Input
                  name='email'
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Address">
                <Input
                  name='address'
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Pincode">
                <Input
                  name='pincode'
                  value={formData.pincode}
                  onChange={(e) => handleChange('pincode', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="12th Percentage">
                <Input
                  name='twelfthPercentage'
                  value={formData.twelfthPercentage}
                  onChange={(e) => handleChange('twelfthPercentage', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="10th Percentage">
                <Input
                  name='tenthPercentage'
                  value={formData.tenthPercentage}
                  onChange={(e) => handleChange('tenthPercentage', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Fy;
