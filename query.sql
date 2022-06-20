CREATE TABLE IF NOT EXISTS orders(
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1) PRIMARY KEY,
    item_id BIGINT,
    cust_id BIGINT,
    qty BIGINT,
    amount BIGINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP    
);

CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1) PRIMARY KEY,
    name varchar(50),
    email varchar(50) UNIQUE NOT NULL,
    pass varchar(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP    
);

CREATE TABLE IF NOT EXISTS items(
    id INT NOT NULL GENERATED ALWAYS AS IDENTITY (INCREMENT 1 START 1) PRIMARY KEY,
    name varchar(50),
    price BIGINT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP    
);