const firstName = 'John';
const lastName = 'Doe';

const fullName = [...firstName, ...lastName];

// console.log(fullName[0]);

let counter = 0;

const cheer = () => {
    if (counter < fullName.length) {
        setTimeout(function() {
            console.log(`give me a ${fullName[counter].toLocaleUpperCase()}!`);
            counter++;
            return cheer();
        }, 1000);
    } if (counter === fullName.length ) {
        setTimeout(function() {
            console.log('What does that spell?');            
        }, 1000);

        setTimeout(function() {
            let capitalName = `${firstName} ${lastName} !`.toUpperCase();
            console.log(capitalName);
        }, 2000);
    }
};

cheer();