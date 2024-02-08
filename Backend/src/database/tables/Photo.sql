CREATE TABLE Photo (
    photoID INT NOT NULL PRIMARY KEY,
    UserID INT NOT NULL,
    PhotoURL VARCHAR(MAX) NOT NULL,
    UploadDate DATETIME NOT NULL,
    FOREIGN KEY (UserID) REFERENCES [User](UserID)
);