

// // import React, { useState, useEffect, createContext } from "react";
// // import { Routes, Route } from 'react-router-dom';
// // import app from "./firebase/Firebase";
// // import { getAuth, onAuthStateChanged } from 'firebase/auth';

// // import HomePage from "./pages/homepage/HomePage";
// // import BooksPage from "./pages/bookspage/BooksPage";
// // import CartPage from "./pages/cartpage/CartPage";
// // import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
// // import Login from "./pages/loginpage/Login";
// // import SignUp from "./pages/signup-page/Signup";
// // import Video from "./components/Video";
// // import GameBoard from "./components/GameBoard";
// // import ScrollToTop from "./components/util/ScrollToTop";
// // import SearchPage from "./pages/searchpage/SearchPage";
// // import AdminPage from "./components/AdminPage";
// // import Dashboard from "./components/Dashboard";

// // export const UserContext = createContext({});
// // export const CartContext = createContext({});

// // const App = () => {
// //     const auth = getAuth(app);

// //     const [authenticatedUser, setAuthenticatedUser] = useState(null);
// //     const [cartItems, setCartItems] = useState([]);
// //     const [totalAmount, setTotalAmount] = useState(0);
// //     const [selectedSubjects, setSelectedSubjects] = useState([]);

// //     useEffect(() => {
// //         onAuthStateChanged(auth, (user) => {
// //             if (user) {
// //                 setAuthenticatedUser(user);
// //             } else {
// //                 setAuthenticatedUser(null);
// //             }
// //         });
// //     }, [auth]);

// //     useEffect(() => {
// //         let total = 0;
// //         cartItems.forEach((item) => {
// //             total = total + parseInt(item.price);
// //         });

// //         setTotalAmount(total);
// //     }, [cartItems]);

// //     const handleSubjectChange = (subjects) => {
// //         setSelectedSubjects(subjects);
// //     };

// //     return (
// //         <ScrollToTop>
// //             <UserContext.Provider value={authenticatedUser}>
// //                 <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
// //                     <div className="app-layout">
// //                         <div className="main-content">
// //                             <Routes>
// //                                 <Route path="/" element={<HomePage />} />
// //                                 <Route path="/books" element={<BooksPage />} />
// //                                 <Route path="/cart" element={<CartPage />} />
// //                                 <Route path="/search" element={<SearchPage />} />
// //                                 <Route path="/book-details/:id" element={<BookDetailsPage />} />
// //                                 <Route path="/signup" element={<SignUp />} />
// //                                 <Route path="/login" element={<Login />} />
// //                                 <Route path="/videos" element={<Video selectedSubjects={selectedSubjects} />} />
// //                                 <Route path="/games" element={<GameBoard />} />
// //                                 <Route path="/admin" element={<AdminPage />} />
// //                                 <Route path="/dashboard" element={<Dashboard />} />
// //                             </Routes>
// //                         </div>
// //                     </div>
// //                 </CartContext.Provider>
// //             </UserContext.Provider>
// //         </ScrollToTop>
// //     );
// // }

// // export default App;
// import React, { useState, useEffect, createContext } from "react";
// import { Routes, Route } from 'react-router-dom';
// import app from "./firebase/Firebase";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// // Importing necessary pages and components
// import HomePage from "./pages/homepage/HomePage";
// import BooksPage from "./pages/bookspage/BooksPage";
// import CartPage from "./pages/cartpage/CartPage";
// import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
// import Login from "./pages/loginpage/Login";
// import SignUp from "./pages/signup-page/Signup";
// import Video from "./components/Video";
// import GameBoard from "./components/GameBoard";
// import ScrollToTop from "./components/util/ScrollToTop";
// import SearchPage from "./pages/searchpage/SearchPage";
// import AdminPage from "./components/AdminPage";
// import Dashboard from "./components/Dashboard";

// // Creating contexts for user and cart management
// export const UserContext = createContext({});
// export const CartContext = createContext({});

