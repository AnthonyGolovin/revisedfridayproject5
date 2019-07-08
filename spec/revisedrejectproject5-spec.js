//Test cases
import { calculator } from "./../src/revisedrejectproject5.js";

describe('calculator', function() {

  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Mercury", 1997)).toEqual([5.279999999999999,13.92]);
  });
  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Mercury", 2000)).toEqual([4.56,14.64]);
  });
  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Mercury", 2019)).toEqual([0,19.2]);
  });
  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Venus", 1997)).toEqual([13.64,35.96]);
  });
  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Venus", 2000)).toEqual([11.78,37.82]);
  });
  it('It should take the selected planet and user date of birth to calculate to find the users planet age', function() {
    expect(calculator("Venus", 2019)).toEqual([0,49.6]);
  });
});
