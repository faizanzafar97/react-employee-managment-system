const employees = [
  {
    id: 1,
    email: "faizan@gmail.com",
    password: "123",
    firstName: "Faizan",
    name: "Faizan Khan",
    role: "employee",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Dashboard",
        taskDescription:
          "Build a responsive employee dashboard using React and Tailwind CSS.",
        taskDate: "2026-10-05",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a modern and responsive login page.",
        taskDate: "2026-10-07",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Project",
        taskDescription:
          "Create the React project structure.",
        taskDate: "2026-10-01",
        category: "Development",
      },
    ],

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 2,
    email: "azeem@gmail.com",
    password: "123",
    firstName: "Azeem",
    name: "Azeem Malik",
    role: "employee",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Profile",
        taskDescription:
          "Create an employee profile page with personal information.",
        taskDate: "2026-10-06",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription:
          "Improve the employee dashboard layout.",
        taskDate: "2026-10-08",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription:
          "Create a responsive navigation bar.",
        taskDate: "2026-10-02",
        category: "Design",
      },
    ],

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 3,
    email: "ali@gmail.com",
    password: "123",
    firstName: "Ali",
    name: "Ali Sharma",
    role: "employee",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Contact Page",
        taskDescription:
          "Build a responsive contact page.",
        taskDate: "2026-10-09",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription:
          "Configure React Router for the project.",
        taskDate: "2026-10-03",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription:
          "Fix the authentication issue.",
        taskDate: "2026-10-04",
        category: "Bug Fix",
      },
    ],

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },

  {
    id: 4,
    email: "ahmed@gmail.com",
    password: "123",
    firstName: "Ahmed",
    name: "Ahmed Verma",
    role: "employee",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Component",
        taskDescription:
          "Create reusable task components in React.",
        taskDate: "2026-10-10",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve UI Design",
        taskDescription:
          "Improve the overall application interface.",
        taskDate: "2026-10-11",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription:
          "Create a responsive footer component.",
        taskDate: "2026-10-03",
        category: "Design",
      },
    ],

    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },

  {
    id: 5,
    email: "usman@gmail.com",
    password: "123",
    firstName: "Usman",
    name: "Usman Patel",
    role: "employee",

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription:
          "Build a reports page for employees.",
        taskDate: "2026-10-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription:
          "Add validation to employee forms.",
        taskDate: "2026-10-04",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Dashboard Layout",
        taskDescription:
          "Fix responsive layout issues.",
        taskDate: "2026-10-05",
        category: "Bug Fix",
      },
    ],

    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
    firstName: "Raj",
    name: "Raj Kumar",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

  localStorage.setItem(
    "admin",
    JSON.stringify(admin)
  );
};

export const getLocalStorage = () => {
  let employeesData = JSON.parse(
    localStorage.getItem("employees")
  );

  let adminData = JSON.parse(
    localStorage.getItem("admin")
  );

  if (!employeesData) {
    employeesData = employees;

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }

  if (!adminData) {
    adminData = admin;

    localStorage.setItem(
      "admin",
      JSON.stringify(admin)
    );
  }

  return {
    employeesData,
    adminData,
  };
};