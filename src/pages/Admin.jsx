import { useState, useEffect } from 'react';
import { Table, Popconfirm, Button, message  } from 'antd';
import { collection, getDocs, deleteDoc, doc , addDoc  } from 'firebase/firestore';
import { db } from '../Firebase.js'; // Import your Firebase configuration file
import {  Form, Input} from 'antd';
import '../App.css';

function Admin() {
  const [formData, setFormData] = useState([]);
  const [newsList, setNewsList] = useState([]);

  const [fyList, setFyList] = useState([]);
  const [dsyList, setDsyList] = useState([]);

  const [loading, setLoading] = useState(true);


// FY admissio
useEffect(() => {
  fetchFyData();
  fetchDsyData();
}, []);

const fetchFyData = async () => {
  try {
    const fyCollection = collection(db, 'admissionFy');
    const fySnapshot = await getDocs(fyCollection);
    const fyData = fySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setFyList(fyData);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching 1st Year admission data:', error);
  }
};

const fetchDsyData = async () => {
  try {
    const dsyCollection = collection(db, 'admissionDsy');
    const dsySnapshot = await getDocs(dsyCollection);
    const dsyData = dsySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setDsyList(dsyData);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching 2nd Year admission data:', error);
  }
};

const handleDeleteFy = async (record) => {
  try {
    await deleteDoc(doc(db, 'admissionFy', record.id));
    setFyList(prevList => prevList.filter(item => item.id !== record.id));
    message.success('Record deleted successfully');
  } catch (error) {
    console.error('Error deleting record:', error);
    message.error('Failed to delete record');
  }
};

const handleDeleteDsy = async (record) => {
  try {
    await deleteDoc(doc(db, 'admissionDsy', record.id));
    setDsyList(prevList => prevList.filter(item => item.id !== record.id));
    message.success('Record deleted successfully');
  } catch (error) {
    console.error('Error deleting record:', error);
    message.error('Failed to delete record');
  }
};
const fyColumns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Admission Process',
    dataIndex: 'admissionProcess',
    key: 'admissionProcess',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Pincode',
    dataIndex: 'pincode',
    key: 'pincode',
  },
  {
    title: '12th Percentage',
    dataIndex: 'twelfthPercentage',
    key: 'twelfthPercentage',
  },
  {
    title: '10th Percentage',
    dataIndex: 'tenthPercentage',
    key: 'tenthPercentage',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Popconfirm
        title="Are you sure you want to delete this record?"
        onConfirm={() => handleDeleteFy(record)}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    ),
  },
];

const dsyColumns = [
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Admission Process',
    dataIndex: 'admissionProcess',
    key: 'admissionProcess',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Pincode',
    dataIndex: 'pincode',
    key: 'pincode',
  },
  {
    title: 'Diploma Percentage',
    dataIndex: 'diplomaPercentage',
    key: 'diplomaPercentage',
  },
  {
    title: '10th Percentage',
    dataIndex: 'tenthPercentage',
    key: 'tenthPercentage',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Popconfirm
        title="Are you sure you want to delete this record?"
        onConfirm={() => handleDeleteDsy(record)}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    ),
  },
];


