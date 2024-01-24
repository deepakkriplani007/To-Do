"use client";
import Feed from "@components/Feed";
import Nav from "@components/Nav";
import { useState, useEffect } from "react";
const Home = () => {
  // const router = useRouter();
  const handleEdit = () => {
    console.log("asdad");
    // router.push(`/update-task?id=${post._id}`);
  };

  const [toggle, setToggle] = useState(false);

  const handleDelete = () => {};
  return (
    <div>
      <Nav toggle={toggle} setToggle={setToggle} />
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Organize your work,</h1>
        <br className="max-md:hidden" />
        <h2 className="logo_text text-center">
          <span className="blue_gradient">
            One simple todo list for you and your team
          </span>
        </h2>
        <Feed
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          toggle={toggle}
          setToggle={setToggle}
        />
      </section>
    </div>
  );
};

export default Home;
