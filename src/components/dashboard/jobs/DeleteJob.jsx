"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

const DeleteJob = ({ job }) => {
  const router = useRouter();

  const deleteJob = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );
    await res.json();
    toast.success(`Job post for ${job.jobTitle} successfully deleted`);

    setTimeout(() => {
      router.push("/dashboard/recruiter/jobs");
    }, 1000);
  };
  return (
    <div>
      <AlertDialog>
        <Button isIconOnly size="sm" variant="light" color="danger">
          <FiTrash2 />
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]  bg-gradient-to-b from-black via-gray-900 to-[#0b1220] text-white border border-zinc-800">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading className="text-white font-bold">
                  Delete job permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p className="text-white">
                  This will permanently delete job of
                  <strong> {job.jobTitle}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary" className="text-black">
                  Cancel
                </Button>
                <Button onClick={deleteJob} slot="close" variant="danger">
                  Delete Job
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteJob;
