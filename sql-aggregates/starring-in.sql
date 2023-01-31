select "genres"."name" as "movieGenre",
    count("filmGenre".*) as "numberOfFilms"
    from "actors"
    join "castMembers" using ("actorId")
    join "films" using ("filmId")
    join "filmGenre" using ("filmId")
    join "genres" using ("genreId")
    where "actorId" = 178
    group by "genreId";
