select* from helo_posts p
join helo_users u on u.users_id = p.users_id
where p.users_id = $1 and 