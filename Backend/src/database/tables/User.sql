CREATE TABLE  [User] (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    TagName VARCHAR(255) NOT NULL,
    Location VARCHAR(255)
);

select * from tbl_User;

EXEC sp_rename '[User]','tbl_User';

INSERT INTO tbl_User (UserID,Username,Email,TagName,Location)
VALUES
(002,'caleb','caleb@gmail.com','Caleb','Kingongo'),
(003,'leah','leah@gmail.com','Leah','CBD'),
(004,'becky','becky@gmail.com','Becky','Ngangarithi'),
(005,'chrispin','chrispin@gmail.com','Chrispin','Ciaraini');