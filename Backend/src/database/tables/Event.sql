CREATE TABLE Event (
    EventID INT NOT NULL PRIMARY KEY,
    EventName VARCHAR(MAX) NOT NULL,
    Description VARCHAR(MAX),
    EventDate DATETIME NOT NULL,
    Location VARCHAR(255) NOT NULL,
    EventPoster VARCHAR(MAX)
);