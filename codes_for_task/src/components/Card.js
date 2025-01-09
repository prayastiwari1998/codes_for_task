import React from "react";

const Card = ({ post, removePost, viewToggle }) => {
  return viewToggle ? (

    <div className="relative bg-white max-w-xs rounded-lg shadow-md overflow-hidden">
      
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        aria-label="Close"
        onClick={() => removePost(post.id)}
      >
        &times;
      </button>
      <div className="p-4">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p className="text-gray-600">{post.body}</p>
        <p className="text-gray-400 text-sm">Mon, 09 Jan 2025</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1723384747376-90f201a3bd55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Description"
        className="w-full h-48 object-cover"
      />
    </div>
  ) : (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row md:max-w-1/2 w-4/5 mt-3">

      <img
        src="https://images.unsplash.com/photo-1723384747376-90f201a3bd55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Description"
        className="w-full h-40 md:w-1/3 md:h-auto object-cover"
      />


      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-gray-800 truncate">{post.title}</h3>
          <p className="text-gray-600 text-sm truncate">{post.body}</p>
        </div>
        <p className="text-gray-400 text-xs mt-2">Mon, 09 Jan 2025</p>
      </div>
      <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
        aria-label="Remove Post"
        onClick={() => removePost(post.id)}
      >
        &times;
      </button>
    </div>



  );
};

export default Card;
