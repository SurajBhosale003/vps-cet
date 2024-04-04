import { db } from '../Firebase.js';
import { collection, addDoc } from "firebase/firestore";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Input, Select, Form, Row, Col,Modal } from 'antd';
// import 'antd/dist/antd.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Option } = Select;

const ContactUs = () => {

  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordCheck = () => {
    // Check if the entered password is correct
    if (password === 'vps_cet123') { // Replace 'your_password' with the actual correct password
      navigate('/admin'); // Redirect to the admin page
    } else {
      // Show error message or handle incorrect password
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    admissionProcess: '',
    studentOfCollege: '',
    department: '',
    year: '',
    phoneNumber: '',
    email: '',
    address: '',
    pincode: '',
  });

  const handleChange = (name, value) => {
    console.log('Form data:', formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Implement Firebase storage logic here
  };

  const storedata = async () => {

    if (!formData || Object.values(formData).some(value => !value)) {
      // If any field is empty, display an error message and return early
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      // Add a new document with the form data to the "formData" collection
      const formDataRef = collection(db, "formData"); // Get the reference to the "formData" collection
      const docRef = await addDoc(formDataRef, formData); // Add the form data to the collection
      console.log("Form data stored with ID: ", docRef.id);
      toast.success("Data Saved Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetFields();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Error Saving Data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const resetFields = () => {
    setFormData({
      firstName: '',
      lastName: '',
      admissionProcess: '',
      studentOfCollege: '',
      department: '',
      year: '',
      phoneNumber: '',
      email: '',
      address: '',
      pincode: '',
    });
  };

  return (
    <div className='enquiry-main'>
      <div className='enquiry'>
        <div className='form-title'>Enquiry Form</div>
        <Form layout="vertical" onSubmit={handleSubmit}>
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
              <Form.Item label="Are you a student of this college?">
                <Select
                  value={formData.studentOfCollege}
                  onChange={(value) => handleChange('studentOfCollege', value)}
                >
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Department">
                <Input
                  name='department'
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Year">
                <Input
                  name='year'
                  value={formData.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Phone Number">
                <Input
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Email">
                <Input
                  name='email'
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Address">
                <Input.TextArea
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
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit"onClick={storedata}>
              Submit
            </Button>
            <Button
        type="primary"
        style={{ marginLeft: 8 }}
        onClick={() => setVisible(true)}
      >
        Admin Page
      </Button>
      <Modal
        title="Enter Password"
        visible={visible}
        onOk={handlePasswordCheck}
        onCancel={() => setVisible(false)}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onPressEnter={handlePasswordCheck}
          placeholder="Enter password"
        />
      </Modal>
          </Form.Item>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
