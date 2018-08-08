create table if not exists users (
    id serial primary key,
    auth_id text,
    name text
);

create table if not exists products (
    id serial primary key,
    name text,
    style text,
    price decimal,
    image_link text,
    color text
);
