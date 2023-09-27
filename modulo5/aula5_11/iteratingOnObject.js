const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    color: 'Silver',
    fueltype: 'Gasoline',
    engineCapacity: '2.5L',
    transmission: 'Automatic',
    power: '203 horsepower',
    seatingCapacity: 5,
    price: '$25,000',
};

for (info in car) {
    console.log(`${info}: ${car[info]}`);
}