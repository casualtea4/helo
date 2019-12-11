insert into helo_users(
    username,password
)values(
    ${username},
    ${hash}
)
returning users_id, username;