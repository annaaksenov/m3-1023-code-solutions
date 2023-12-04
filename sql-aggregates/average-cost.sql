select "title",
avg("replacementCost")
from "films"
group by "title";
