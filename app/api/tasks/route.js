import db from "@/utils/db";

export const GET = async (requst) => {
  const tasks = await db.task.findMany();
  return Response.json({ data: tasks });
};

export const POST = async (requst) => {
  const data = await requst.json();
  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ data: task });
};
