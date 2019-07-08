// Front end logic.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { calculator } from './revisedrejectproject5.js';

$(document).ready(function() {


 $("#calculate").click( function() {
    // event.preventDefault();

    //Variables
    let planetSelected = $("#planet :selected").val();
    let birthdayInput = $("#birthDayYear").val();

        let result = calculator(planetSelected , birthdayInput);

     $("#output").text("You are " +  result[0] + " years old on the planet of " + $("#planet :selected").val());
      $("#output2").text(result[1] + " Is the average human life expectancy on the planet of " + $("#planet :selected").val());


    });
});
//Added for testing reasons
