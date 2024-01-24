"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PromptCard from "./PromptCard";
const Feed = ({ toggle, setToggle }) => {
  // console.log(toggle);
  const { data: session } = useSession();
  console.log(session?.user.id);
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`api/task/${session?.user.id}`, {
        method: "GET",
      });
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [session, toggle]);
  const handleDelete = async (id) => {
    const hasconf = confirm("are you sure you want to delete");
    if (hasconf) {
      try {
        await fetch(`/api/task/${id.toString()}`, {
          method: "DELETE",
        });
        const filteredPost = post.filter((item) => item._id !== id);
        setPost(filteredPost);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return session?.user ? (
    <div>
      <div className="mt-9 flex flex-col gap-2  ">
        {post.map((post) => (
          <PromptCard
            handleDelete={handleDelete}
            toggle={toggle}
            setToggle={setToggle}
            key={post._id}
            data={post}
          />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Feed;
