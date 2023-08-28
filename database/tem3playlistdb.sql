-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-08-2023 a las 15:40:11
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tem3playlistdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlists`
--

DROP TABLE IF EXISTS `playlists`;
CREATE TABLE IF NOT EXISTS `playlists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `id_user` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `estado`, `id_user`, `createdAt`, `updatedAt`) VALUES
(1, 'Coding Mode', 1, 2, '2023-08-27 14:53:52', '2023-08-27 14:53:52'),
(2, 'Pacific', 1, 1, '2023-08-27 17:12:43', '2023-08-27 17:12:43'),
(3, 'Across', 1, 2, '2023-08-27 15:15:42', '2023-08-27 17:09:27'),
(4, 'Geniusss', 1, 2, '2023-08-27 15:15:42', '2023-08-27 19:10:20'),
(5, 'Moon', 1, 1, '2023-08-27 17:14:53', '2023-08-27 18:55:48'),
(7, 'Solo', 0, 3, '2023-08-28 02:13:16', '2023-08-28 02:15:38'),
(8, 'WORL', 0, 3, '2023-08-28 14:41:36', '2023-08-28 14:43:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `songs`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE IF NOT EXISTS `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `artista` varchar(255) NOT NULL,
  `id_playlist` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_playlist` (`id_playlist`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `songs`
--

INSERT INTO `songs` (`id`, `nombre`, `artista`, `id_playlist`, `createdAt`, `updatedAt`) VALUES
(1, 'Day Ong', 'Hans Zimmer', 1, '2023-08-27 15:27:25', '2023-08-27 15:27:25'),
(2, 'Home', 'Vince Staples', 5, '2023-08-27 17:23:16', '2023-08-27 17:23:16'),
(3, 'High Enough', 'K.Flay', 2, '2023-08-27 17:29:29', '2023-08-27 17:29:29'),
(4, 'On My Own', 'Jaden, Kid Cudi', 3, '2023-08-27 17:25:10', '2023-08-27 17:25:10'),
(5, 'Paradise', 'Coldplay', 7, '2023-08-28 14:44:35', '2023-08-28 14:44:35'),
(6, 'Im ready', 'Jaden', 5, '2023-08-28 15:25:45', '2023-08-28 15:25:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'victoria', 'victoria@gmail.com', '$2b$10$u7AAxy7E5YkeQVEW34bVRuUHC9nvoqBxf.F2teBwfRlRf26Np583e', '2023-08-27 06:20:20', '2023-08-27 06:20:20'),
(2, 'silvana farias', 'silfarias@gmail.com', '$2b$10$qL2HGVCPTJtxCkaODmMAL.1Ag.zIU//l7VkPJXID7TAsQTSJvvaeS', '2023-08-27 14:51:32', '2023-08-27 14:51:32'),
(3, 'Fabian', 'fabi@gmail.com', '$2b$10$rLEVeABJbx6NYgkDi9k4luAjUJ1mTUbwd/B07Z5.i6Z2VWW1CHZ1e', '2023-08-27 19:12:02', '2023-08-27 19:12:02'),
(4, 'Lucas', 'lucas@gmail.com', '$2b$10$Nq2grUJnnrmpssUqJJlEq.QtkAcM2BlsU1mMV72eeD4AhJeWh3lqW', '2023-08-28 14:53:03', '2023-08-28 14:53:03');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`id_playlist`) REFERENCES `playlists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
