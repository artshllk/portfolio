export const EmailTemplate = ({ name, message, email }) => (
  <div>
    <h1>I am, {name}</h1>
    <small>{email}</small>
    <br />
    <p>{message}</p>
  </div>
);
