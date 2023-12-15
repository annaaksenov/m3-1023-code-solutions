select
count("cityId") as "total cities",
"countries"."name" as "country"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
