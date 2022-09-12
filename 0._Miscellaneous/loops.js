// Side effects, er når en variabel eller object bliver muteret igennem proogrammet. I funktionel programmering vil vi gerne have referential transparency. https://en.wikipedia.org/wiki/Referential_transparency
// en code smell er f.eks uncontrolled side effects.

// undgå enhanced for-loops

// loop metoder
// foreach (er ikke helt funktionelt)
// map, reduce, filter. <- forsøg udelukkende at bruge disse 3.

const barbieMovies = [
    {name : "Swan lake", year: 2001}, 
    {name : "Princess and the pauper", year: 2008}, 
    {name : "Fairies", year: 2014},
];

// Task use map below to give all the movies a 10 rating (out of 10 of course)

const ratedBarbieMovies = barbieMovies.map((movie) => {
    movie.rating = Math.floor(Math.random() * 10 + 1); 
    return movie;
})

console.log("original:", barbieMovies)
console.log("changes: ", ratedBarbieMovies)
 
// Task give me movies more recent than 2005

const recentBarbieMovies = barbieMovies.filter((movie) => movie.year > 2005)
console.log(recentBarbieMovies)

/* Loop Advice
   Only use for loops if you are doing "finger counting".
   I.E. counting to a number.

   Don't use enhanced for loops.

   Only use forEach if you re doing something and don't care about the result. 

   Always prefer functional loop methods such as:
   map, filter and reduce.

   Map for mapping 1:1
   Filter for filtering the array.
   Reduce to reducing the content of the array.
   */