// Fy 

 useEffect(() => {
    const fetchData = async () => {
      try {
        const formDataCollection = collection(db, 'formData');
        const formDataSnapshot = await getDocs(formDataCollection);
        const formDataData = formDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFormData(formDataData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const formDataCollection = collection(db, 'formData');
        const formDataSnapshot = await getDocs(formDataCollection);
        const formDataData = formDataSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFormData(formDataData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
    
  }, []);
  useEffect(() => {
    fetchNewsData();
  }, []);

  const handleDelete = async (record) => {
    try {
      await deleteDoc(doc(db, 'formData', record.id));
      setFormData(prevData => prevData.filter(item => item.id !== record.id));
      message.success('Record deleted successfully');
    } catch (error) {
      console.error('Error deleting record:', error);
      message.error('Failed to delete record');
    }
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Admission Process',
      dataIndex: 'admissionProcess',
      key: 'admissionProcess',
    },
    {
      title: 'Student of College',
      dataIndex: 'studentOfCollege',
      key: 'studentOfCollege',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Pincode',
      dataIndex: 'pincode',
      key: 'pincode',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this record?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];
  // const onFinish = async (values) => {
  //   try {
  //     setLoading(true);
  //     await addDoc(collection(db, 'news'), values);
  //     message.success('News added successfully');
  //     setLoading(false);
  //   } catch (error) {
  //     console.error('Error adding news:', error);
  //     message.error('Failed to add news');
  //     setLoading(false);
  //   }
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.error('Failed:', errorInfo);
  //   message.error('Please fill in all required fields');
  // };




  // news feed

  const fetchNewsData = async () => {
    try {
      const newsCollection = collection(db, 'news');
      const newsSnapshot = await getDocs(newsCollection);
      const newsData = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNewsList(newsData);
    } catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

  const addNewsItem = async (values) => {
    try {
      setLoading(true);
      await addDoc(collection(db, 'news'), values);
      message.success('News added successfully');
      setLoading(false);
      fetchNewsData();

    } catch (error) {
      console.error('Error adding news:', error);
      message.error('Failed to add news');
      setLoading(false);
    }
  };

  const handleDeleteNews = async (record) => {
    try {
      await deleteDoc(doc(db, 'news', record.id));
      setNewsList(prevList => prevList.filter(item => item.id !== record.id));
      message.success('News deleted successfully');
    } catch (error) {
      console.error('Error deleting news:', error);
      message.error('Failed to delete news');
    }
  };

  const columnsAction = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Link',
      dataIndex: 'link',
      key: 'link',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this news item?"
          onConfirm={() => handleDeleteNews(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const handleFormSubmit = async (values) => {
    await addNewsItem(values);
  };

  const handleFormSubmitFailure = (errorInfo) => {
    console.error('Failed:', errorInfo);
    message.error('Please fill in all required fields');
  };

  return (
    <div className='admin'>
    <div style={{ padding: '20px' }}>
      <center><h2>Student Enquiry</h2></center>
      <div className='admin-table-container'>
        <Table
          dataSource={formData}
          columns={columns}
          loading={loading}
          pagination={false}
          scroll={{ x: true }}
        />
      </div>
    </div>

    <div style={{ padding: '20px' }}>
        
    <div className='admin'>
      <div style={{ padding: '20px' }}>
        <center><h2>News Feed</h2></center>
        <Form
          name="news_form"
          onFinish={handleFormSubmit}
          onFinishFailed={handleFormSubmitFailure}
          layout="vertical"
          style={{ maxWidth: '400px', margin: 'auto' }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter the title' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Link"
            name="link"
            rules={[{ required: true, message: 'Please enter the link' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button  type="primary" htmlType="submit"  loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* News  */}
    </div>
        <center><h2>News Table</h2></center>
        <div style={{ padding: '20px' ,  maxHeight: '350px', overflowY: 'auto'  }}>
          <Table
            dataSource={newsList}
            columns={columnsAction}
            pagination={false}
            scroll={{ y: 'calc(100vh - 320px)' }}
            
          />
        </div>
    </div>
     
      </div>

      <div>
      <center><h2>1st Year Admission Table</h2></center>
      <div style={{ padding: '20px', maxHeight: '350px', overflowY: 'auto' }}>
        <Table
          dataSource={fyList}
          columns={fyColumns}
          loading={loading}
          pagination={false}
          scroll={{ y: 'calc(100vh - 320px)' }}
        />
      </div>
      <center><h2>2nd Year Admission Table</h2></center>
      <div style={{ padding: '20px', maxHeight: '350px', overflowY: 'auto' }}>
        <Table
          dataSource={dsyList}
          columns={dsyColumns}
          loading={loading}
          pagination={false}
          scroll={{ y: 'calc(100vh - 320px)' }}
        />
      </div>
    </div>


  </div>
  );
}

export default Admin;
