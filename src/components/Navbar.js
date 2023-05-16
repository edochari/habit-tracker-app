import React from "react";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitSlice";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
const Navbar = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [habit, setHabit] = useState('');
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();



  // function for add habit 
  const handleAddHabitClick = (e) => {
    e.preventDefault();
    if(habit === ""){
      alert("please add something");
      return ;
    }
    dispatch(addHabit(habit));
    alert("Your habit added successfully");
    document.getElementById("habitName").value = "";
  }

  return (
    <>
    
      <div className='heading'>
        Habits

      </div>
      
      <div className="navbar">
        <Button className="add-habit-btn btn" onClick={() => { setIsOpen(true) }}>
          Add Habit
        </Button>

      </div>
      <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title className="habitText">Adding Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAddHabitClick}>
            <label className="habitText">Enter Habit</label>
            <input id="habitName" type="text" onChange={(e) => { setHabit(e.target.value) }} />
            <Button variant="primary" type="submit" >
              Save Habit
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)} >
            Close
          </Button>
        </Modal.Footer>

      </Modal>
    </>


  );
};

export default Navbar;