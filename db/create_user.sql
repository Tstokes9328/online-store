insert into users
(auth_id, name)
values
($1, $2)
returning *;