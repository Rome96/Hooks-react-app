import React, {useState, useEffect} from 'react'
import './effect.css'

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Hey!')
  }, []);

  useEffect(() => {
    console.log('fromState cambió!');
  }, [formState]);

  useEffect(() => {
    console.log("email cambió!");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  return (
    <>
      <h3>Form</h3>
      <hr />
      <div className="form-group">
        <p>Name:</p>
        <input
          name="name"
          type="text"
          value={name}
          placeholder='name'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="form-group">
        <p>Email:</p>
        <input
          name="email"
          type="text"
          value={email}
          placeholder='email'
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
};

export default SimpleForm;