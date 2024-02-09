CREATE TABLE Photo (
    photoID INT NOT NULL PRIMARY KEY,
    UserID INT NOT NULL,
    PhotoURL VARCHAR(MAX) NOT NULL,
    UploadDate DATETIME NOT NULL,
    FOREIGN KEY (UserID) REFERENCES [User](UserID)
);

INSERT INTO Photo
VALUES
(4000,001,'https://drive/photos/4000.com',01/02/2022),
(4001,002,'https://drive/photos/4001.com',01/02/2023),
(4002,003,'https://drive/photos/4002.com',19/01/2023),
(4003,004,'https://drive/photos/4003.com',21/08/2022),
(4004,005,'https://drive/photos/4004.com',28/02/2023);

SELECT * FROM Photo;