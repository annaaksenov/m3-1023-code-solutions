select sum("inventoryId") as "inventory",
"storeId"
from "inventory"
group by "storeId";
