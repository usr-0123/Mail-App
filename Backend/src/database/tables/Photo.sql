CREATE TABLE Photo (
    photoID VARCHAR(255) PRIMARY KEY,
    userID VARCHAR(255),
    PhotoURL VARCHAR(255),
    uploadDate TIMESTAMP,
    profile_img BIT DEFAULT 0,
    FOREIGN KEY (userID) REFERENCES tbl_user(UserID)
);

INSERT INTO Photo
VALUES
(4000,001,'https://drive/photos/4000.com',01/02/2022),
(4001,002,'https://drive/photos/4001.com',01/02/2023),
(4002,003,'https://drive/photos/4002.com',19/01/2023),
(4003,004,'https://drive/photos/4003.com',21/08/2022),
(4004,005,'https://drive/photos/4004.com',28/02/2023);

SELECT * FROM Photo;

DROP TABLE Photo;