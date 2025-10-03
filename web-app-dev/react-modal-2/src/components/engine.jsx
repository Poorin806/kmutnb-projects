import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

function Engine() {
  const [employees, setEmployees] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const URL = "http://localhost:8080/api.php";

  const openModal = (employee) => {
    setCurrentEmployee(employee);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);

    setTimeout(() => {
      setCurrentEmployee(null);
    }, 1000);
  };

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(URL);
      setEmployees(response.data);
    } catch (err) {
      console.error("Fetch failed: ", err);
    }
  };

  const addOrUpdateEmployee = async (emp) => {
    try {
      if (currentEmployee) {
        await axios.put(URL, emp, {
          headers: { "Content-Type": "application/json" },
        });
      } else {
        await axios.post(URL, emp, {
          headers: { "Content-Type": "application/json" },
        });
      }

      fetchEmployee();
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (empId) => {
    try {
      await axios.delete(`${URL}/${empId}`);
      fetchEmployee();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return {
    employees,
    isOpen,
    currentEmployee,
    openModal,
    closeModal,
    addOrUpdateEmployee,
    deleteEmployee,
  };
}

export default Engine;