// const App = () => {
//     const auth = getAuth(app);

//     const [authenticatedUser, setAuthenticatedUser] = useState(null);
//     const [cartItems, setCartItems] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [selectedSubjects, setSelectedSubjects] = useState([]);

//     // Monitoring authentication state
//     useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//             setAuthenticatedUser(user ? user : null);
//         });
//     }, [auth]);

//     // Calculating total amount for cart items
//     useEffect(() => {
//         const total = cartItems.reduce((acc, item) => acc + parseInt(item.price), 0);
//         setTotalAmount(total);
//     }, [cartItems]);

//     // Handling subject changes for videos
//     const handleSubjectChange = (subjects) => {
//         setSelectedSubjects(subjects);
//     };

//     return (
//         <ScrollToTop>
//             <UserContext.Provider value={authenticatedUser}>
//                 <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
//                     <div className="app-layout">
//                         <div className="main-content">
//                             <Routes>
//                                 <Route path="/" element={<HomePage />} />
//                                 <Route path="/books" element={<BooksPage />} />
//                                 <Route path="/cart" element={<CartPage />} />
//                                 <Route path="/search" element={<SearchPage />} />
//                                 <Route path="/book-details/:id" element={<BookDetailsPage />} />
//                                 <Route path="/signup" element={<SignUp />} />
//                                 <Route path="/login" element={<Login />} />
//                                 <Route path="/videos" element={<Video selectedSubjects={selectedSubjects} />} />
//                                 <Route path="/games" element={<GameBoard />} />
//                                 <Route path="/admin" element={<AdminPage />} />
//                                 <Route path="/dashboard" element={<Dashboard />} />
//                             </Routes>
//                         </div>
//                     </div>
//                 </CartContext.Provider>
//             </UserContext.Provider>
//         </ScrollToTop>
//     );
// }

// export default App;

import React, { useState, useEffect, createContext } from "react";
import { Routes, Route } from 'react-router-dom';
import app from "./firebase/Firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AboutUs from "./components/AboutUs";

import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signup-page/Signup";
import Video from "./components/Video";
import GameBoard from "./components/GameBoard";
import ScrollToTop from "./components/util/ScrollToTop";
import SearchPage from "./pages/searchpage/SearchPage";
import AdminPage from "./components/AdminPage";
import Dashboard from "./components/Dashboard";
import DashBoardss from "./components/DashBoardss";
import AddStudent from './components/AddStudent'
export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
    const auth = getAuth(app);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticatedUser(user);
            } else {
                setAuthenticatedUser(null);
            }
        });
    }, [auth]);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += parseInt(item.price);
        });

        setTotalAmount(total);
    }, [cartItems]);

    const handleSubjectChange = (subjects) => {
        setSelectedSubjects(subjects);
    };
  
    return (
        <ScrollToTop>
            <UserContext.Provider value={authenticatedUser}>
                <CartContext.Provider value={{ cartItems, totalAmount, setCartItems }}>
                    <div className="app-layout">
                        <div className="main-content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/books" element={<BooksPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/book-details/:id" element={<BookDetailsPage />} />
                                <Route path="/signup" element={<SignUp />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/videos" element={<Video selectedSubjects={handleSubjectChange} />} />
                                <Route path="/games" element={<GameBoard />} />
                                <Route path="/admin" element={<AdminPage />} />
                                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                                <Route path="/dashboard" element={<Dashboard adminName="Arunprasad" />} />
                                <Route path="/about" element={<AboutUs />} /> 
                                <Route path="/student-progress" element={<DashBoardss/>}/>
                                <Route path="/student-progress" element={<DashBoardss/>}/>
                                <Route path="add-student" element={<AddStudent/>}/>
                            
                                 
                            </Routes>
                        </div>
                    </div>
                </CartContext.Provider>
            </UserContext.Provider>
        </ScrollToTop>
    );
}

export default App;
