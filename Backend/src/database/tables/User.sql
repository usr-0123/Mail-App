CREATE TABLE  tbl_userz (
    UserID VARCHAR(255) PRIMARY KEY,
    Username VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255),
    TagName VARCHAR(255),
    Location VARCHAR(255)
);

INSERT INTO tbl_User (UserID,Username,Email,Password,TagName,Location)
VALUES
('u01','caleb','caleb@gmail.com','1234u01','Caleb','Kingongo'),
('u03','leah','leah@gmail.com','1234u03','Leah','CBD'),
('u04','becky','becky@gmail.com','123u04','Becky','Ngangarithi'),
('u05','chrispin','chrispin@gmail.com','123u05','Chrispin','Ciaraini');

select * from tbl_user;

DELETE FROM tbl_user
WHERE Username = 'ewis';