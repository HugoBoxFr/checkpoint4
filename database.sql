CREATE DATABASE portcheck_db;

USE portcheck_db;

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(100) NOT NULL,
  `lastname` VARCHAR(100) NULL,
  `age` INT,
  `title` VARCHAR(255) NOT NULL,
  `specialty` VARCHAR(100),
  `description` TEXT NULL,
  `city` VARCHAR(100),
  `phone` VARCHAR(100),
  `mail` VARCHAR(100),
  `git` VARCHAR(255) NULL,
  `avatar` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `techno` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `url` VARCHAR(255) NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

CREATE TABLE `langue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `url` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

CREATE TABLE `formation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `school` VARCHAR(255) NOT NULL,
  `place` VARCHAR(100) NULL,
  `date_debut` VARCHAR(100) NOT NULL,
  `date_fin` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

CREATE TABLE `project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `company` VARCHAR(255) NOT NULL,
  `date` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `url` VARCHAR(255) NULL,
  `img` VARCHAR(255) NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

CREATE TABLE `experience` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `company` VARCHAR(255) NULL,
  `place` VARCHAR(100) NULL,
  `date_debut` VARCHAR(100) NOT NULL,
  `date_fin` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `user_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`)
);

INSERT INTO user (firstname, lastname, age, title, specialty, description, city, phone, mail, git, avatar) VALUES 
('Hugo', 'Prea', 36, 'Développeur Web & Web Mobile', 'Angular 8 - NodeJs', '', 'Lyon 69007 - France', '+33 6 19 75 68 07', 
'hugo.contactweb@gmail.com', 'github.com/HugoBoxFr', 'moi.jpg');

INSERT INTO techno (name, url, user_id) VALUES ('Angular 8', 'angular.svg', 1),('NodeJs', 'nodejs.svg', 1), 
('TypeScript', 'ts.svg', 1),('JavaScript', 'js.svg', 1),('Bootstrap','bootstrap.svg', 1),('Wordpress', 'wordpress.svg', 1),
('JQuery', 'jquery.svg', 1),('Html 5', 'html5.svg', 1),('CSS 3', 'css3.svg', 1),('Github', 'git.svg', 1),('Photoshop', 'photoshop.svg', 1),
('Illustrator', 'illustrator.svg', 1);

INSERT INTO formation (name, school, place, date_debut, date_fin, description, user_id) VALUES 
('Développeur Web & Web Mobile', 'Wild Code School', 'Lyon 69002', 'Sept 2019', 'Fév 2019', 'Titre Professionnel de niveau III', 1), 
('Infographiste Multimédia - Webdesigner', 'Pixem Institut', 'Reims 51100', 'Sept 2015', 'Fév 2016', 'Titre Professionnel de niveau III', 1), 
('Force de Vente', 'Tézenas du Montcell', 'St Étienne 42000', 'Sept 2001', 'Jan 2002', '1ère année de BTS', 1), 
('Action et Communication Commerciale', 'Lycée Léonard de Vinci', 'Monsitrol sur Loire 43120', 'Sept 1998', 'Juil 2001', 'Baccalauréat Technologique', 1);

INSERT INTO experience (name, company, place, date_debut, date_fin, description, user_id) VALUES 
('Développeur Web', 'Wild Code School', 'Lyon 69002', 'Sept 2019', 'Fév 2020', '', 1),
('Infographiste', "Restaurant l'Apostrophe", 'Reims 51100', 'Août 2016', 'Jan 2019', '', 1),
('Barman - Serveur', 'Apostrophe / Latino / Perles de Pluie / Quai n°16', 'St Étienne 42000 / Reims 51100', '2003', '2019', '', 1),
('Agent de Sécurité Incendie', 'Prosegur', 'St Étienne 42000', 'Mars 2007', 'Avril 2008', '', 1),
('Intérimaire', 'Manpower', 'Ste Sigolène 43600', 'Juin 2002', 'Oct 2002', '', 1);

INSERT INTO langue (name, url, description, user_id) VALUES 
('Français', 'french.svg', 'Langue maternelle', 1),
('Cambodgien', 'khmer.svg', 'Langue maternelle', 1),
('Anglais', 'english.svg', 'Langue vivante 1', 1),
('Allemand', 'german.svg', 'Langue vivante 2', 1);

INSERT INTO project (name, company, date, description, url, img, user_id) VALUES 
('Avatar : Bim', 'Wild Code School', '2019', 'Projet de formation réalisé sous Angular 8', 'https://bim.now.sh/', 'bim.png', 1),
('Memory Game : South Park', 'Wild Code School', '2019', 'Projet de formation réalisé sous JavaScript', 'https://hugoboxfr.github.io/memory_project/', 'south.png', 1),
('South them all : Zombie Nation', 'Wild Code School', '2019', 'Projet de formation réalisé sous Angular 8', 'https://zombienation.hugoprea.now.sh/', 'zombie.png', 1),
('Green : La Religieuse', 'Wild Code School', '2019', 'Projet de formation réalisé sous Html5, CSS3', 'https://hugoboxfr.github.io/la_religieuse/', 'religieuse.png', 1),
('Restaurant : Le Central', 'Le Central', '2018', 'Projet fictif réalisé sous Html5, CSS3, JQuery', 'https://hugoboxfr.github.io/central/', 'central.png', 1),
("Salon de coiffure : L'Atelier", "L'Atelier Reims", '2016', 'Projet ficitif sous Html5, CSS3, JQuery', 'https://hugoboxfr.github.io/atelier/', 'atelier.png', 1);
