-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: youtube
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Combining the legendary rock song with the unique sound of Ukrainian folk, we created','https://i.ytimg.com/vi/R0ebIzABQm0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBsne6G4S3bSWQPzdARU4IvvcGNtw','In The Shadows of Ukraine','https://www.youtube.com/watch?v=R0ebIzABQm0',1),(2,'I once dedicated this song to my mother, and when the war broke out, the song took on a lot of new meanings. Although there is ...','https://i.ytimg.com/vi/Z8Z51no1TD0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgYixmKoouc157asiighUKvnjDaw','I once dedicated this song to my mother, and when the war broke out, the song took on a lot of new meanings. Although there is ...','https://www.youtube.com/watch?v=Z8Z51no1TD0',2),(3,'The Director\'s Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now!','https://i.ytimg.com/vi/W3q8Od5qJio/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZDa4rTaZKPSiZdzz_dQ6sdTu4eg','The Director\'s Cut of RAMMSTEIN: PARIS, an unparalleled concert-film by Jonas Åkerlund, is out now!','https://www.youtube.com/watch?v=U5HAEzEk8QM',3),(4,'o show é legalzinho...','https://i.ytimg.com/vi/LZQdWd_vdoM/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARgdIDgofzAP&rs=AOn4CLBM2bHa4irDZ4tUuLqGCOltOYrkqg','Blue Man Group - part 01','https://www.youtube.com/watch?v=LZQdWd_vdoM',4),(5,'\"עקב שוואקי - ישתבח שמו Yaakov Shwekey - Yishtabach Shemo Lyrics by Miriam Israeli Composed by Yitzy Waldner Arranged by ...\"','https://i.ytimg.com/vi/E_hzOuAK5gY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmYI2j_1OiiVPS_QMPdas6oRHX-Q','יעקב שוואקי -ישתבח שמו','https://www.youtube.com/watch?v=E_hzOuAK5gY',5);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-06 16:09:38
