import React from 'react'
import Header from '../others/header'

const AdminDashboard = () => {
   const handleSubmit = (e) => {
    e.preventDefault();
    alert("Task Created Successfully!");
  };

  return (
    <div >

       <Header/>

      <h1>Admin Panel</h1>

      <div >
        <h3>⊕ Create Task</h3>

        <form onSubmit={handleSubmit}>
          <label>Task Title</label>
          <input
            type="text"
            placeholder="Make UI design"
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Detailed description of task (max 500 words)"
            maxLength="2500"
            required
          />

          <label>Date</label>
          <input type="date" required />

          <label>Assign To</label>
          <input type="text" required />

          <label>Category</label>
          <input
            type="text"
            placeholder="Design, Development, etc..."
            required
          />

          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard
