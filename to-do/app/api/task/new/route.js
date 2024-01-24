import { connectToDB } from "@utils/database";
import Task from "@models/task";
export const POST = async (req) => {
  const { userId, task, tag } = await req.json();
  try {
    await connectToDB();
    const newTask = new Task({
      creator: userId,
      task,
      tag,
    });
    await newTask.save();
    return new Response(JSON.stringify(newTask), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new task", { status: 500 });
  }
};
