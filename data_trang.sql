-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 12, 2022 at 01:58 PM
-- Server version: 5.7.38-0ubuntu0.18.04.1
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_banking`
--

CREATE TABLE `account_banking` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_bank` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `info` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `address_user`
--

CREATE TABLE `address_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `hovaten` varchar(50) NOT NULL,
  `sdt` varchar(15) NOT NULL,
  `ma_pin` varchar(50) NOT NULL,
  `what_app` varchar(50) NOT NULL,
  `address_require` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `tinh` varchar(20) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `banking_user`
--

CREATE TABLE `banking_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `name_banking` varchar(100) NOT NULL,
  `stk` varchar(50) NOT NULL,
  `time` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `chatbox`
--

CREATE TABLE `chatbox` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(50) CHARACTER SET utf8 NOT NULL,
  `user_name` varchar(50) CHARACTER SET utf8 NOT NULL,
  `content` text CHARACTER SET utf8 NOT NULL,
  `time` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `check`
--

CREATE TABLE `check` (
  `id` int(11) NOT NULL,
  `user_ck` varchar(11) NOT NULL,
  `user_nhan` varchar(11) NOT NULL,
  `price` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `financial_details`
--

CREATE TABLE `financial_details` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `loai` int(1) NOT NULL,
  `money` int(11) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `history_redenvelope`
--

CREATE TABLE `history_redenvelope` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `name_user` varchar(30) NOT NULL,
  `id_txn` varchar(50) NOT NULL,
  `money` int(11) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_woipy`
--

CREATE TABLE `order_woipy` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `name_user` varchar(30) NOT NULL,
  `ma_gt` int(7) NOT NULL,
  `ma_gt_f1` int(7) NOT NULL,
  `permission` varchar(5) NOT NULL,
  `ket_qua` int(6) NOT NULL DEFAULT '0',
  `giai_doan` varchar(100) NOT NULL,
  `chon` varchar(1) NOT NULL,
  `so_tien_cuoc` int(11) NOT NULL,
  `giao_hang` int(11) NOT NULL,
  `nhan_duoc` int(11) NOT NULL DEFAULT '0',
  `phi_dich_vu` int(11) NOT NULL,
  `hh_f1` int(11) NOT NULL,
  `hh_f2` int(11) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `time_buy` varchar(30) NOT NULL,
  `time_end` varchar(30) NOT NULL DEFAULT 'Loading...'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `recharge`
--

CREATE TABLE `recharge` (
  `id` int(10) UNSIGNED NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `money` int(11) NOT NULL,
  `id_txn` varchar(50) NOT NULL,
  `ma_don` varchar(15) NOT NULL,
  `loai` varchar(10) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL DEFAULT '0',
  `timeEnd` varchar(100) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL DEFAULT 'time_create'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `redenvelope`
--

CREATE TABLE `redenvelope` (
  `id` int(11) NOT NULL,
  `id_txn` varchar(50) NOT NULL,
  `used` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `conlai` int(11) NOT NULL,
  `money` int(11) NOT NULL,
  `type` varchar(10) NOT NULL,
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tage_woipy`
--

CREATE TABLE `tage_woipy` (
  `id` int(11) NOT NULL,
  `giai_doan` varchar(100) NOT NULL,
  `cau` varchar(11) NOT NULL DEFAULT '0',
  `ket_qua` int(11) NOT NULL,
  `time_create` varchar(30) NOT NULL,
  `time_end` varchar(30) NOT NULL DEFAULT 'Loading...'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `temp`
--

CREATE TABLE `temp` (
  `id` int(11) NOT NULL,
  `ket_qua` int(11) NOT NULL DEFAULT '0',
  `khuyen_mai` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `id_user` varchar(20) NOT NULL DEFAULT '0',
  `phone_login` varchar(100) NOT NULL DEFAULT '0',
  `name_member` varchar(100) NOT NULL DEFAULT '0',
  `token` text NOT NULL,
  `password_v1` varchar(100) NOT NULL DEFAULT '0',
  `password_payment` varchar(100) NOT NULL DEFAULT '0',
  `name_user` varchar(50) NOT NULL DEFAULT '0',
  `lever` varchar(5) NOT NULL DEFAULT 'user',
  `status_login` int(1) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `total_money` int(11) NOT NULL DEFAULT '0',
  `ip` varchar(150) NOT NULL DEFAULT '0',
  `ma_gt` int(7) NOT NULL DEFAULT '0',
  `ma_gt_f1` int(7) NOT NULL DEFAULT '0',
  `veri` int(1) NOT NULL DEFAULT '0',
  `sented` int(1) NOT NULL DEFAULT '0',
  `total_send` int(1) NOT NULL DEFAULT '0',
  `otp` int(6) NOT NULL DEFAULT '0',
  `time` varchar(50) NOT NULL DEFAULT 'time_loading'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `wallet_bonus`
--

CREATE TABLE `wallet_bonus` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `money` int(11) NOT NULL DEFAULT '0',
  `ref_f1` int(11) NOT NULL DEFAULT '0',
  `ref_f2` int(11) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL DEFAULT 'time'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `withdraw`
--

CREATE TABLE `withdraw` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `id_don` varchar(50) NOT NULL DEFAULT '0',
  `name_banking` varchar(30) NOT NULL DEFAULT '0',
  `chutk` varchar(50) NOT NULL,
  `stk` varchar(50) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `realmoney` int(11) NOT NULL DEFAULT '0',
  `fee` int(11) NOT NULL DEFAULT '0',
  `status` int(1) NOT NULL DEFAULT '0',
  `time` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `withdraw_bonus`
--

CREATE TABLE `withdraw_bonus` (
  `id` int(11) NOT NULL,
  `phone_login` varchar(100) NOT NULL,
  `money` int(11) NOT NULL,
  `day` varchar(5) NOT NULL,
  `time_month_year` varchar(10) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_banking`
--
ALTER TABLE `account_banking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address_user`
--
ALTER TABLE `address_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phone_login` (`phone_login`),
  ADD KEY `phone_login_2` (`phone_login`);

--
-- Indexes for table `banking_user`
--
ALTER TABLE `banking_user`
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `phone_login` (`phone_login`);

--
-- Indexes for table `chatbox`
--
ALTER TABLE `chatbox`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `check`
--
ALTER TABLE `check`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `financial_details`
--
ALTER TABLE `financial_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history_redenvelope`
--
ALTER TABLE `history_redenvelope`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_woipy`
--
ALTER TABLE `order_woipy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recharge`
--
ALTER TABLE `recharge`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phone_login` (`phone_login`);

--
-- Indexes for table `redenvelope`
--
ALTER TABLE `redenvelope`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tage_woipy`
--
ALTER TABLE `tage_woipy`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temp`
--
ALTER TABLE `temp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`phone_login`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `wallet_bonus`
--
ALTER TABLE `wallet_bonus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phone_login` (`phone_login`);

--
-- Indexes for table `withdraw`
--
ALTER TABLE `withdraw`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraw_bonus`
--
ALTER TABLE `withdraw_bonus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phone_login` (`phone_login`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_banking`
--
ALTER TABLE `account_banking`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `address_user`
--
ALTER TABLE `address_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banking_user`
--
ALTER TABLE `banking_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chatbox`
--
ALTER TABLE `chatbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `check`
--
ALTER TABLE `check`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `financial_details`
--
ALTER TABLE `financial_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history_redenvelope`
--
ALTER TABLE `history_redenvelope`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_woipy`
--
ALTER TABLE `order_woipy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recharge`
--
ALTER TABLE `recharge`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `redenvelope`
--
ALTER TABLE `redenvelope`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tage_woipy`
--
ALTER TABLE `tage_woipy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `temp`
--
ALTER TABLE `temp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallet_bonus`
--
ALTER TABLE `wallet_bonus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `withdraw`
--
ALTER TABLE `withdraw`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `withdraw_bonus`
--
ALTER TABLE `withdraw_bonus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address_user`
--
ALTER TABLE `address_user`
  ADD CONSTRAINT `address_user_ibfk_1` FOREIGN KEY (`phone_login`) REFERENCES `users` (`phone_login`) ON DELETE CASCADE;

--
-- Constraints for table `recharge`
--
ALTER TABLE `recharge`
  ADD CONSTRAINT `recharge_ibfk_1` FOREIGN KEY (`phone_login`) REFERENCES `users` (`phone_login`) ON DELETE CASCADE;

--
-- Constraints for table `withdraw_bonus`
--
ALTER TABLE `withdraw_bonus`
  ADD CONSTRAINT `withdraw_bonus_ibfk_1` FOREIGN KEY (`phone_login`) REFERENCES `users` (`phone_login`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
