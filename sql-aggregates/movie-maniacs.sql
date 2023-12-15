select
"customers"."firstName",
"customers"."lastName",
sum("films"."rentalRate") as "totalAmountSpent"
from "customers"
join "rentals" on "customers"."customerId" = "rentals"."customerId"
join "films" on "rentals"."customerId" = "films"."filmId"
group by "customers"."firstName", "customers"."lastName"
order by "totalAmountSpent" desc;
