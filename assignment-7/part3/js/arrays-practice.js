
//STEP 1
var fav_movies = ["Harry Potter", "Lord of the Rings", "Ironman", "Avengers", "Captain America"];
console.log(fav_movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Harry Potter";
movies[1] = "Lord of the Rings";
movies[2] = "Ironman";
movies[3] = "Avengers";
movies[4] = "Captain America";
console.log(movies[0]);

//STEP 3
var movies_2 = new Array(5);
movies_2[0] = "Harry Potter";
movies_2[1] = "Lord of the Rings";
movies_2[2] = "Ironman";
movies_2[3] = "Avengers";
movies_2[4] = "Captain America";
movies_2.splice(2,0,"Thor");
console.log(movies_2.length);

//STEP 4
var movies_3 = [];
movies_3[0] = "Harry Potter";
movies_3[1] = "Lord of the Rings";
movies_3[2] = "Ironman";
movies_3[3] = "Avengers";
movies_3[4] = "Captain America";

delete movies_3[0];
console.log(movies_3);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Harry Potter";
favMovies3[1] = "Lord of the Rings";
favMovies3[2] = "Ironman";
favMovies3[3] = "Avengers";
favMovies3[4] = "Captain America";
favMovies3[5] = "Thor";
favMovies3[6] = "Spiderman";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "Harry Potter";
favMovies4[1] = "Lord of the Rings";
favMovies4[2] = "Ironman";
favMovies4[3] = "Avengers";
favMovies4[4] = "Captain America";
favMovies4[5] = "Thor";
favMovies4[6] = "Spiderman";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Harry Potter";
favMovies5[1] = "Lord of the Rings";
favMovies5[2] = "Ironman";
favMovies5[3] = "Avengers";
favMovies5[4] = "Captain America";
favMovies5[5] = "Thor";
favMovies5[6] = "Spiderman";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Harry Potter";
favMovies6[1] = "Lord of the Rings";
favMovies6[2] = "Ironman";
favMovies6[3] = "Avengers";
favMovies6[4] = "Captain America";
favMovies6[5] = "Thor";
favMovies6[6] = "Spiderman";


var leastFavMovies = [];
leastFavMovies[0] = "Suicide Squad";
leastFavMovies[1] = "Brahmastra";
leastFavMovies[2] = "Rogue One";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());

