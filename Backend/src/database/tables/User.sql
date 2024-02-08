CREATE TABLE  [User] (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    TagName VARCHAR(255) NOT NULL,
    Location VARCHAR(255)
);

select * from [User]