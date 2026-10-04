
const employees = [
  {
    id: 1,
    email: "faizan@gmail.com",
    password: "123",
    name: "Faizan",
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
  },

  {
    id: 2,
    email: "azeem@gmail.com",
    password: "123",
    name: "Azeem",
    role: "employee",
    tasks: [],
  },

  {
    id: 3,
    email: "ali@gmail.com",
    password: "123",
    name: "Ali",
    role: "employee",
    tasks: [],
  },

  {
    id: 4,
    email: "ahmed@gmail.com",
    password: "123",
    name: "Ahmed",
    role: "employee",
    tasks: [],
  },

  {
    id: 5,
    email: "usman@gmail.com",
    password: "123",
    name: "Usman",
    role: "employee",
    tasks: [],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
    name: "Admin",
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