import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, removePost, toggleView } from '../store/reducers/postReducer';
import Card from './Card';
import Pagination from './Pagination';
import FeedbackForm from './FeedbackForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, viewToggle } = useSelector((state) => state.posts);

  const [currentPosts, setCurrentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    dispatch(fetchPosts());

    return () => clearTimeout(loadingTimeout);
  }, [dispatch]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [posts, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPosts(posts.slice((pageNumber - 1) * postsPerPage, pageNumber * postsPerPage));
  };

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-xl font-bold">Loading...</div>;
  }

  return (
    <>
      <div className="p-4 flex flex-col lg:flex-row gap-4 bg-gray-100 min-h-screen">

      <div className="flex flex-wrap p-6 w-full lg:w-[30%] max-w-full shadow-lg flex-col items-center mb-4 space-y-6">
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:max-w-lg w-full">
    <img
      src="https://randomuser.me/api/portraits/women/81.jpg"
      alt="Description"
      className="rounded-full border border-gray-100 shadow-sm w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 md:mr-4"
    />
    <div className="p-4 flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-lg font-bold text-gray-800 truncate">Hi Reader,</h3>
        <p className="text-gray-600 text-sm truncate">Here's Your News</p>
      </div>
    </div>
  </div>

  <div className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:max-w-lg w-full text-center mt-4">
    <div className="shadow-lg p-5 w-full bg-white">
      <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
        View Toggle
      </h2>
      <div className="bg-green-200 flex justify-center">
        <button
          onClick={() => dispatch(toggleView())}
          className={`m-2 p-2 rounded-full ${viewToggle ? 'bg-gray-200' : 'bg-gray-400'}`}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          onClick={() => dispatch(toggleView())}
          className={`p-2 m-2 rounded-full ${!viewToggle ? 'bg-gray-200' : 'bg-gray-400'}`}
        >
          <FontAwesomeIcon icon={faTh} />
        </button>
      </div>
    </div>
  </div>

  <div className="relative bg-white rounded-lg shadow-md overflow-hidden md:max-w-lg w-full text-center mt-4 p-4">
    <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl">
      Have A Feedback
    </h2>
    <div>
      <button
        onClick={() => (document.getElementById('feedback-form').style.display = 'block')}
        className="bg-green-500 text-white p-4 rounded"
      >
        We are Listening
      </button>
    </div>
  </div>
</div>


        <div
          className={
            viewToggle
              ? 'w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              : 'w-1/2 m-2'
          }
        >
          {currentPosts.map((post) => (
            <Card
              key={post.id}
              post={post}
              removePost={handleRemovePost}
              viewToggle={viewToggle}
            />
          ))}
        </div>
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        className="mt-4"
      />


      <div
        id="feedback-form"
        className="shadow-md p-[14rem] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden"
      >
        <div className="bg-white p-4 rounded-lg">

          <button
            onClick={() => document.getElementById('feedback-form').style.display = 'none'}
            className="bg-red-500 text-white p-2 rounded-full mt-4"
          >
            Close
          </button>
          <FeedbackForm />
        </div>
      </div>
    </>
  );
};

export default Posts;
