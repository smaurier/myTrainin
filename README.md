*user* : id, pseudo, password, idCurrentProgram, mail <br>
*program* : id, name, idUser, nbDay <br>
*exercices* : id, muscleGroup, name, tableOfSeriesToMake (rc: [idSeries1,idSeries2, idSeries3, idSeries4]) , idUser, typeOfCharge, notes <br>
*series*: id, repetitionToMake, seriesToMake, weightToTake, ResultOfTheDay (table of all the performances in this exercice. [repetition, weight]. ex: [{12,10},{12,10},{12,10},{12,10}]) <br>
*stats*: id, idUser, idExercice, date, number <br>
*note*: id, idExercice, date, Text <br>
*dayProgram*: id, idProgram <br>
