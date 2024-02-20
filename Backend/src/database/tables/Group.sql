CREATE TABLE tbl_Group (
    GroupID VARCHAR(255) PRIMARY KEY,
    GroupName VARCHAR(255),
    Description VARCHAR(255),
    CreatedDate DATETIME,
);

SELECT * FROM tbl_Group

DROP TABLE tbl_Group;

INSERT INTO tbl_Group
VALUES
('5000','Group1','Group 1 discussion group','01/12/2023'),
('5001','Group2','Group 2 discussion group','01/12/2023'),
('5002','Group3','Group 3 discussion group','01/12/2023'),
('5003','Group4','Group 4 discussion group','01/12/2023'),
('5004','Group5','Group 5 discussion group','01/12/2023');