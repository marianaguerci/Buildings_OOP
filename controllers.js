// create Building
//seleccionar que tipo de building
var hospitals = [];
var cinemas = [];
var hotels = [];
var output = document.getElementById("text");


    let hospital1 = new Hospital("Hospital de Vilafranca", 2, 1950, 26);
    let hospital2 = new Hospital("Hospital General de Catalunya", 10, 25350, 315);
    hospitals.push(hospital1, hospital2);
    console.log(hospitals);

    let cinema1 = new Cinema("Cinema Montecarlo", 1, 3180, 2000);
    let cinema2 = new Cinema("Cinema Principal", 12, 12450, 2, 6000);
    cinemas.push(cinema1, cinema2);
    console.log(cinemas);

    let hotel1 = new Hotel("Hotel Hilton", 22, 73.858, 583);
    let hotel2 = new Hotel("Hotel Pepita", 3, 593, 12);
    hotels.push(hotel1, hotel2);
    console.log(hotels);


function createBuilding() {
    let kindOfBuilding = prompt("Selecciona qué tipo de edificio quieres crear: 1. Hospital / 2. Cine / 3. Hotel");

// 1.HOSPITAL
    if (kindOfBuilding == "1" || kindOfBuilding.toLowerCase() == "hospital") {    
        createHospital();

// 2.CINE    
    } else if (kindOfBuilding == "2" || kindOfBuilding.toLowerCase() == "cine") {
        createCinema();

// 2.HOTEL    
    } else if (kindOfBuilding == "3" || kindOfBuilding.toLowerCase() == "hotel") {
        createHotel();
       
    } else {
        alert("El número ingresado es incorrecto.");
    }

}


function createHospital() {
    let newHospital;
    let hospitalName = prompt("Nombre del Hospital:");
    let hospitalFloors = prompt("Plantas:");
    let hospitalArea = prompt("Superficie:");
    let hospitalPatients = prompt("Cantidad de Pacientes:");
    
    newHospital = new Hospital(hospitalName, hospitalFloors, hospitalArea, hospitalPatients);
    hospitals.push(newHospital);
    console.log(hospitals);

    for (var i=0; i<hospitals.length; i++) {
        output.innerHTML = `<b>${hospitals[i].name}</b><br><br>
        <ul>
        <li>Plantas: ${hospitals[i].floors}</li>
        <li>Superficie: ${hospitals[i].area}m2</li>
        <li>Pacientes: ${hospitals[i].patients}</li>
        <li>${hospitals[i].cleaning(hospitals[i].area, hospitals[i].floors)}</li>
        <li>${hospitals[i].calculateVigilanceCost(hospitals[i].area)}</li>
        <li>${hospitals[i].distributeLunch(hospitals[i].patients)}</li>
        </ul>`;
    }
}

function createCinema() {
    let newCinema;
    let cinemaName = prompt("Nombre del Cine:");
    let cinemaFloors = prompt("Plantas:");
    let cinemaArea = prompt("Superficie:");
    let cinemaMaxCapacity = parseInt(prompt("Aforo Máximo:"));
    let attendants = parseInt(prompt("Total de asistentes a la sesión:"));
    console.log(attendants);

    if (attendants > cinemaMaxCapacity) { //valida que los asistentes no superen el aforo
        
        alert("ERROR. El número de asistentes supera el aforo máximo.");
        
    } else {

        newCinema = new Cinema(cinemaName, cinemaFloors, cinemaArea, cinemaMaxCapacity);
        cinemas.push(newCinema);
        console.log(cinemas);

        for (var i=0; i<cinemas.length; i++) {   
            output.innerHTML = `<b>${cinemas[i].name}</b><br><br>
            <ul>
            <li>Plantas: ${cinemas[i].floors}</li>
            <li>Superficie: ${cinemas[i].area}m2</li>
            <li>Aforo máximo: ${cinemas[i].maxCapacity} personas</li>
            <li>${cinemas[i].cleaning(cinemas[i].area, cinemas[i].floors)}</li>
            <li>${cinemas[i].calculateVigilanceCost(cinemas[i].area)}</li></ul>
            `;
        }

        //CORREGIR esto, como hago que salga el resultado fuera del for
        let outputExtra = document.getElementById("extraText");
        outputExtra.innerHTML = `${newCinema.projectSession(attendants, ticketPrice())}`; 
    }
}

//calcula precio del ticket CINE
function ticketPrice() {
     
    let day = prompt("Día de la sesión:")
    console.log(day);
    let ticket; 

    if(day.toLowerCase() == "viernes" || day.toLowerCase() == "sábado" || 
       day.toLowerCase() == "sabado" || day.toLowerCase() == "domingo") {

        let time = parseInt(prompt("Horario de la sesión (00)hs"));

        if (time >= 16) {
            ticket = 7.50;

        } else if (time < 16) {
            ticket = 6.50;
        }

    } else {
        console.log(ticket);
        ticket = 5.50; //valor de los días de semana
    }
    return ticket;

    //Preu sessió: El cost de l’entrada entre setmana és 5.50€, Divendres, dissabte diumenge: El cost de l’entrada abans de les 16h és 6.50€ i a partir de les 16h és 7.50€
}

function createHotel(){
    let newHotel;
    let hotelName = prompt("Nombre del Hotel:");
    let hotelFloors = prompt("Plantas:");
    let hotelArea = prompt("Superficie:");
    let hotelRooms = prompt("Habitaciones:")

    newHotel = new Hotel(hotelName, hotelFloors, hotelArea, hotelRooms);
    hotels.push(newHotel);
    console.log(hotels);

    for (var i=0; i<hotels.length; i++) {
        output.innerHTML = `<b>${hotels[i].name}</b><br><br>
        <ul>
        <li>Plantas: ${hotels[i].floors}</li>
        <li>Superficie: ${hotels[i].area}m2</li>
        <li>Habitaciones: ${hotels[i].rooms}</li>
        <li>${hotels[i].cleaning(hotels[i].area, hotels[i].floors)}</li>
        <li>${hotels[i].calculateVigilanceCost(hotels[i].area)}</li>
        <li>${hotels[i].roomsCleaning(hotelRooms)}</li>
        </ul>`;
    }
}
    