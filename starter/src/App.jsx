import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useEffect, useState } from 'react';
import instance from './utils.js/custom';

const App = () => {
  // const [items, setItems] = useState([]);

  // const fetchTask = async ()=> {
  //   try {
  //     const  response  =await  instance.get()
  //     setItems(response.data.taskList)
  //   } catch (error) {
  //     setItems([])
  //   }
  // }

  // useEffect(()=> {
  //   fetchTask()
  // }, [])
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items  />
    </section>
  );
};
export default App;
