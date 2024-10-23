# react-concepts

 ## [1] React Router
 ![image](https://github.com/user-attachments/assets/1bf062da-5cac-410d-9402-23fa09eeab20)


<details>
<summary>React Router Installation</summary>

```javascript
    npm install react-router-dom
```
</details>


<details>
<summary>Link and NavLink In React Router</summary>

- In the header component, import the react-router-dom

```javascript
import { Link, NavLink } from 'react-router-dom';
```
- The anchor tag or ```<a>``` tag is not used in React as it refreshes the whole page which is not the concept of react, that's why ```Link``` tag is used in react which is imported from ```react-router-dom```.

```javascript
<Link to="/" className="flex items-center">
    Home
</Link>
```


- When we use ```NavLink``` we have a variable named ```isActive``` which can be used for changing the appearance of the link on active page when it is in active state. It macthes the state with the URL.

```javascript
<li>
    <NavLink
        to="/about"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3
            ${isActive ? "text-purple-400" : "text-gray-600"}

            duration-200 
            border-b border-gray-100 hover:bg-gray-50 
            lg:hover:bg-transparent 
            lg:border-0 hover:text-purple-400 lg:p-0`
        }
    >
        About
    </NavLink>
</li>

```
</details>


<details>
<summary>React Outlet</summary>

- ```Outlet``` is provided by react-router-dom that will be changed but its upper and lower items like Header and Footter will remains same.

- To change the components between header and footer, we need to import ```Outlet``` from react-router-dom in the file Layout.jsx.

```javascript
    import { Outlet } from 'react-router-dom'
```

- Then, do the following: 

```javascript
function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
```

</details>


<details>
<summary>React Router Configuration</summary>

- import the following:

```javascript
import { RouterProvider, createHashRouter,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'   
```

- In the main.js, pass the router prop in the ```RouterProvider```

```javascript
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)    
```
- We can create router in two different ways.

- We have ```createBrowserRouter``` method which will take an array of objects that contains path, element, and children.

- This is Metnod -1

```javascript
// create a router METHOD 1
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])
)    
```

- This is Method -2
- Instead of passing an array of objects, we can also call a method inside the ```createRoutesFromElements``` method.

```javascript
//create a rouyer METHOD 2
const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={githubLoader} 
        path="github" 
        element={<Github />} />
    </Route>
  )
)
```

- Here, the ```createHashRouter``` is used for githib pages instead of ```createBrowserRouter```. We need to use this whenever we want to deploy it as a github page.

</details>


<details>
<summary>Optimzed version of fetching data without useEffect Hook </summary>

- Create a async method that will return the response in JSON format.
```javascript
export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/Razi-Azam')
    return response.json()
}
```
- To get the data returned by "githubLoader" function, we have to import "useLoaderData".
```javascript
import { useLoaderData } from 'react-router-dom';
```
- use the data with the help of useLoaderData as follows:
```javascript
function Github() {
    const userData = useLoaderData()


  return (
    <div className='flex flex-row justify-center items-center p-4'>
        <div>
            <img src={userData.avatar_url} className='rounded-full' alt="Github profile picture" width={250} />
        </div>
    </div>
  )
}
```
</details>


