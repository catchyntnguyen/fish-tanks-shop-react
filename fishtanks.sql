-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 08, 2024 at 05:06 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fishtanks`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `img`) VALUES
(1, 'Bể cá', 'Bể cá danh mục lớn của các bể cá bao gòm bể cá build sẵn và về cá chưa buld', ''),
(2, 'Phụ kiện bể cá', 'Phụ kiện bể cá', ''),
(3, 'Aquarium', 'Aquarium', ''),
(4, 'Vật dụng bể cá', 'Vật dụng bể cá', '');

-- --------------------------------------------------------

--
-- Table structure for table `categories_brand`
--

CREATE TABLE `categories_brand` (
  `id` int NOT NULL,
  `categoryId` int DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `categories_brand`
--

INSERT INTO `categories_brand` (`id`, `categoryId`, `name`, `img`, `description`) VALUES
(1, 1, 'Innovative Marine', 'Innovative_Marine.jpg', 'Innovative Marine'),
(2, 1, 'Red Sea Aquariums', 'Red_Sea_Aquariums.webp', 'Red Sea Aquariums'),
(3, 1, 'SeaClear Aquariums', 'SeaClear_Aquariums.webp', 'SeaClear Aquariums'),
(4, 1, 'Pro Clear Aquatic Systems', 'Pro_Clear_Aquatic_Systems.webp', 'Pro Clear Aquatic Systems'),
(5, 3, 'AquaEL Aquariums', 'AquaEL_Aquariums.webp', 'AquaEL Aquariums'),
(6, 3, 'Eheim Aquariums', 'Eheim_Aquariums.webp', 'Eheim Aquariums');

-- --------------------------------------------------------

--
-- Table structure for table `config_fishtanks`
--

CREATE TABLE `config_fishtanks` (
  `id` int NOT NULL,
  `productId` int NOT NULL,
  `gallons` varchar(200) NOT NULL,
  `length` int NOT NULL,
  `width` int NOT NULL,
  `material` varchar(200) NOT NULL,
  `height` int NOT NULL,
  `shape` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `config_fishtanks`
--

INSERT INTO `config_fishtanks` (`id`, `productId`, `gallons`, `length`, `width`, `material`, `height`, `shape`) VALUES
(1, 1, '3028', 304, 122, 'Acrylic', 122, '1'),
(2, 119, '946.25-756', 200, 68, 'Acrylic', 68, '1'),
(3, 120, '703.71-567.75 ', 151, 68, 'Acrylic', 68, '1'),
(4, 121, '945-756 ', 200, 68, 'Acrylic', 68, '1'),
(5, 122, '352-276 ', 96, 64, 'Acrylic', 68, '1'),
(6, 123, '851 ', 183, 61, 'Acrylic', 68, '1'),
(7, 124, '908 ', 244, 61, 'Acrylic', 68, '1'),
(8, 125, '757 ', 182, 46, 'Acrylic', 68, '1'),
(9, 126, '567 ', 182, 45, 'Acrylic', 68, '1'),
(12, 127, '870 ', 182, 66, 'glass', 68, '1'),
(13, 128, '870 ', 66, 61, 'glass', 68, '1'),
(14, 129, '567 ', 121, 61, 'glass', 68, '1'),
(15, 130, '227 ', 61, 61, 'glass', 68, '1'),
(16, 131, '242.5 ', 90, 60, 'glass', 68, '1'),
(17, 132, '64.7 ', 60, 30, 'glass', 68, '1'),
(18, 133, '242.5 ', 90, 65, 'glass', 68, '1'),
(19, 134, '64.7 ', 90, 60, 'glass', 68, '1');

-- --------------------------------------------------------

--
-- Table structure for table `imgproducts`
--

CREATE TABLE `imgproducts` (
  `id` int NOT NULL,
  `productId` int DEFAULT NULL,
  `img_url` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `imgproducts`
--

INSERT INTO `imgproducts` (`id`, `productId`, `img_url`, `created_at`) VALUES
(1, 1, 'logo1610988622.webp', '2024-07-10 13:20:09'),
(2, 1, '1610988793.1280.1280__30393.jpg', '2024-07-10 13:20:09'),
(3, 1, '1610988794.1280.1280__02138.jpg', '2024-07-10 13:20:34'),
(4, 1, '1610988794.1280.1280__33070.jpg', '2024-07-10 13:20:34'),
(5, 119, 'R43735G2P_copy__64511__05771.jpg', '2024-07-10 13:33:14'),
(6, 119, 'reefer_max_peninsula_s-950_g2_system_-_black_-_red_sea_1__05106.jpg', '2024-07-10 13:33:14'),
(7, 119, 'ATO__87140__81875.jpg', '2024-07-10 13:33:27'),
(8, 120, 'R43733G2P_copy__14724__50204.jpg', '2024-07-10 13:45:30'),
(9, 120, 'ATO__52377__11980.jpg', '2024-07-10 13:45:30'),
(10, 120, 'R43734G2P_copy__43412__97901.jpg', '2024-07-10 14:18:08'),
(11, 120, 'reefer_max_peninsula_s-950_g2_system_-_white_-_red_sea_1__95657.jpg', '2024-07-10 14:18:08'),
(12, 121, 'ATO__87140__52143.jpg', '2024-07-10 14:18:30'),
(13, 122, 'R43728G2P_copy__19818__19863.jpg', '2024-07-10 14:31:58'),
(14, 122, 'reefer_max_peninsula_350_g2_system_-_white_-_red_sea_1__68723.jpg', '2024-07-10 14:31:58'),
(15, 122, 'ATO__87140__61424.jpg', '2024-07-10 14:32:15'),
(16, 123, 'X10-101-56405-4__03237.jpg', '2024-07-10 14:48:35'),
(17, 123, 'X10-101-56405-3__15432.jpg', '2024-07-10 14:48:35'),
(18, 123, 'X10-101-56405-2__43210.jpg', '2024-07-10 14:49:15'),
(19, 123, 'X10-101-56408-4__65005.jpg', '2024-07-10 14:49:15'),
(20, 124, 'X10-101-56405-4__41300.jpg', '2024-07-10 14:50:09'),
(21, 124, 'X10-101-56405-3__92968.jpg', '2024-07-10 14:50:09'),
(22, 124, 'X10-101-56296-4__95852.jpg', '2024-07-10 14:50:44'),
(23, 124, 'X10-101-56296-3__28393.jpg', '2024-07-10 14:50:44'),
(24, 125, 'X10-101-53365-3__88809__14751.jpg', '2024-07-10 14:59:01'),
(25, 125, '200_Bowfront_Tank_and_Top__19018.webp', '2024-07-10 14:59:01'),
(26, 125, 'X10-101-53365-4__30048__59368.jpg', '2024-07-10 15:00:02'),
(27, 125, 'X10-101-53365-2__06425__82381.jpg', '2024-07-10 15:00:02'),
(28, 126, 'X10-101-57265-5__44179__73653.jpg', '2024-07-10 15:15:00'),
(29, 126, '150_FBH_Tank_and_Top__63263.webp', '2024-07-10 15:15:00'),
(30, 126, 'X10-101-57265-3__86653__04380.jpg', '2024-07-10 15:15:32'),
(31, 126, 'X10-101-57265-2__30362__14647.jpg', '2024-07-10 15:15:32'),
(32, 127, 'ProStar230PeninsulaBlack1__11456.webp', '2024-07-10 17:06:49'),
(33, 127, 'ProStar230PeninsulaBlack2__35210.webp', '2024-07-10 17:06:49'),
(34, 127, 'ProStar230PeninsulaBlack3__37623.webp', '2024-07-10 17:07:21'),
(35, 127, 'ProStar230PeninsulaBlack7__55452.webp', '2024-07-10 17:07:21'),
(36, 128, 'ProStar230PeninsulaWhite1__99044.webp', '2024-07-10 17:24:26'),
(37, 128, 'ProStar230PeninsulaWhite4__85112.webp', '2024-07-10 17:24:26'),
(38, 128, 'ProStar230PeninsulaWhite6__75557.webp', '2024-07-10 17:24:54'),
(39, 128, 'ProStar230PeninsulaWhite7__41718.webp', '2024-07-10 17:24:54'),
(40, 129, 'ProStar150PeninsulaBlack1__03381.webp', '2024-07-10 17:28:41'),
(41, 129, 'ProStar150PeninsulaBlack5__11138.webp', '2024-07-10 17:28:41'),
(42, 129, 'ProStar150PeninsulaBlack6__72347.webp', '2024-07-10 17:29:14'),
(43, 129, 'ProStar150PeninsulaBlack8__93179.webp', '2024-07-10 17:29:14'),
(44, 130, 'ProStar60Black1__25254.webp', '2024-07-10 17:33:43'),
(45, 130, 'ProStar60Black3__13530.png', '2024-07-10 17:33:43'),
(46, 130, 'ProStar60Black6__28321.webp', '2024-07-10 17:34:13'),
(47, 130, 'ProStar60Black8__15953.webp', '2024-07-10 17:34:13'),
(48, 131, 'Ultrascape_90_forest_main_image_ULTRA__88089 (1).webp', '2024-07-11 05:01:44'),
(49, 131, 'Ultrascape_90_forest_specs__27217 (1).webp', '2024-07-11 05:01:44'),
(50, 131, 'Ultrascape_90_forest_cabinet_features__07306.webp', '2024-07-11 05:02:38'),
(51, 131, 'Ultrascape_90_forest_whats_included_ULTRA__26455.webp', '2024-07-11 05:02:38'),
(52, 132, 'Ultrascape_60_forest_main_image_ULTRA__91503.webp', '2024-07-11 05:06:58'),
(53, 132, 'Ultrascape_60_forest_specs__74290.webp', '2024-07-11 05:06:58'),
(54, 132, 'Ultrascape_60_forest_whats_included_ULTRA__82899.webp', '2024-07-11 05:13:52'),
(55, 132, 'Ultrascape_60_forest_cabinet_features__23308.webp', '2024-07-11 05:13:52'),
(56, 133, 'Ultrascape_90_forest_main_image_LEDDY__30417.webp', '2024-07-11 05:27:20'),
(57, 133, 'Ultrascape_90_forest_specs__75116.webp', '2024-07-11 05:27:20'),
(58, 133, 'Ultrascape_90_forest_cabinet_features__19462.webp', '2024-07-11 05:27:51'),
(59, 133, 'Ultrascape_90_forest_lifestyle_LEDDY__47024.webp', '2024-07-11 05:27:51'),
(60, 134, 'Ultrascape_60_forest_main_image_LEDDY__96672.webp', '2024-07-11 05:32:34'),
(61, 134, 'Ultrascape_60_forest_specs__47110.webp', '2024-07-11 05:32:34'),
(62, 134, 'Ultrascape_60_forest_whats_included_LEDDY__30339.webp', '2024-07-11 05:33:06'),
(63, 134, 'Ultrascape_60_forest_cabinet_features__60021.webp', '2024-07-11 05:33:06'),
(64, 135, 'CD00006-2T__15810.jpg', '2024-07-11 14:22:47'),
(65, 136, 'CarbonDoser_Polyurethane_tubing_-_CO2_Resistant_8__54466.jpg', '2024-07-11 14:25:43'),
(66, 137, 'ContinuumAquaBladeMScraper35wStainlessSteelBlade__57059.jpg', '2024-07-11 14:28:10'),
(67, 137, 'ContinuumAquaBladeMScraper35wStainlessSteelBlade.1__27604.jpg', '2024-07-11 14:28:10'),
(68, 138, 'JBJ62911-2T__34798.jpg', '2024-07-11 14:29:49'),
(69, 139, 'RCO31017-2T__28408.jpg', '2024-07-11 14:31:39'),
(70, 140, 'biopellets__80021.jpg', '2024-07-11 14:33:35'),
(71, 141, 'Lee555LargeBioBalls__98128.jpg', '2024-07-11 14:35:29'),
(72, 142, 'KL0PC20-2T__12511.webp', '2024-07-11 14:37:32'),
(73, 143, 'AC00007-2T__14725.jpg', '2024-07-11 14:40:29'),
(74, 144, 'AC00006-2T__57508.jpg', '2024-07-11 14:42:33'),
(75, 145, 'Aqueon16ozTapWater__03979.jpg', '2024-07-11 14:44:37'),
(76, 146, '16Oz.AqueonWaterClarifier__31710.jpg', '2024-07-11 14:47:03'),
(77, 135, 'CD00006-2T__15810.jpg', '2024-07-11 14:22:47'),
(78, 141, 'Lee555LargeBioBalls__98128.jpg', '2024-07-11 14:35:29'),
(79, 135, 'CD00006-2T__15810.jpg', '2024-07-11 14:22:47'),
(80, 140, 'biopellets__80021.jpg', '2024-07-11 14:33:35'),
(81, 141, 'Lee555LargeBioBalls__98128.jpg', '2024-07-11 14:35:29'),
(82, 143, 'AC00007-2T__14725.jpg', '2024-07-11 14:40:29'),
(83, 144, 'AC00006-2T__57508.jpg', '2024-07-11 14:42:33'),
(84, 145, 'Aqueon16ozTapWater__03979.jpg', '2024-07-11 14:44:37'),
(85, 146, '16Oz.AqueonWaterClarifier__31710.jpg', '2024-07-11 14:47:03'),
(86, 138, 'JBJ62911-2T__34798.jpg', '2024-07-11 14:29:49'),
(138, 165, '71mZA1LLHJL._AC_SL1500___41951.jpg', '2024-08-02 08:33:04'),
(139, 165, 'Hypermax-4500-simple-controls-2-__02173.webp', '2024-08-02 08:33:04'),
(140, 165, '302a9793_2_carbomax_bioceramax_263-810x719__63157.jpg', '2024-08-02 08:33:04'),
(141, 166, '71mZA1LLHJL._AC_SL1500___41951.jpg', '2024-08-02 08:35:17'),
(142, 166, 'Hypermax-4500-simple-controls-2-__02173.webp', '2024-08-02 08:35:17'),
(143, 166, '302a9793_2_carbomax_bioceramax_263-810x719__63157.jpg', '2024-08-02 08:35:17');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` int NOT NULL,
  `idOrder` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` int NOT NULL,
  `total` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `idOrder`, `product_id`, `quantity`, `price`, `total`) VALUES
(30, 661777, 119, 2, 261027000, 522054000),
(31, 661778, 123, 1, 50600000, 50600000),
(32, 661778, 125, 1, 48300000, 48300000),
(33, 661779, 123, 2, 50600000, 101200000),
(34, 661780, 123, 1, 50600000, 50600000),
(35, 661780, 125, 1, 48300000, 48300000),
(36, 661780, 119, 1, 261027000, 261027000),
(37, 661780, 132, 1, 22539770, 22539770),
(38, 661780, 133, 1, 28749770, 28749770),
(39, 661781, 123, 1, 50600000, 50600000);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `idUserBuy` int NOT NULL,
  `receiverName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `receiverPhone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `receiverEmail` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `receiverAddress` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `payment` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `status` int NOT NULL,
  `methodpay` varchar(100) COLLATE utf8mb3_unicode_ci NOT NULL,
  `total` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `idUserBuy`, `receiverName`, `receiverPhone`, `receiverEmail`, `receiverAddress`, `createdAt`, `payment`, `status`, `methodpay`, `total`) VALUES
(661777, 1, 'Nguyễn Văn A', '0348378112', 'admin@gmail.com', 'ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc Tỉnh Bến Tre', '2024-07-29 15:00:11', 'cash', 1, 'free', 522054000),
(661778, 1, 'Nguyễn Văn A', '0348378112', 'admin@gmail.com', 'ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc Tỉnh Bến Tre', '2024-07-29 15:01:14', 'cash', 0, 'free', 98900000),
(661779, 1, 'Nguyễn Văn A', '0348378112', 'admin@gmail.com', 'ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc Tỉnh Bến Tre', '2024-07-29 15:29:42', 'cash', 2, 'free', 101200000),
(661780, 1, 'Nguyễn Văn A', '0348378112', 'admin@gmail.com', 'ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc Tỉnh Bến Tre', '2024-07-31 11:03:13', 'cash', 3, 'free', 411216540),
(661781, 1, 'Nguyễn Văn A', '0348378112', 'admin@gmail.com', 'ấp Chợ Xếp xã Tân Thành Bình huyện Mỏ Cày Bắc Tỉnh Bến Tre', '2024-07-31 11:43:29', 'cash', 0, 'free', 50600000);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `categories` int DEFAULT NULL,
  `brandId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `priceNew` int DEFAULT NULL,
  `priceOld` int NOT NULL,
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `producthot` int DEFAULT NULL,
  `buidtime` int NOT NULL COMMENT '0: là sp có sẵm\r\n1: 1 - 2 tuần \r\n2: 3 - 4 tuần'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `img`, `categories`, `brandId`, `quantity`, `priceNew`, `priceOld`, `description`, `producthot`, `buidtime`) VALUES
