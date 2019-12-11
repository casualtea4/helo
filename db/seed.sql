create table helo_users(
    users_id serial primary key,
    username varchar(20),
    password varchar(250),
    profile_pic text
);

create table helo_posts(
    posts_id serial primary key,
    title varchar(45),
    img text,
    content text,
    users_id int references helo_users(users_id)
);