"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Form from "./Form";
const PromptCard = ({ data, key, toggle, handleDelete, setToggle }) => {
  console.log(data);
  const router = useRouter();
  const [post, setPost] = useState({
    task: data.task,
    tag: data.tag,
  });

  const [create, setCreate] = useState("hidden");

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/task/${data._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          task: post.task,
          tag: post.tag,
        }),
      });
      // setToggle(!toggle);
      if (response.ok) {
        // setPost("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCreate("hidden");
    }
  };
  const handleEditTag = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/task/${data._id}`, {
        method: "PATCH",
        body: JSON.stringify({
          task: post.task,
          tag: true,
        }),
      });
      // setToggle(!toggle);
      if (response.ok) {
        // setPost("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCreate("hidden");
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // console.log(session.user.id);
  return (
    <div className="bg-white flex place-content-between content-center p-4  pl-6 shadow rounded-lg">
      <div className="flex items-center pr-16">
        <input
          type="checkbox"
          className="form-checkbox text-blue-600 h-5 w-5 mr-2"
          id={key}
          checked={post.tag}
          onChange={handleEditTag}
        />
        <label for={key} className="text-gray-800 font-medium">
          {post.task}
        </label>
      </div>
      <div className="flex justify-end gap-4">
        <button
          className="text-2xl p-2 cursor-pointer hover:bg-blue-500 rounded-full"
          onClick={() => {
            if (create === "hidden") setCreate("");
            else setCreate("hidden");
            console.log(create);
          }}
        >
          <AiOutlineEdit />
        </button>
        <button
          onClick={() => {
            handleDelete(data._id);
          }}
          className="text-2xl p-2  hover:bg-blue-500 rounded-full "
        >
          <MdDelete />
        </button>
        <button className="text-2xl p-2  hover:bg-blue-500 rounded-full ">
          <AiOutlineShareAlt />
        </button>
      </div>
      <Form
        post={post}
        setPost={setPost}
        handleSubmit={handleEdit}
        create={create}
        setCreate={setCreate}
        toggle={toggle}
        setToggle={setToggle}
      />
    </div>
  );
};

export default PromptCard;
