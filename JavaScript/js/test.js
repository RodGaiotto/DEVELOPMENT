console.log('\nExemplo da utilização de continue');

const array4 = [1, 2, 4, 5, 6];

for (var index2 = 0; index2 < array4.length; index2++) {
    const element = array4[index2];

    if (element % 2 === 0) {
        continue;
    }

    console.log(element);
}