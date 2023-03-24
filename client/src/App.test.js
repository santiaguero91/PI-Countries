import { GET_COUNTRIES, FILTER_BY_CONTINENT, FILTER_BY_SEASON, ORDER_BY_NAME, ORDER_BY_POPULATION, GET_COUNTRY_NAME, GET_ACTIVITIES, GET_COUNTRY_ID} from "../src/redux/action-types";
import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import App from "./App"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Form from "./views/Form";



describe("actions.js", function() {
  
  it ("Actions are defined", function() {
    expect (GET_COUNTRIES).toBeDefined();
    expect (FILTER_BY_CONTINENT).toBeDefined();
    expect (FILTER_BY_SEASON).toBeDefined();
    expect (FILTER_BY_CONTINENT).toBeDefined();
    expect (ORDER_BY_NAME).toBeDefined();
    expect (ORDER_BY_POPULATION).toBeDefined();
    expect (GET_COUNTRY_NAME).toBeDefined();
    expect (GET_ACTIVITIES).toBeDefined();
    expect (GET_COUNTRY_ID).toBeDefined();
    })

  test('Landing page renders Home button',  () => {
    render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Form renders all his components',  () => {
    render(
    <Provider store={store}>
    <BrowserRouter>
        <Form />
      </BrowserRouter>
    </Provider>
    );
    const linkElement = screen.getByRole("button",{name: "CREATE ACTIVITY"});
    const checkboxSummer = screen.getByRole("checkbox",{name: "Summer"});
    const checkboxAutumn = screen.getByRole("checkbox",{name: "Autumn"});
    const checkboxWinter = screen.getByRole("checkbox",{name: "Winter"});
    const checkboxSpring = screen.getByRole("checkbox",{name: "Spring"});
    expect(linkElement).toBeInTheDocument();
    expect(checkboxSummer).toBeInTheDocument();
    expect(checkboxAutumn).toBeInTheDocument();
    expect(checkboxWinter).toBeInTheDocument();
    expect(checkboxSpring).toBeInTheDocument();


    const createNewActivity = screen.getByText(/Create New Activity/i);
    const inputName = screen.getByRole("textbox",{name: "name"});
    const inputDifficulty = screen.getByRole("spinbutton",{name: "difficulty"});
    const inputDuration = screen.getByRole("spinbutton",{name: "duration"});  
    expect(createNewActivity).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputDifficulty).toBeInTheDocument();
    expect(inputDuration).toBeInTheDocument();

  });


})




 

  // node --experimental-vm-modules node_modules/jest/bin/jest.js