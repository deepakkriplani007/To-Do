import { connectToDB } from "@utils/database";
import Task from "@models/task";
// get
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const tasks = await Task.find({ creator: params.id }).populate("creator");
    if (!tasks) return new Response("task not found", { status: 404 });

    return new Response(JSON.stringify(tasks), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to fetch all tasks", { status: 500 });
  }
};

// patch
export const PATCH = async (request, { params }) => {
  const { task, tag } = await request.json();
  // console.log(task + " patch");
  try {
    // console.log("notworking");
    await connectToDB();
    // console.log(params.id);
    const existingtask = await Task.findById(params.id);
    console.log("notworking21");
    if (!existingtask) return new Response("task not found", { status: 404 });
    existingtask.task = task;
    // console.log("notworkingasfag22");
    console.log(tag, task);
    existingtask.tag = tag;
    console.log("notworkingasfag23");
    // console.log(existingtask);
    await existingtask.save();
    console.log("notworkingasfag24");
    return new Response(JSON.stringify(existingtask), { status: 200 });
  } catch (error) {
    return new Response("failed to update task", { status: 500 });
  }
};
// delete
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();
    await Task.findByIdAndRemove(params.id);
    return new Response("task deleted", { status: 200 }); //
  } catch (error) {
    return new Response("failed to delete task", { status: 500 });
  }
};
