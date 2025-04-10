const findTheOldest = function(people) {
    return people.reduce((oldest_person, curr_person) => {
        const currentYear = new Date().getFullYear();
        const oldestAge = getAge(oldest_person, currentYear);
        const currentAge = getAge(curr_person, currentYear);
        
        if (oldestAge > currentAge) {
            return oldest_person;
        } else {   
            return curr_person;
        }
    });

    function getAge(person, currentYear) {
        return person ? (person.yearOfDeath || currentYear) - person.yearOfBirth : 0;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
