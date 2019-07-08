//BackEnd

export function calculator(planet, birthday) {

    let planetLifeExpectancy = "";
    const year = new Date().getFullYear();
        const averageLifeExpectancy = 80;
    let answer = "";
    let lifeExpectancy = "";
    let userDateOfBirth = parseInt(birthday);

    if (planet == "Mercury") {
       answer = (year - userDateOfBirth) * .24;
       planetLifeExpectancy = averageLifeExpectancy * .24;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if (planet == "Venus") {
       answer = (year - userDateOfBirth) * .62;
       planetLifeExpectancy = averageLifeExpectancy * .62;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if (planet == "Mars") {
       answer = (year - userDateOfBirth) * 1.88;
       planetLifeExpectancy = averageLifeExpectancy * 1.88;
      lifeExpectancy = planetLifeExpectancy - answer;
    } else if (planet == "Jupiter") {
       answer = (year - userDateOfBirth) * 11.86;
       planetLifeExpectancy = averageLifeExpectancy * 11.86;
      lifeExpectancy = planetLifeExpectancy - answer;
    }

   let array = [answer, lifeExpectancy];
return array;

}
