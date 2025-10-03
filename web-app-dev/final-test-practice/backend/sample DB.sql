-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2025 at 05:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_db`
--
DROP DATABASE IF EXISTS `kmutnb_weblab_employee_db`;
CREATE DATABASE IF NOT EXISTS `kmutnb_weblab_employee_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `kmutnb_weblab_employee_db`;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `DepartID` varchar(8) NOT NULL,
  `DepartName` varchar(40) NOT NULL,
  PRIMARY KEY (`DepartID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`DepartID`, `DepartName`) VALUES
('D001', 'MARKETING');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `EmpID` varchar(8) NOT NULL,
  `EmpName` varchar(40) NOT NULL,
  `DepartID` varchar(8) NOT NULL,
  `PosID` varchar(8) NOT NULL,
  PRIMARY KEY (`EmpID`),
  KEY `DepartID` (`DepartID`) USING BTREE,
  KEY `PosID` (`PosID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`EmpID`, `EmpName`, `DepartID`, `PosID`) VALUES
('P001', 'Nopphagaw', 'D001', 'P001');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

DROP TABLE IF EXISTS `positions`;
CREATE TABLE IF NOT EXISTS `positions` (
  `posID` varchar(8) NOT NULL,
  `posName` varchar(40) NOT NULL,
  PRIMARY KEY (`posID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`posID`, `posName`) VALUES
('P001', 'Director manager');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`DepartID`) REFERENCES `departments` (`DepartID`),
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`PosID`) REFERENCES `positions` (`posID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
