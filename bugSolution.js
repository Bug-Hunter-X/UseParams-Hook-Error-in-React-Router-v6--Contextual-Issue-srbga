The solution involves restructuring the component tree so that `useParams` is used within a component that is a child of a route component: 
```javascript
// Correct usage
function ItemDetails() {
  const { id } = useParams();
  return <div>Item Details: {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/item/:id" element={<ItemDetails />} />
      <Route path="/*" element={<MyComponent/>} />
    </Routes>
  );
}

function MyComponent() {
  return (
    <div>My Component</div>
  );
}
```
Alternatively, if you need to access parameters outside the route, you can pass the parameters down through props. For example:
```javascript
function App() {
  return (
    <Routes>
      <Route path="/item/:id" element={<ItemDetails />} />
    </Routes>
  );
}

function ItemDetails() {
  const { id } = useParams();
  return <MyComponent id={id} />
}

function MyComponent({ id }) {
  return (
    <div>My Component {id ? `with id ${id}` : ''}</div>
  );
}
```