	function getNewCar() {
	    let car = {
	        city: "Toronto",
	        passengers: 0,
	        gas: 100,
	    };

	}

	let cars = [];

	//did not use a let or const for car as this makes it a global variable i can access in other functions.
	function addCar(cars, newCar) {
	    cars.push(newCar);
	    console.log(`Adding new cars fleet size is now ${cars}`);
    }
    
	function pickupPassenger(car) {
	    car.passengers++;
	    car.gas -= 10;
	    console.log(`picked up passenger car now has ${passengers} passengers`);
	}

	function getDestination(car) {
	    switch (car.city) {
	        case 'Toronto':
	            return 'Mississauga';
	          

	        case 'Mississauga':
	            return 'London';
	            

	        case 'London':
	            return 'Toronto';
	           
	    }
	}

	function fillUpGas(car) {
	    let oldGas = car.gas;
	    car.gas = 100;
	    return `Filled up to ${get_gas_display(car.gas)} on gas from ${get_gas_display(oldGas)}`;
	}

	function getGasDisplay(gas) {
	    '${gas}';
	}

	function drive(car, cityDistance) {
	    if (gas <= cityDistance); {
	        car.fillUpGas();
	    }else{
	        city = getDestination();
	        gas -= cityDistance();
	    }
	}

	function dropOffPassengers(car) {
	    previousPassengers = car.passengers;
	    car.passengers = 0 `Dropped off ${previousPassengers} passengers`;
	}

	function act(car) {

	    distanceBetweenCities = 50;
	    if (gas < 20) {
	        fillUpGas(car);
	    }

	    if (passengers < 3) {
	        pickupPassenger(car);
	    }

	    if (gas < distanceBetweenCities) {
	        fillUpGas(car);
	    }

	    droveTo = drive(car, distanceBetweenCities);
	    passengersDropped = dropOffPassengers(car);
	    return `"${droveTo} ${passengersDropped}"`;
	}

	function commandFleet(car) {
	    for (car of cars); {
	        const action = act(car);
	        // console.log(`car `)?? ADD LATER ???!
	    }
	    console.log('---');
	}

	function addOneCarPerDay(cars, numDays) {
	    for (let i = 0; i < numDays; i++) {
	        const newCar = getNewCar;
	        console.log(addCar(newCar));
	        commandFleet(cars);
	    }
	}

	addOneCarPerDay(cars, 10);