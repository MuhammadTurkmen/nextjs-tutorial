"use client";

import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Deletebtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "please waite..." : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <Deletebtn />
    </form>
  );
};

export default DeleteForm;
