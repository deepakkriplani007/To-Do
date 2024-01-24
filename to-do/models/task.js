import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  task: {
    type: String,
    required: [true, "prompt is required"],
  },
  tag: {
    type: Boolean,
    required: [true, "tag is required"],
  },
});
const Task = models.Task || model("Task", TaskSchema);
export default Task;
