import "./App.css";
import EmployeeList from "./components/employee-list";
import EmployeeModal from "./components/employee-modal";
import Engine from "./components/engine";

function App() {
  const {
    employees,
    isOpen,
    currentEmployee,
    openModal,
    closeModal,
    addOrUpdateEmployee,
    deleteEmployee,
  } = Engine();

  return (
    /* 
      <main> container styles:
      - relative: allows absolutely positioned children
      - min-h-svh: minimum height = 100% of small viewport height
      - w-full: full width
      - bg-[#242424]: dark background color
      - p-4: padding 16px (4 × 4px)
      - text-[#fefefe]: light text color
    */
    <main className="relative min-h-svh w-full bg-[#242424] p-4 text-[#fefefe]">
      {/* 
        Centered content wrapper:
        - m-auto: center horizontally
        - w-2/3: width = 66.666%
      */}
      <div className="m-auto w-2/3">
        {/* 
          Header row:
          - flex: horizontal layout
          - w-full: full width
          - items-center: vertical alignment
          - justify-between: space between title and button
        */}
        <div className="flex w-full items-center justify-between">
          {/* 
            Title:
            - mb-3: margin-bottom 12px
            - text-2xl: font size ~24px
            - font-bold: bold text
          */}
          <h1 className="mb-3 text-2xl font-bold">Employee CRUD</h1>

          {/* 
            Add button:
            - h-6: height 24px
            - w-16: width 64px
            - rounded: border-radius
            - bg-green-400: green background
            - text-white: white text
          */}
          <button
            className="h-6 w-16 rounded bg-green-400 text-white"
            onClick={() => openModal(null)}
          >
            Add
          </button>
        </div>
        <EmployeeList
          employeeList={employees}
          openModal={openModal}
          deleteEmployee={deleteEmployee}
        />
      </div>

      <EmployeeModal
        isOpen={isOpen}
        closeModal={closeModal}
        currentEmployee={currentEmployee}
        addOrUpdateEmployee={addOrUpdateEmployee}
      />
    </main>
  );
}

export default App;
