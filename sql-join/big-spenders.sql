select
"amount",
"customers"."firstName" as "first",
"customers"."lastName" as "last"
from "payments"
join "customers" using ("customerId")
where "payments"."customerId" = "customers"."customerId"
order by "amount" desc
limit 10;
