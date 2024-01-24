import { connectToDB } from "@utils/database";
import task from "@models/task";
export const GET = async (request) => {
  try {
    await connectToDB();
    const tasks = await task.find({}).populate("creator");
    return new Response(JSON.stringify(tasks), {
      status: 200,
    });
  } catch (err) {
    return new Response("Failed to fetch all tasks", { status: 500 });
  }
};
