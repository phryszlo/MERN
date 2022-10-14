// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from
import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Baby step by returning whatever is sent back by the server
  return token;
}

// Note: We have not used a try/catch block because any error 
// will propagate up to the "consumer" of the service 
// - in this case the consumer is the handleSubmitmethod 
// in the <SignUpForm>component.