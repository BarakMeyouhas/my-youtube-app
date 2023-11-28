-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: youtube
-- ------------------------------------------------------
-- Server version	8.0.35

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
  `favorite` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (4,'o show é legalzinho...','https://i.ytimg.com/vi/LZQdWd_vdoM/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARgdIDgofzAP&rs=AOn4CLBM2bHa4irDZ4tUuLqGCOltOYrkqg','Blue Man Group - part 01','https://www.youtube.com/watch?v=LZQdWd_vdoM',4,1),(5,'\"עקב שוואקי - ישתבח שמו Yaakov Shwekey - Yishtabach Shemo Lyrics by Miriam Israeli Composed by Yitzy Waldner Arranged by ...\"','https://i.ytimg.com/vi/E_hzOuAK5gY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmYI2j_1OiiVPS_QMPdas6oRHX-Q','יעקב שוואקי -ישתבח שמו','https://www.youtube.com/watch?v=E_hzOuAK5gY',6,0),(9,'Rainy Cafe with Cozy Jazz - Relaxing Elegant Instrumental Jazz for Work, Study, Focus and Chill','https://i.ytimg.com/vi/Xw4q7f1CVsc/mqdefault.jpg','Coffee Shop Vibes','https://www.youtube.com/watch?v=Xw4q7f1CVsc',7,1),(17,'Cozy Autumn Ambience & Smooth Jazz Instrumental ☕ Relaxing Jazz Background Music to Work','https://i.ytimg.com/vi/wWssapsvT_o/mqdefault.jpg','Chillaxing Jazz Sessions','https://www.youtube.com/watch?v=wWssapsvT_o',7,0),(26,'Edith Whiskers (Tom Rosenthal) - Home (Lyrics)','https://i.ytimg.com/vi/lLjvsAyEj-g/mqdefault.jpg','Taj Tracks','https://www.youtube.com/watch?v=lLjvsAyEj-g',3,1),(27,'Acoustic Chill • A Soft Indie Folk Playlist, Vol 2 (50 tracks/3 hours) Calm & Soothing','https://i.ytimg.com/vi/cAs02QPZyc4/mqdefault.jpg','Indie Folk Central','https://www.youtube.com/watch?v=cAs02QPZyc4',25,1),(28,'Warm Christmas Night at 4K Cozy Coffee Shop Ambience ❄ Relaxing Jazz Music For Relaxation and Chill','https://i.ytimg.com/vi/X8g6XMtQupM/mqdefault.jpg','Relaxing Jazz Piano','https://www.youtube.com/watch?v=X8g6XMtQupM',7,0),(29,'שיר למעלות - מוש בן ארי','https://i.ytimg.com/vi/XP0h4jElUhQ/mqdefault.jpg','mayaklein1988','https://www.youtube.com/watch?v=XP0h4jElUhQ',6,1),(30,'בניה ברבי - קרן שמש','https://i.ytimg.com/vi/n5illsgvqKA/mqdefault.jpg','בניה ברבי','https://www.youtube.com/watch?v=n5illsgvqKA',6,0),(32,'Noa Kirel - Unicorn (Lyrics)','https://i.ytimg.com/vi/jrqXLSHbUkA/mqdefault.jpg','Aqua Lyrics','https://www.youtube.com/watch?v=jrqXLSHbUkA',5,0),(33,'Fall Asleep in Under 3 MINUTES ★ Body Mind Restoration ★ Deep Sleep Journey','https://i.ytimg.com/vi/VLxQCbkWj9c/mqdefault.jpg','Weightless Soul Healing','https://www.youtube.com/watch?v=VLxQCbkWj9c',25,0),(34,'Sunrise Meditation | HANDPAN 2 hours music | Pelalex HANDPAN Music For Meditation #18 | YOGA Music','https://i.ytimg.com/vi/mw4k1tCnAuE/mqdefault.jpg','pelalex music','https://www.youtube.com/watch?v=mw4k1tCnAuE',25,1),(35,'All The Way Up (feat. Infared)','https://i.ytimg.com/vi/kQaseJ2DoAw/mqdefault.jpg','Fat Joe - Topic','https://www.youtube.com/watch?v=kQaseJ2DoAw',33,1),(36,'Deep Focus Music To Improve Concentration - 12 Hours of Ambient Study Music to Concentrate #617','https://i.ytimg.com/vi/6pnpiL9lMak/mqdefault.jpg','4K Video Nature - Focus Music','https://www.youtube.com/watch?v=6pnpiL9lMak',25,0),(37,'The Very Best 50s & 60s Party Rock And Roll Hits Ever Ultimate Rock n Roll Party YouTube 360p','https://i.ytimg.com/vi/6Gn_huzHvQ0/mqdefault.jpg','Latino Música','https://www.youtube.com/watch?v=6Gn_huzHvQ0',2,0),(38,'G.r.e.e.n D.a.y Greatest Hits Full Album 2022','https://i.ytimg.com/vi/MGfxXYTSfRs/mqdefault.jpg','Alternative Rock','https://www.youtube.com/watch?v=MGfxXYTSfRs',2,0),(39,'חנן בן ארי - מולדת | Hanan Ben Ari','https://i.ytimg.com/vi/MZHU0MfZAMw/mqdefault.jpg','Hanan Ben Ari Official חנן בן ארי הערוץ הרשמי','https://www.youtube.com/watch?v=MZHU0MfZAMw',6,1),(40,'שינויי מזג האוויר - התזמורת האנדלוסית הישראלית אשדוד ופטריק סבג מארחים את בניה ברבי','https://i.ytimg.com/vi/Ggafij3sZ1g/mqdefault.jpg','בניה ברבי','https://www.youtube.com/watch?v=Ggafij3sZ1g',6,1),(41,'בניה ברבי - מיטב הלהיטים ברצף','https://i.ytimg.com/vi/6hlADe40B50/mqdefault.jpg','שרוף - מפעילים את הפעמון','https://www.youtube.com/watch?v=6hlADe40B50',6,0),(43,'יסמין מועלם - יחפים','https://i.ytimg.com/vi/Dcvm3PpOuiA/mqdefault.jpg','Jasmin Moallem','https://www.youtube.com/watch?v=Dcvm3PpOuiA',6,0),(44,'Beautiful Relaxing Music for Stress Relief ~ Calming Music ~ Meditation, Relaxation, Sleep, Spa','https://i.ytimg.com/vi/lFcSrYw-ARY/mqdefault.jpg','Meditation Relax Music','https://www.youtube.com/watch?v=lFcSrYw-ARY&t=2679s',25,0);
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

-- Dump completed on 2023-11-28 10:59:45
