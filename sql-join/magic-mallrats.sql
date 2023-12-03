select
"firstName",
"lastName"
from "customers"
join "rentals" using ("customerId")
join "films" on "rentals"."customerId" = "films"."filmId"
where "films"."title" = 'Magic Mallrats';