(1, 'Tsunami 800-Gallon 121\"Lx48\"Wx36\"H Rectangular Acrylic Aquarium Setup', 'logo1610988622.webp', 1, 1, 1, 301875000, 301875000, 'Price is for Aquarium only. Customize Your Filtration and Stand below. Different Stand Colors Available. This is shipped via freight truck. No UPS or FedEx. Select Free Shipping. This product is not able to be shipped via UPS\r\n\r\n800 Gallon Acrylic Aquarium\r\n\r\n120\"L x 48\"W x 36\"H\r\n \r\nThe true length of this aquarium can vary from 119\" to 120\" due to the acrylic sheet manufacturing.\r\n\r\nAcrylic Thickness:   1 1/2\" all sides, 1\" top and bottom\r\nWeight unfilled: approximately 1,017 lbs tank only\r\nOverflow(s): Two\r\n \r\nThe Tsunami brand of aquariums are made from the highest quality acrylic available. Each aquarium is hand built and polished in the U.S.A. Customizations are available on all Tsunami Acrylic Aquariums upon Reque', NULL, 0),
(119, 'Red Sea Reefer MAX Peninsula S-950 G2+ System Black', 'R43735G2P_copy__64511__05771.jpg', 1, 2, 1, 261027000, 261027000, 'The premium REEFER MAX series features the entire REEFER G2+ range in a Plug & Play configuration that can save up to $ 1,299! \r\n\r\nWith the release of the REEFER DC Skimmer, ReefRun DC Pump and ReefATO+, Red Sea has finally completed the creation of an all-encompassing, ReefBeat App-operated ecosystem that caters to all reef system requirements. The REEFER MAX comes with all their smart lighting, filtration and circulation devices so the hobbyist can enjoy the full ecosystem experience, and be at ease knowing that all the essential equipment is included and compatible. \r\n\r\nIncludes:\r\n\r\nReefLED – reef-safe lights with a light intensity and spectrum that is 100% utilized by the corals.\r\n\r\nReefMat – fully automated roller filter with a unique mat replacement system that allows to switch rolls with zero hassle.\r\n\r\nReefWave – silent and powerful wave pumps with gyre patented, cross-flow technology.\r\n\r\nREEFER DC Skimmer – with game-changing self-leveling technology that prevents over-skimming and full cup spillage.\r\n\r\nReefRun DC Pump – powerful, energy efficient return pump with complete automation options.\r\n\r\nReefATO+ - an exceptionally reliable auto top-off system with a temperature monitor and Titanium leak detector.\r\n\r\n\r\nSlide Out Control Panel – the perfect solution for easy mounting and access to controllers, dosers and other devices.\r\n\r\nThe Aquarium\r\n\r\nRed Sea Reefer G2+ Aquariums feature rimless ultra-clear, beveled-edge glass with increased thickness. The central overflow box hides plumbing and allows for effective surface skimming. The removable weir comb makes for easy cleaning.\r\n\r\nPlumbing the Reefer Aquariums is easy. Assembly-ready piping is included (no gluing required). The new and improved high-precision valve on the drainpipe makes it easier to fine tune the flow rate and offers near-silent operation.\r\n\r\nSpecifications:\r\nTotal System Water Volume: 250 Gallons\r\nDisplay Tank Water Volume: 200 Gallons\r\nDimensions: 78.7“L x 26.8“W x 25.6“H\r\nGlass Thickness: 0.75', 1, 0),
(120, 'Red Sea Reefer MAX Peninsula S-700 G2+ System Black', 'R43733G2P_copy__14724__50204.jpg', 1, 2, 1, 224227000, 224227000, 'The premium REEFER MAX series features the entire REEFER G2+ range in a Plug & Play configuration that can save up to $ 1,299! \r\n\r\nWith the release of the REEFER DC Skimmer, ReefRun DC Pump and ReefATO+, Red Sea has finally completed the creation of an all-encompassing, ReefBeat App-operated ecosystem that caters to all reef system requirements. The REEFER MAX comes with all their smart lighting, filtration and circulation devices so the hobbyist can enjoy the full ecosystem experience, and be at ease knowing that all the essential equipment is included and compatible. \r\n\r\nIncludes:\r\n\r\nReefLED – reef-safe lights with a light intensity and spectrum that is 100% utilized by corals\r\n\r\nReefMat – fully automated roller filter with a unique mat replacement system that allows to switch rolls with zero hassle.\r\n\r\nReefWave – silent and powerful wave pumps with gyre patented, cross-flow technology.\r\n\r\nREEFER DC Skimmer – with game-changing self-leveling technology that prevents over-skimming and full cup spillage.\r\n\r\nReefRun DC Pump – powerful, energy efficient return pump with complete automation options.\r\n\r\nReefATO+ - an exceptionally reliable auto top-off system with a temperature monitor and Titanium leak detector.\r\nSlide Out Control Panel – the perfect solution for easy mounting and access to controllers, dosers and other devices.\r\n\r\nThe Aquarium\r\n\r\nRed Sea Reefer G2+ Aquariums feature rimless ultra-clear, beveled-edge glass with increased thickness. The central overflow box hides plumbing and allows for effective surface skimming. The removable weir comb makes for easy cleaning.\r\n\r\nPlumbing the Reefer Aquariums is easy. Assembly-ready piping is included (no gluing required). The new and improved high-precision valve on the drainpipe makes it easier to fine tune the flow rate and offers near-silent operation.\r\n\r\nSpecifications:\r\nTotal System Water Volume: 186 Gallons\r\nDisplay Tank Water Volume: 150 Gallons\r\nDimensions: 59.4“L x 26.8“W x 25.6“H\r\nGlass Thickness: 0.75\"', NULL, 0),
(121, 'Red Sea Reefer MAX Peninsula S-950 G2+ System White', 'ATO__87140__52143.jpg', 1, 2, 1, 261027000, 261027000, 'The premium REEFER MAX series features the entire REEFER G2+ range in a Plug & Play configuration that can save up to $ 1,299! \r\n\r\nWith the release of the REEFER DC Skimmer, ReefRun DC Pump and ReefATO+, Red Sea has finally completed the creation of an all-encompassing, ReefBeat App-operated ecosystem that caters to all reef system requirements. The REEFER MAX comes with all their smart lighting, filtration and circulation devices so the hobbyist can enjoy the full ecosystem experience, and be at ease knowing that all the essential equipment is included and compatible. \r\n\r\nIncludes:\r\n\r\nReefLED – reef-safe lights with a light intensity and spectrum that is 100% utilized by corals.\r\n\r\nReefMat – fully automated roller filter with a unique mat replacement system that allows to switch rolls with zero hassle.\r\n\r\nReefWave – silent and powerful wave pumps with gyre patented, cross-flow technology. \r\n\r\nREEFER DC Skimmer – with game-changing self-leveling technology that prevents over-skimming and full cup spillage.\r\n\r\nReefRun DC Pump – powerful, energy efficient return pump with complete automation options.\r\n\r\nReefATO+ - an exceptionally reliable auto top-off system with a temperature monitor and Titanium leak detector.\r\n\r\nSlide Out Control Panel – the perfect solution for easy mounting and access to controllers, dosers and other devices.\r\n\r\n \r\n\r\nThe Aquarium\r\n\r\nRed Sea Reefer G2+ Aquariums feature rimless ultra-clear, beveled-edge glass with increased thickness. The central overflow box hides plumbing and allows for effective surface skimming. The removable weir comb makes for easy cleaning.\r\n\r\nPlumbing the Reefer Aquariums is easy. Assembly-ready piping is included (no gluing required). The new and improved high-precision valve on the drainpipe makes it easier to fine tune the flow rate and offers near-silent operation.\r\n\r\nSpecifications:\r\nTotal System Water Volume: 250 Gallons\r\nDisplay Tank Water Volume: 200 Gallons\r\nDimensions: 78.7“L x 26.8“W x 25.6“H\r\nGlass Thickness: 0.75\"', NULL, 0),
(122, 'Red Sea Reefer MAX Peninsula 350 G2+ System White', 'R43728G2P_copy__19818__19863.jpg', 1, 2, 1, 130127000, 130127000, 'The premium REEFER MAX series features the entire REEFER G2+ range in a Plug & Play configuration that can save up to $ 1,299! \r\n\r\nWith the release of the REEFER DC Skimmer, ReefRun DC Pump and ReefATO+, Red Sea has finally completed the creation of an all-encompassing, ReefBeat App-operated ecosystem that caters to all reef system requirements. The REEFER MAX comes with all their smart lighting, filtration and circulation devices so the hobbyist can enjoy the full ecosystem experience, and be at ease knowing that all the essential equipment is included and compatible. \r\n\r\nIncludes:\r\n\r\nReefLED – reef-safe lights with a light intensity and spectrum that is 100% utilized by corals.\r\n\r\nReefMat – fully automated roller filter with a unique mat replacement system that allows to switch rolls with zero hassle.\r\n\r\nReefWave – silent and powerful wave pumps with gyre patented, cross-flow technology.\r\n\r\nREEFER DC Skimmer – with game-changing self-leveling technology that prevents over-skimming and full cup spillage.\r\n\r\nReefRun DC Pump – powerful, energy efficient return pump with complete automation options.\r\n\r\nReefATO+ - an exceptionally reliable auto top-off system with a temperature monitor and Titanium leak detector.\r\n\r\nSlide Out Control Panel – the perfect solution for easy mounting and access to controllers, dosers and other devices.\r\n\r\nThe Aquarium\r\n\r\nRed Sea Reefer G2+ Aquariums feature rimless ultra-clear, beveled-edge glass with increased thickness. The central overflow box hides plumbing and allows for effective surface skimming. The removable weir comb makes for easy cleaning.\r\n\r\nPlumbing the Reefer Aquariums is easy. Assembly-ready piping is included (no gluing required). The new and improved high-precision valve on the drainpipe makes it easier to fine tune the flow rate and offers near-silent operation.\r\n\r\nSpecifications:\r\nTotal System Water Volume: 93 Gallons\r\nDisplay Tank Water Volume: 73 Gallons\r\nDimensions: 37.8“L x 25“W x 23.6“H\r\nGlass Thickness: 0.59\"', NULL, 0),
(123, 'SeaClear 225-Gallon 72\"Lx24\"Wx30\"H Rectangular Acrylic Fish Tank', 'X10-101-56405-4__03237.jpg', 1, 3, 1, 50600000, 50600000, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS. Lighting not included.\r\n\r\nNeed a Canister Filter we recommend the Hagen Fluval FX 6.\r\nhttps://fishtanksdirect.com/fluval-fx-6-canister-filter/\r\n\r\nBody Material:1/2\"\r\n\r\nTop:1/2\"\r\n\r\nAccess Opening\r\n(2) 20x10\r\n\r\nSeaClear Acrylic Rectangular Aquariums are offered in most popular sizes. The group of Standard Aquariums include the three industry standard rectangular model designations: Regular, Show, and Tall.\r\n\r\nConstructed of the finest cast acrylic, a SeaClear Rectangular Aquarium Combo will offer years of dependable service. They`re less than half the weight of comparably sized glass tanks and their exceptional clarity allows unobstructed views of the underwater world you create. They allow you to safely create a freshwater, marine or reef environment', 1, 0),
(124, 'SeaClear 240-Gallon 96\"Lx24\"Wx24\"H Rectangular Acrylic Fish Tank', 'X10-101-56405-4__41300.jpg', 1, 3, 1, 50254770, 50254770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS\r\n\r\nLighting not included.\r\n\r\nBody Material:1/2\"\r\n\r\nTop:1/2\"\r\n\r\nAccess Opening\r\n(2) 23x12\r\n\r\nSeaClear Acrylic Rectangular Aquariums are offered in most popular sizes. The group of Standard Aquariums include the three industry standard rectangular model designations: Regular, Show, and Tall.\r\n\r\nConstructed of the finest cast acrylic, a SeaClear Rectangular Aquarium Combo will offer years of dependable service. They`re less than half the weight of comparably sized glass tanks and their exceptional clarity allows unobstructed views of the underwater world you create. They allow you to safely create a freshwater, marine or reef environment.', NULL, 0),
(125, 'Sea Clear 200 Gallon 72\"Lx18\"Wx30\"H Bow Front Acrylic Fish Tank', 'X10-101-53365-3__88809__14751.jpg', 1, 3, 1, 48300000, 48300000, 'Sea Clear 200 Gallon 72\"Lx18\"Wx30\"H Bow Front Acrylic Fish Tank\r\n\r\n* Hood Lighting in pictures Not Included (discontinued by SeaClear)\r\n\r\nWill be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS.\r\n\r\nBody Material:1/2\"\r\n\r\nTop:1/2\"\r\n\r\nAccess Opening#12\r\n\r\nAcrylic Fish Tanks are 50 times lighter and 17 times stronger than glass and other commonly used aquarium materials.\r\n\r\nSeaClear Acrylic Aquariums are all acrylic, with no degradable sealers. Seams are molecularly bonded and heat polished, not joined with glue or sealers. This means your SeaClear Aquarium will be virtually leak and breakproof.\r\n\r\nBecause acrylic is impervious to the corrosive effects of saltwater, SeaClear fish tanks Aquariums are safe for both fresh and saltwater use.\r\n\r\nSea Clear offers a wide variety of specialty shapes and sizes. From hexagons and pentagons to corner bows and half cylinders, SeaClear Fish Tanks offer the widest selection in the industry. SeaClear Acrylic Aquariums specialty shapes blend quality, design, function and strength to create hand crafted aquariums that are sure to become the focal point of any room. The inherent strength and thermal forming characteristics of acrylic enables SeaClear Fish Tanks to construct specialty shapes with fewer seams and larger unobstructed viewing areas.', 1, 1),
(126, 'SeaClear 150 Gallon 72\"Lx18\"Wx30\"H Flatback Hexagon Acrylic Fish Tank', 'X10-101-57265-5__44179__73653.jpg', 1, 3, 1, 45999770, 45999770, 'SeaClear 150 Gallon Flatback Hexagon Aquarium\r\n \r\nWill be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. Built on demand. 3-4 week build time.', NULL, 1),
(127, 'Prostar Rimless 230 Gallon Peninsula Setup Black', 'ProStar230PeninsulaBlack1__11456.webp', 1, 4, 1, 105799770, 105799770, 'ProStar Rimless Aquarium\r\nThis rimless glass aquarium sits on a modern cabinet, available in black or white. This aquarium is designed for saltwater use freshwater use. In addition, it includes sump filtration made of glass.  Evaporation is a common problem for rimless tanks. Sitting on the sump, is an auto top off to replenish the water. The power cord will match the chosen color of your tank, making this the cleanest display you\'ve ever had. \r\n\r\n​\r\n\r\nRimless \r\n\r\nLow Iron Glass \r\n\r\nAvailable in Black or White \r\n\r\nSump Filtration \r\n\r\nAuto Top Off Reservoir Included\r\n\r\nModern Design \r\n\r\nFreshwater or Saltwater', NULL, 0),
(128, 'Prostar Rimless 230 Gallon Peninsula Setup White', 'ProStar230PeninsulaWhite1__99044.webp', 1, 4, 1, 105799770, 105799770, 'ProStar Rimless Aquarium\r\nThis rimless glass aquarium sits on a modern cabinet, available in black or white. This aquarium is designed for saltwater use freshwater use. In addition, it includes sump filtration made of glass.  Evaporation is a common problem for rimless tanks. Sitting on the sump, is an auto top off to replenish the water. The power cord will match the chosen color of your tank, making this the cleanest display you\'ve ever had. \r\n\r\n​\r\n\r\nRimless \r\n\r\nLow Iron Glass \r\n\r\nAvailable in Black or White \r\n\r\nSump Filtration \r\n\r\nAuto Top Off Reservoir Included\r\n\r\nModern Design \r\n\r\nFreshwater or Saltwater', NULL, 0),
(129, 'Prostar Rimless 150 Gallon Peninsula Setup Black', 'ProStar150PeninsulaBlack1__03381.webp', 1, 4, 1, 70609770, 70609770, 'ProStar Rimless Aquarium\r\nThis rimless glass aquarium sits on a modern cabinet, available in black or white. This aquarium is designed for saltwater use freshwater use. In addition, it includes sump filtration made of glass.  Evaporation is a common problem for rimless tanks. Sitting on the sump, is an auto top off to replenish the water. The power cord will match the chosen color of your tank, making this the cleanest display you\'ve ever had. \r\n\r\n​\r\n\r\nRimless \r\n\r\nLow Iron Glass \r\n\r\nAvailable in Black or White \r\n\r\nSump Filtration \r\n\r\nAuto Top Off Reservoir Included\r\n\r\nModern Design \r\n\r\nFreshwater or Saltwater', NULL, 0),
(130, 'Prostar Rimless 60 Gallon Setup Black', 'ProStar60Black1__25254.webp', 1, 4, 1, 28059770, 28059770, 'ProStar Rimless Aquarium\r\nThis rimless glass aquarium sits on a modern cabinet, available in black or white. This aquarium is designed for saltwater use freshwater use. In addition, it includes sump filtration made of glass.  Evaporation is a common problem for rimless tanks. Sitting on the sump, is an auto top off to replenish the water. The power cord will match the chosen color of your tank, making this the cleanest display you\'ve ever had. \r\n\r\n​\r\n\r\nRimless \r\n\r\nLow Iron Glass \r\n\r\nAvailable in Black or White \r\n\r\nSump Filtration \r\n\r\nAuto Top Off Reservoir Included\r\n\r\nModern Design \r\n\r\nFreshwater or Saltwater', NULL, 0),
(131, 'AquaEl Ultrascape 90 With Ultra Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_90_forest_main_image_ULTRA__88089 (1).webp', 3, 5, 1, 35649770, 35649770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS.\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 10 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 64.1 gallons\r\n\r\nDimensions: 35.4\" x 23.6\" x 17.7\"\r\n\r\nGlass thickness: 0.4\"\r\n\r\nGlass type: opti', NULL, 0),
(132, 'AquaEl Ultrascape 60 With Ultra Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_60_forest_main_image_ULTRA__91503.webp', 3, 5, 1, 22539770, 22539770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 6 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 17.1 gallons\r\n\r\nDimensions: 23.6\" x 11.8\" x 14.1\"\r\n\r\nGlass thickness: 0.2\"\r\n\r\nGlass type: opti', 1, 0),
(133, 'AquaEl Ultrascape 90 With Leddy Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_90_forest_main_image_LEDDY__30417.webp', 3, 5, 1, 28749770, 28749770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS.\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 10 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 64.1 gallons\r\n\r\nDimensions: 35.4\" x 23.6\" x 17.7\"\r\n\r\nGlass thickness: 0.4\"\r\n\r\nGlass type: opti', 1, 0),
(134, 'AquaEl Ultrascape 60 With Leddy Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_60_forest_main_image_LEDDY__96672.webp', 3, 5, 1, 19549770, 19549770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 6 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 17.1 gallons\r\n\r\nDimensions: 23.6\" x 11.8\" x 14.1\"\r\n\r\nGlass thickness: 0.2\"\r\n\r\nGlass type: opti', 1, 0),
(135, 'CarbonDoser® Electronic CO2 Regulator', 'CD00006-2T__15810.jpg', 2, NULL, 1, 10119770, 10119770, 'CarbonDoser® Electronic CO2 Regulator - #00006\r\n\r\nThe new V2.0 allows for the aquarist to position the CO2 cylinder out of the way in a remote area. Then mounting the \"box\" anywhere such as up on a board with all the electronics/pH controllers/ETC\r\n\r\nThe 1/8\" tubing from the Reg to the Box is very pliable and easy to use similar to a wire!\r\n\r\nJohn Guest push-in fittings\r\nCarbonDoser® exclusive checkvalve\r\nPolyurethane tubing (1/8\" from Regulator to CarbonDoser® V2.0 Box & 1/4\" from Box-to-checkvalve-to-Reactor.\r\nThis product has forever changed the introduction of CO2 into an aquarium. Used for CO2 injection for a freshwater planted aquarium, or a Calcium reactor in a saltwater application. We guarantee that nowhere on this planet can you find a BETTER or MORE PRECISE regulator! The problem of \"dumping\" is completely eliminated with this regulator. Dumping is always a problem with ALL OTHER regulators which utilize a needle valve. Simply because, a needle valve relies on the pressure on both sides of it for accuracy. So, even though you have it set at a certain \"bubble rate\", once the pressure in the cylinder (or the outside atmospheric pressure) changes, so will the amount of CO2 that passes through the needle valve. This is why it is physically impossible for any and ALL other regulators that rely on a needle valve to ever be consistent. This regulator does not have a needle valve, but instead, it has an electronic valve that opens and closes in a fraction of a second, (each \"opening and closing\" equates to a bubble) and, due to the fact that it is \"electronic\" the \"bubble rate\" can NEVER change. Once it is set, it can never vary more than +/- 1/1,000=of a second.\r\n \r\nCOMPATIBLE WITH:\r\nNeptune\r\nHydros\r\nGHL\r\nPinPoint', NULL, 0),
(136, 'CarbonDoser® Polyurethane Tubing - CO2 Resistant 8\'', 'CarbonDoser_Polyurethane_tubing_-_CO2_Resistant_8__54466.jpg', 2, NULL, 1, 459770, 459770, 'CarbonDoser® CO2 Tubing:\r\n\r\n8” length:\r\nPolyurethane tubing: CO2 Resistant Tubing (8 foot length x 1/4” OD (outside diameter) perfect fit for all CO2 accessories.\r\n(This is NOT hard/rigid plastic \"RO\" style tubing)\r\nIt has a consistent Durometer reading of 95A: Which is proven perfect for John Guest “push-in” style fitting as well as the CarbonDoser® Checkvalve (below)\r\nWhat is Durometer? Durometer or Shore Durometer is a standardized way to measure the hardness of materials like rubber (elastomers) and plastics.\r\n\r\nClear tubing VS colored tubing: We recommend that you resist the urge to use pretty colored tubing… If the checkvalve ever fails, you will have NO way to see the water or staining in the tubing.\r\n\r\nFACT: Silicone tubing is NOT CO2 resistant !', NULL, 0),
(137, 'Continuum AquaBlade M Scraper 35\" W/ Stainless Steel Blade', 'ContinuumAquaBladeMScraper35wStainlessSteelBlade__57059.jp', 2, NULL, 1, 989770, 989770, 'Continuum AquaBlade M Scraper 35\" w/ Stainless Steel Blade\r\n\r\n*For Glass aquariums ONLY\r\n\r\nScraper for saltwater and freshwater aquariums\r\n\r\nNo hollowness here.\r\n\r\nThe AquaBlade is injected molded as a solid piece of plastic which keeps water from entering the unit while using. This means no hollow handles and drizzling of excess water when removed from the aquarium. And without trapped aquarium water inside the scraper it will never develop odors from growing bacteria.\r\n\r\n \r\n\r\nHeads above the rest.\r\n\r\nAquaBlade long scrapers feature solid fiberglass handles. Instead of using glues that break-down like other scrapers the AquaBlade handles are v-grooved from the side and inserted into the head of the scraper during the injection molding process. Under thousands of pounds of pressure the handle is fused to the head becoming a part of the molded piece.\r\n\r\nStrength and beauty.\r\n\r\n \r\n\r\nBy utilizing virgin plastic in the molding process instead of re-grind or recycled plastics, the AquaBlade is much stronger and more agile than other scrapers. The first time you pick up an AquaBlade you’ll notice the difference it makes. It feels strong and durable — perfect for White plastic work inside your aquarium.\r\n\r\n \r\n\r\nBlades full of sharp ideas.\r\n\r\nThe AquaBlade cyan blade was created by testing countless different types of plastics and plastic blends. The results are a special self lubricating plastic that is softer than acrylic, so it will not scratch acrylic. Constructed of 316 stainless steel, the AquaBlade metal blade is both strong and rust resistant so removing that stubborn coralline algae is a breeze.\r\n\r\n \r\n\r\nWhite plastic works inside your aquarium.\r\n\r\nAllows you to see the scraper more easily through darker algae. This means you don’t miss any spots the first time around the aquarium.\r\n\r\n \r\n\r\nCompatibility built-in\r\n\r\n100% Backwards compatible with previous units. Our scraper fits the old blades, our blades fit the old scraper.', 1, 0),
(138, 'JBJ Floating Algae Scrubber Glass/Acrylic Large', 'JBJ62911-2T__34798.jpg', 2, NULL, 1, 414000, 414000, 'Works great on glass or acrylic aquariums, without scratching the surface.\r\nDurable light-weight design prevents tool from sinking.\r\nAcrylic blade and plastic handle will never rust.\r\nAvailable in three sizes.', NULL, 0),
(139, 'Continuum AquaBlade M Replacement Metal Blade, 30 Per Pack', 'RCO31017-2T__28408.jpg', 2, NULL, 1, 2414770, 2414770, 'Replacement Steel Blade 30-Pack for all Continuum Aquatics AquaBlade-M Scrapers.', NULL, 0),
(140, 'AquaFX Bio Pellets 3.8L\r\n', 'biopellets__80021.jpg', 4, NULL, 1, 6899770, 6899770, 'AquaFX Bio-pellets are made by Dr. Tim\'s Aquatics\r\nNP-Active Pearls are a 100% biodegradable polymer DESIGNED and TESTED for aquatic systems that act as a carbon source for the growth of beneficial bacteria resulting in the removal of nitrate and phosphate from the water.\r\n\r\n- Removes Nitrate and Phosphate, Naturally\r\n- Works in All Saltwater and Reef Aquariums\r\n- Ultimate in Carbon Bio-Polymers\r\n- Safe for all Fish and Corals\r\nPURE\r\nEffectively removes nutrients\r\n100% biodegradable PHA-based pearls\r\nMade in the USA\r\nEasier than liquid carbon dosing\r\nSpecifically developed for aquariums\r\nDosage\r\n150 ml (0.93 cups) Treats 50 gallons (189 liters)\r\n450 ml (1.90 cups) Treats 150 gallons (568 liters)\r\n900 ml (3.75 cups) Treats 300 gallons (1,136 liters)\r\n3,790 ml (1 gallon) Treats 1,260 gallons (4,770 liters)\r\n\r\nUse 3ml of NP-Pearls per 1 gal of aquarium water (1/4 cup NP-Active Pearls per 20 gal water). Use a small quantity of Pearls at first, adding more Pearls over time. Note: it may take 2-4 weeks for the process to start. Replenish Pearls every 6-9 months as needed.\r\n\r\nImportant: NP-Active Pearls should be placed in a fluidized reactor or similar device where the Pearls are kept in constant motion with sufficient water flow. Clogged Pearls should be removed and rinsed well before being added back to the reactor.\r\n\r\nA good protein skimmer is strongly recommended.', 1, 0),
(141, 'Lee\'s Small Bio Pin Balls 900 Count', 'Lee555LargeBioBalls__98128.jpg', 4, NULL, 1, 4139770, 4139770, 'State of the art filter media for use in fresh and salt water wet/dry systems. They may be connected together or randomly placed in the filter box. Bio-Pin Balls help produce turbulence, aiding in the gas-exchange process.\r\n\r\nThe void space between the Bio-Pins is ideal for the movement of gasses like oxygen and allows it to more-readily come in contact with nitrifying bacteria living on the media surface.\r\n\r\nBiological filtration is the process by which waste is broken down from toxic ammonia to less toxic nitrates.\r\n\r\nThe suggested usage is 1 gallon of Bio-Pin Balls per 20 gallons for salt water or 35 gallons freshwater.\r\n\r\nEach Bio-Pin Ball has 110 Bio-Pins (drip points).\r\n\r\nThere are 120 balls per gallon.\r\n\r\nOne Cubic Foot of media has approximately 130 Square Feet of surface area.', NULL, 0),
(142, 'Lọc Kolar Chất xúc tác carbon cao cấp số lượng lớn 20 Lbs Thùng 5 gallon', 'KL0PC20-2T__12511.webp', 4, NULL, 1, 5749770, 5749770, 'Kolar Labs Premium Catalytic Carbon nhanh chóng loại bỏ clo, chloramine và hydrogen sulfide khỏi nước máy, bể cá và hệ thống lọc thẩm thấu ngược (RO). Quy trình sản xuất độc đáo của chúng tôi kết hợp tốt nhất các loại cacbon hấp phụ và xúc tác để loại bỏ mùi, vị khó chịu và các hợp chất hữu cơ dễ bay hơi (VOC) khác khỏi nước của bạn một cách an toàn và hiệu quả.  Than hoạt tính dạng hạt cấp phòng thí nghiệm của chúng tôi có cấu trúc lỗ lớn và hoạt tính xúc tác cao để loại bỏ nhiều loại chất gây ô nhiễm tốt hơn so với chất khử clo và các chất tẩy hóa học cơ bản khác. Tất cả carbon của Kolar Labs đều được sản xuất theo tiêu chuẩn nghiêm ngặt về thực phẩm và nước uống để sử dụng an toàn trên tất cả các ứng dụng.  Các tính năng: Loại bỏ clo, chloramine, hydrogen sulfide Loại bỏ các chất ô nhiễm hữu cơ, màu sắc, mùi hôi và các hợp chất hữu cơ dễ bay hơi (VOC) Ít bụi và tiền phạt để rửa nhanh Sử dụng trong các bộ lọc nước máy, hệ thống thẩm thấu ngược và bể cá Hiệu quả cao trong hộp lọc, bộ lọc túi và làm bộ lọc sơ bộ trong hệ thống RO Được sản xuất để tối đa hóa hiệu suất hấp thụ và loại bỏ xúc tác Được sản xuất theo tiêu chuẩn Codex Hóa chất Thực phẩm (FCC) Không có kim loại hoặc kiềm có hại thường được tìm thấy trong các loại cacbon xúc tác khác Quy trình sản xuất có độ tinh khiết cao, không chứa phốt phát', NULL, 0),
(143, 'Acurel F Water Clarifier 250mL', 'AC00007-2T__14725.jpg\r\n', 4, NULL, 1, 551770, 551770, 'Acurel F là sự lựa chọn ưa thích của các chuyên gia để giữ cho nước hồ cá trong vắt. Tác dụng nhanh và dễ sử dụng, Acurel F làm sạch nước đục, nước xanh hoặc nước bị ô nhiễm trong vòng vài giờ sau khi sử dụng. Nó chống lại tác hại của việc cho cá ăn quá nhiều và cải thiện hiệu quả lọc, mang lại một môi trường trong suốt cho cá của bạn. An toàn và hiệu quả, nó sẽ không làm xáo trộn các vi khuẩn có lợi trong hệ thống lọc sinh học của các bể cá khỏe mạnh. Acurel F được SẢN XUẤT TẠI MỸ với chiết xuất hữu cơ từ các nguồn tài nguyên tái tạo. Nó an toàn cho tất cả các loài cá và thực vật nước ngọt, đồng thời thân thiện với môi trường.  Để làm sạch nước đục: Acurel F siêu đậm đặc. Chỉ cần thêm Acurel F trực tiếp vào bể cá. Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc. Nước sẽ trong trong vòng vài giờ. Thêm Acurel F nếu quá trình thanh toán bù trừ chưa hoàn tất.  Để duy trì một bể cá trong suốt như pha lê: Hàng ngày, thêm 1-2 giọt Acurel F cho mỗi gallon nước, trực tiếp vào bể cá. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Để cải thiện khả năng lọc bể cá: Acurel F cải thiện đáng kể hiệu quả của hầu hết các bộ lọc bể cá. Các chuyên gia biết rằng việc bổ sung 2 giọt Acurel F hàng ngày cho mỗi gallon nước trực tiếp vào bể cá sẽ hỗ trợ lọc và duy trì môi trường trong suốt như pha lê cho cá của bạn. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Vón cục do thêm sỏi mới: Chỉ cần thêm Acurel F trực tiếp vào bể cá. Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Khi làm sạch hoặc bảo trì bể cá cũ: Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Nếu sử dụng quá nhiều Acurel F, nước có thể chuyển sang màu nâu trong vài ngày. Điều này KHÔNG có hại và sẽ biến mất sau vài ngày.  Chỉ sử dụng trong bể cá nước ngọt. Không sử dụng với các loài nước lợ trong nước ngọt.', NULL, 0),
(144, 'Máy lọc nước Acurel F 50mL', 'AC00006-2T__57508.jpg', 4, NULL, 1, 178020, 178020, 'Acurel F là sự lựa chọn ưa thích của các chuyên gia để giữ cho nước hồ cá trong vắt. Tác dụng nhanh và dễ sử dụng, Acurel F làm sạch nước đục, nước xanh hoặc nước bị ô nhiễm trong vòng vài giờ sau khi sử dụng. Nó chống lại tác hại của việc cho cá ăn quá nhiều và cải thiện hiệu quả lọc, mang lại một môi trường trong suốt cho cá của bạn. An toàn và hiệu quả, nó sẽ không làm xáo trộn các vi khuẩn có lợi trong hệ thống lọc sinh học của các bể cá khỏe mạnh. Acurel F được SẢN XUẤT TẠI MỸ với chiết xuất hữu cơ từ các nguồn tài nguyên tái tạo. Nó an toàn cho tất cả các loài cá và thực vật nước ngọt, đồng thời thân thiện với môi trường.  Để làm sạch nước đục: Acurel F siêu đậm đặc. Chỉ cần thêm Acurel F trực tiếp vào bể cá. Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc. Nước sẽ trong trong vòng vài giờ. Thêm Acurel F nếu quá trình thanh toán bù trừ chưa hoàn tất.  Để duy trì một bể cá trong suốt như pha lê: Hàng ngày, thêm 1-2 giọt Acurel F cho mỗi gallon nước, trực tiếp vào bể cá. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Để cải thiện khả năng lọc bể cá: Acurel F cải thiện đáng kể hiệu quả của hầu hết các bộ lọc bể cá. Các chuyên gia biết rằng việc bổ sung 2 giọt Acurel F hàng ngày cho mỗi gallon nước trực tiếp vào bể cá sẽ hỗ trợ lọc và duy trì môi trường trong suốt như pha lê cho cá của bạn. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Vón cục do thêm sỏi mới: Chỉ cần thêm Acurel F trực tiếp vào bể cá. Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Khi làm sạch hoặc bảo trì bể cá cũ: Sử dụng 2-4 giọt cho mỗi gallon (5 lít) nước. Để có kết quả tốt nhất, hãy BẬT hệ thống sục khí và lọc.  Nếu sử dụng quá nhiều Acurel F, nước có thể chuyển sang màu nâu trong vài ngày. Điều này KHÔNG có hại và sẽ biến mất sau vài ngày.  Chỉ sử dụng trong bể cá nước ngọt. Không sử dụng với các loài nước lợ trong nước ngọt.', NULL, 0),
(145, 'Aqueon 16-Oz. Máy điều hòa nước Aqueon', 'Aqueon16ozTapWater__03979.jpg', 4, NULL, 1, 229770, 229770, 'Cho dù đó là chuẩn bị nước máy cho cá, làm sạch nước đục, trung hòa amoniac có hại hay thay mới các nguyên tố vi lượng thiết yếu, với các sản phẩm Aqueon Water Care, bạn có thể yên tâm rằng cá của bạn sẽ vẫn có màu sắc sặc sỡ, khỏe mạnh và năng động.', NULL, 0),
(146, 'Aqueon 16-Oz. Máy làm sạch nước Aqueon', '16Oz.AqueonWaterClarifier__31710.jpg', 4, NULL, NULL, 206770, 206770, 'Máy làm sạch nước Aqueon hoạt động bằng cách bám vào các hạt bụi bẩn lơ lửng khiến nước có vẻ đục hoặc đục. Điều này giúp chúng dễ dàng lọc ra hoặc lắng xuống đáy bể hơn. Các sản phẩm chăm sóc nước Aqueon được thiết akế để cung cấp các giải pháp hiệu quả cho việc thiết lập và sử dụng bể cá. Dễ hiểu và áp dụng đơn giản, những sản phẩm này sẽ giúp duy trì môi trường lành mạnh nhất cho vật nuôi thủy sinh của bạn.', NULL, 0),
(147, 'AquaEl Ultrascape 60 With Leddy Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_60_forest_main_image_LEDDY__96672.webp', 3, 5, 1, 19549770, 19549770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 6 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 17.1 gallons\r\n\r\nDimensions: 23.6\" x 11.8\" x 14.1\"\r\n\r\nGlass thickness: 0.2\"\r\n\r\nGlass type: opti', 1, 0),
(148, 'AquaEl Ultrascape 60 With Ultra Slim Forest (Tank, Light, Cabinet)', 'Ultrascape_60_forest_main_image_ULTRA__91503.webp', 3, 5, 1, 22539770, 22539770, 'Will be delivered via freight truck. No UPS or FedEx available. Please select Free Shipping when ordering. This product is not able to be shipped via UPS\r\n\r\nUltrascape is the perfect solution for aquarism lovers who appreciate products that combine high quality workmanship and elegant appearance. The set is characterized by dimensions recognized by aquascapers, harmonious proportions and aesthetic accessories. This allows you to create all arrangements, both experimental and those based on classic rules.\r\n\r\nPerfect rendering of natural colors\r\n\r\nThe aquarium from the set is made of high quality Optiwhite glass with a thickness of 6 mm. It is characterized by exceptional transparency and perfectly reflects the natural colors of plants and aquarium decorations. The tank panes have been bonded with colorless silicone and their edges have been carefully polished. This gives the aquarium lightness and elegance.\r\n\r\nFunctional cabinet\r\n\r\nThe UltraScape Set is also accompanied by a dedicated cabinet. Black satin and veneered finish of the forest version and satin finish of the snow cabinet perfectly fit into the current interior design trend. The side walls of the cabinet are equipped with special holes for hoses, allowing for convenient placement of electrical wires on the side wall of the tank. The cabinets also have a shelf for accessories and height-adjustable legs, ensuring stability and even weight distribution, even under the heaviest arrangements. *Cabinet does not come assembled\r\n\r\nCapacity: 17.1 gallons\r\n\r\nDimensions: 23.6\" x 11.8\" x 14.1\"\r\n\r\nGlass thickness: 0.2\"\r\n\r\nGlass type: opti', 1, 0),
(165, 'Sản phẩm 5', 'img1products.jpg', 2, 6, 1, 1, 1, '1', 0, 1),
(166, 'Sản phẩm 7', '302a9793_2_carbomax_bioceramax_263-810x719__63157.jpg', 1, 1, 1, 1, 1, '1', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `product_options`
--

CREATE TABLE `product_options` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `color` int NOT NULL,
  `spill` int NOT NULL,
  `aquafilter` int NOT NULL,
  `tanklid` int NOT NULL,
  `base` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `product_options`
--

INSERT INTO `product_options` (`id`, `product_id`, `color`, `spill`, `aquafilter`, `tanklid`, `base`) VALUES
(102, 1, 1, 1, 1, 1, 1),
(103, 119, 0, 0, 0, 0, 0),
(104, 120, 0, 0, 0, 0, 0),
(105, 121, 0, 0, 0, 0, 0),
(106, 122, 0, 0, 0, 0, 0),
(107, 123, 1, 0, 0, 0, 0),
(108, 124, 1, 0, 0, 0, 0),
(109, 125, 1, 0, 0, 0, 0),
(110, 126, 1, 0, 0, 0, 0),
(111, 127, 0, 0, 0, 0, 0),
(112, 128, 0, 0, 0, 0, 0),
(113, 129, 0, 0, 0, 0, 0),
(114, 130, 0, 0, 0, 0, 0),
(115, 131, 0, 0, 0, 0, 0),
(116, 132, 0, 0, 0, 0, 0),
(117, 133, 0, 0, 0, 0, 0),
(118, 134, 0, 0, 0, 0, 0),
(119, 135, 0, 0, 0, 0, 0),
(120, 136, 0, 0, 0, 0, 0),
(121, 137, 0, 0, 0, 0, 0),
(122, 138, 0, 0, 0, 0, 0),
(123, 140, 0, 0, 0, 0, 0),
(124, 141, 0, 0, 0, 0, 0),
(125, 142, 0, 0, 0, 0, 0),
(126, 143, 0, 0, 0, 0, 0),
(127, 144, 0, 0, 0, 0, 0),
(128, 145, 0, 0, 0, 0, 0),
(129, 146, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `address` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `address`, `role`) VALUES
(1, 'admin@gmail.com', '123', 'Admin', '0348378112', 'Ấp chợ xếp xã Tân Thành Bình Huyện Mỏ Cày Bắc tỉnh Bến Tre', 1),
(2, 'cline@gmail.com', '123', 'Nguyễn Trần Khắc Duy', '0348378112', 'Ấp chợ xếp xã Tân Thành Bình Huyện Mỏ Cày Bắc tỉnh Bến Tre', 0),
(3, 'duy@gamil.com', '123', 'duy', '9304949234', '', 0),
(4, 'duy@gmail.com', '123', 'Duy', '09734283', '', 0),
(8, 'catchy@gamil.com', '123', 'Duy', '0348378112', '', 0),
(9, 'catchy@gmail.com', '123', 'nguyễn Trần Khắc Duy', '0348378112', '', 0),
(23, 'catchy2@gmail.com', '123', 'Nguyễn Trần Khắc Duy2', '0348378112', '', 0),
(24, 'admin1212@gmail.com', '123', 'Nguyễn Trần Khắc Duy', '0348378112', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories_brand`
--
ALTER TABLE `categories_brand`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indexes for table `config_fishtanks`
--
ALTER TABLE `config_fishtanks`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `productId` (`productId`);

--
-- Indexes for table `imgproducts`
--
ALTER TABLE `imgproducts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`product_id`),
  ADD KEY `fk_idOrder` (`idOrder`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idUserBuy` (`idUserBuy`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories` (`categories`),
  ADD KEY `brandId` (`brandId`);

--
-- Indexes for table `product_options`
--
ALTER TABLE `product_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `categories_brand`
--
ALTER TABLE `categories_brand`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `config_fishtanks`
--
ALTER TABLE `config_fishtanks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `imgproducts`
--
ALTER TABLE `imgproducts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=661782;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT for table `product_options`
--
ALTER TABLE `product_options`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories_brand`
--
ALTER TABLE `categories_brand`
  ADD CONSTRAINT `categories_brand_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`);

--
-- Constraints for table `config_fishtanks`
--
ALTER TABLE `config_fishtanks`
  ADD CONSTRAINT `config_fishtanks_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `imgproducts`
--
ALTER TABLE `imgproducts`
  ADD CONSTRAINT `imgproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`);

--
-- Constraints for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD CONSTRAINT `fk_idOrder` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_idUserBuy` FOREIGN KEY (`idUserBuy`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `categories_brand` (`id`);

--
-- Constraints for table `product_options`
--
ALTER TABLE `product_options`
  ADD CONSTRAINT `product_options_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
