select
"firstName",
"lastName"
from "actors"
join "castMembers" on "actors"."actorId" = "castMembers"."actorId"
join "films" on "castMembers"."filmId" = "films"."filmId"
where "films"."title" = 'Jersey Sassy';
