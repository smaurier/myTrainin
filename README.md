*user* : id, pseudo, password, idCurrentProgram, mail
*program* : id, name, idUser, nbDay
*exercices* : id, muscleGroup, name, tableOfSeriesToMake (rc: [idSeries1,idSeries2, idSeries3, idSeries4]) , idUser, typeOfCharge, notes
*series*: id, repetitionToMake, seriesToMake, weightToTake, ResultOfTheDay (table of all the performances in this exercice. [repetition, weight]. ex: [{12,10},{12,10},{12,10},{12,10}])
*stats*: id, idUser, idExercice, date, number
*note*: id, idExercice, date, Text
*dayProgram*: id, idProgram