import {sql} from './db.js'
sql`
CREATE TABLE videos(
id UUID PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
duration INT,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`.then(() => {
    console.log('Tabela criada!');
})