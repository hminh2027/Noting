-- CATEGORY
INSERT INTO `category` (name) VALUES ("Học tập");
INSERT INTO `category` (name) VALUES ("Giải trí");
INSERT INTO `category` (name) VALUES ("Sức khỏe");

-- USER
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Liêm", "bactuliem@gmail.com", '$10$qKBIRsIUeEQ9oC/F3IXS1.2IQZSWhSnpjz3Ec/RF/gi.DbTM2Cebe');
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Sắc", "saccute@gmail.com", '$10$qKBIRsIUeEQ9oC/F3IXS1.2IQZSWhSnpjz3Ec/RF/gi.DbTM2Cebe');
INSERT INTO `user` (firstName, lastName, email, password) VALUES ("Ông", "Lích", "lickiminad@gmail.com", '$10$qKBIRsIUeEQ9oC/F3IXS1.2IQZSWhSnpjz3Ec/RF/gi.DbTM2Cebe');

-- TAG
INSERT INTO `tag` (name) VALUES ("Lập trình");
INSERT INTO `tag` (name) VALUES ("Javascript");
INSERT INTO `tag` (name) VALUES ("Mẹo hay");

-- NOTE
INSERT INTO `note` (title, content, isTemplate, isPublic, userId, categoryId, createdAt, updatedAt) VALUES ("101 bài học nên nhớ khi dùng Javascript", "Hello", false, false, 1, 1, "2022-11-02 00:04:43.392513", "2022-11-02 00:04:43.392513");
INSERT INTO `note` (title, content, isTemplate, isPublic, userId, categoryId, createdAt, updatedAt) VALUES ("Mẫu TODO", "", true, true, 1, 1, "2022-11-03 00:04:43.392513", "2022-11-03 00:04:43.392513");

-- TAG_NOTE
INSERT INTO `tag_notes_note` VALUES (2, 1);
INSERT INTO `tag_notes_note` VALUES (3, 1);
INSERT INTO `tag_notes_note` VALUES (1, 1);

-- SNAPSHOT
INSERT INTO `snapshot` VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "Hello im snapshot!", 1, "Someone just change the content", "2022-11-03 00:04:43.392513");
INSERT INTO `snapshot` VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "snapshot 2!", 1, "Someone just change the content", "2022-11-04 00:04:43.392513");
INSERT INTO `snapshot` VALUES ("101 bài học nên nhớ khi dùng Javascript", 1, "snapshot 3!", 1, "Someone just change the content", "2022-11-05 00:04:43.392513");

-- ATTACHMENT
INSERT INTO `attachment` VALUES ("image.png", 1);
INSERT INTO `attachment` VALUES ("image2.png", 2);
INSERT INTO `attachment` VALUES ("image2.png", 2);

-- COMMENT
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("OMG so great!", 1, 1, "2022-11-03 00:04:43.392513", "2022-11-03 00:04:43.392513");
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("Keep it up sir!", 2, 1, "2022-11-04 00:04:43.392513", "2022-11-04 00:04:43.392513");
INSERT INTO `comment` (content, userId, noteId, createdAt, updatedAt) VALUES ("Damn that was nice!", 2, 2, "2022-12-03 00:04:43.392513", "2022-12-03 00:04:43.392513");

-- SHARED NOTE

