select "line1",
      "district",
      "cities"."name" as "city"
  from "addresses"
  join "cities" using ("cityId");
