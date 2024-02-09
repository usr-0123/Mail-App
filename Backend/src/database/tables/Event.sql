CREATE TABLE Event (
    EventID INT NOT NULL PRIMARY KEY,
    EventName VARCHAR(MAX) NOT NULL,
    Description VARCHAR(MAX),
    EventDate DATETIME,
    Location VARCHAR(255) NOT NULL,
    EventPoster VARCHAR(MAX)
);

SELECT * FROM Event;

INSERT INTO Event
VALUES
(6000,'First presentations','The First groups presentation',14/01/2023,'Nyeri','https://drive/poster6001.com'),
(6001,'Second presentations','The Second groups presentation',14/01/2023,'Nairobi','https://drive/poster6001.com'),
(6002,'Third presentations','The Third groups presentation',14/01/2023,'Nanyuki','https://drive/poster6001.com'),
(6003,'Fourth presentations','The Fourth groups presentation',14/01/2023,'Embu','https://drive/poster6001.com'),
(6004,'Fifth presentations','The Fifth groups presentation',14/01/2023,'Kirinyaga','https://drive/poster6001.com');