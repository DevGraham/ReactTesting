import { render, screen } from "@testing-library/react"; 
import userEvent from "@testing-library/user-event"; 
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test('On initial render the Pay button is disabled', async () => {
    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}}/>) 

    expect(await screen.findByRole('button',{name: /pay/i})).toBeDisabled();
}); 

test("If an amount and note is entered, the pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // screen.getByRole(''); allows us to see all the roles on the screen in an html format

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50"); //Here we mimic a userEvent of the user typing "50"
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner"); //Here we mimic a userEvent of the user typing "Dinner"

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled(); //We expect the button to be enabled after mimicking the above user events.
});