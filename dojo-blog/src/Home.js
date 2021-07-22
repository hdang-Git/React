// import {useState, useEffect} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {    
    // const [blogs, setBlogs] = useState(null);

    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     //to simulate a waiting request
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //         .then(res => {
    //             console.log(res);
    //             if (!res.ok) {
    //                 throw Error('could not fetch the data for that resource');
    //             }
    //             return res.json()
    //         })
    //         .then(
    //             data => {
    //                 console.log(data);
    //                 setBlogs(data);
    //                 setIsPending(false);
    //                 setError(null);
    //             }
    //         )
    //         .catch(err => {
    //             // console.log(err.message);
    //             setError(err.message);
    //             setIsPending(false);
    //         })
    //     }, 1000);
    // }, []);

    //custom hook
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
           { blogs && <BlogList blogs={blogs} title="All Blogs"/> }
        </div>
     );
}
 
export default Home;








// import {useState, useEffect} from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     // let name = 'mario'
//     // const [name, setName] = useState('mario');
//     // const [age, setAge] = useState(25);

//     // const handleClick = () => {
//         // name = 'luigi';
//         // console.log(name);
//         // setName('luigi');
//         // setAge('30');
//     // }

//     // const handleClick = (e) => {
//     //     console.log('hello, ninjas', e);
//     // }
//     // const handleClickAgain = (name, e) => {
//     //     console.log('hello ' + name, e.target);
//     // }

//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//     ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter((blog) => blog.id !== id);
//         setBlogs(newBlogs);
//     }

//     //runs every render, side effect can be used for auth or fetching data too
//     // useEffect(() => {
//     //     console.log('use effect ran');
//     //     console.log(blogs);
//     // });

//     const [name, setName] = useState('mario');

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(name);
//     }, [name]);


//     return ( 
//         <div className="home">

//             {/* <h2>HomePage</h2> */}
//             {/* <p>{name} is {age} years old </p> */}
//             {/* <button onClick={handleClick}>Click me</button> */}
//             {/* <button onClick={() => {
//                 handleClickAgain('mario')
//             }}>Click me again</button> */}
//             {/* <button onClick={(e) =>  handleClickAgain('mario', e)}>Click me again</button> */}

//             {/* {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{blog.title}</h2>
//                     <p>Written by {blog.author}</p>
//                 </div>
//             ))} */}
//             {/* <BlogList blogs={blogs} title="All Blogs"/>
//             <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
            
//             {/* <BlogList blogs={blogs} title="All Blogs"/>
//             <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')}  title="Mario's Blogs"/> */}

//             <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
//             <button onClick={()=> setName('luigi')}>change name</button>
//             <p>{name}</p>

//         </div>
//      );
// }
 
// export default Home;