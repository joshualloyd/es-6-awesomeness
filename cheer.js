const firstName = 'John';
const lastName = 'Doe';

const fullName = [...firstName, ...lastName];

// console.log(fullName[0]);

let counter = 0;

const cheer = () => {

    if (counter > fullName.length) {
        setTimeout(function() {
            console.log(`give me a ${fullName[counter]}`);
            counter++;
            return cheer();
        }, 1000);
    }
};

cheer();