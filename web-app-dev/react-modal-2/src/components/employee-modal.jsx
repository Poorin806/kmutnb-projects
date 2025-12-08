import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function EmployeeModal({
  isOpen,
  closeModal,
  currentEmployee,
  addOrUpdateEmployee,
}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (currentEmployee) {
      setName(currentEmployee.name);
      setAge(currentEmployee.age);
      setPosition(currentEmployee.position);
    } else {
      setName("");
      setAge("");
      setPosition("");
    }
  }, [currentEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      id: currentEmployee ? currentEmployee.id : undefined,
      name,
      age: parseInt(age),
      position,
    };

    addOrUpdateEmployee(employee);
  };

  return (
    /* 
      Modal backdrop container:
      - fixed: positions the modal relative to the viewport
      - top-0 left-0: anchors to top-left corner
      - flex: centers modal content horizontally and vertically
      - h-full w-full: full viewport height and width
      - items-center justify-center: center content both axes
      - bg-black/40: semi-transparent black overlay
      - transition-opacity duration-300 ease-in-out: smooth fade animation
      - pointer-events-auto / none: enables/disables interaction
      - z-50 / z-0: controls stacking order
      - opacity-100 / 0: toggles visibility
    */
    <div
      className={`fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/40 transition-opacity duration-300 ease-in-out ${
        isOpen
          ? "pointer-events-auto z-50 opacity-100"
          : "pointer-events-none z-0 opacity-0"
      }`}
    >
      {/* 
        Modal content box:
        - transform transition-transform duration-300: enables scale animation
        - scale-100 / scale-95: zoom effect on open/close
        - flex flex-col: vertical layout
        - h-[30rem] w-80: fixed height and width
        - items-start justify-around: align content top and space out vertically
        - gap-2: spacing between elements
        - rounded-md: medium border radius
        - bg-[#fefefe]: light background
        - p-4: padding 16px
        - text-[#242424]: dark text color
      */}
      <div
        className={`transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        } flex h-[30rem] w-80 flex-col items-start justify-around gap-2 rounded-md bg-[#fefefe] p-4 text-[#242424]`}
      >
        {/* 
          Modal title:
          - text-xl: font size ~20px
          - font-bold: bold text
        */}
        <h2 className="text-xl font-bold">
          {currentEmployee ? "Edit employee data" : "Add new employee data"}
        </h2>

        {/* 
          Input label and field: Name
          - w-full: full width
          - rounded: border radius
          - border: default border
          - px-2 py-1: padding (horizontal 8px, vertical 4px)
        */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border px-2 py-1"
        />

        {/* Input label and field: Age */}
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded border px-2 py-1"
        />

        {/* Input label and field: Position */}
        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full rounded border px-2 py-1"
        />

        {/* 
          Button row:
          - mt-4: margin-top 16px
          - flex items-center: horizontal layout, vertical alignment
          - gap-2: spacing between buttons
        */}
        <div className="mt-4 flex items-center gap-2">
          {/* 
            Submit button:
            - h-8 w-20: height 32px, width 80px
            - rounded: border radius
            - bg-blue-500: blue background
            - text-white: white text
            - transition hover:bg-blue-600: smooth hover effect
          */}
          <button
            onClick={handleSubmit}
            className="h-8 w-20 rounded bg-blue-500 text-white transition hover:bg-blue-600"
          >
            {currentEmployee ? "Update" : "Add"}
          </button>

          {/* 
            Close button:
            - same layout as Submit, but red background
          */}
          <button
            className="h-8 w-20 rounded bg-red-500 text-white transition hover:bg-red-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

EmployeeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  currentEmployee: PropTypes.object,
  addOrUpdateEmployee: PropTypes.func.isRequired,
};
