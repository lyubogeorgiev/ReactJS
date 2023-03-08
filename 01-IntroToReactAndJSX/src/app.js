const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const secondHeadingElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondHeadingElement);

const headerElement = (
    <header>
        <h1>Hello from React!</h1>
        <h2>Slogan here</h2>
    </header>
);

root.render(headerElement);