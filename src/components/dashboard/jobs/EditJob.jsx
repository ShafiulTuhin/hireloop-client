"use client";

import { Globe } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  Switch,
  TextArea,
  TextField,
  Select,
  Form,
  Fieldset,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

const EditJob = ({ job }) => {
  const {
    _id,
    jobTitle,
    jobCategory,
    jobType,
    minSalary,
    maxSalary,
    currency,
    deadline,
    responsibilities,
    requirements,
    benefits,
    location,
  } = job;

  const router = useRouter();
  const [isRemote, setIsRemote] = useState(location === "Remote");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedJob = Object.fromEntries(formData.entries());

    if (isRemote) {
      updatedJob.location = "Remote";
    }

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });

    router.push("/dashboard/recruiter/jobs");
  };

  return (
    <Modal>
      <Button isIconOnly size="sm" variant="light">
        <FiEdit />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl max-h-[90vh] flex flex-col bg-gradient-to-b from-[#1B1B1B] via-gray-900 to-[#0b1220] text-white rounded-xl">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Heading>Edit Job</Modal.Heading>
            </Modal.Header>

            {/* BODY (SCROLLABLE) */}
            <Modal.Body className="lg:p-6 overflow-y-auto flex-1">
              <Surface className="bg-transparent">
                <Form
                  id="edit-job-form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* JOB INFO */}
                  <Fieldset className="space-y-6 w-full">
                    <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-900 pb-2 mb-2">
                      Edit Job Information
                    </legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField name="jobTitle" defaultValue={jobTitle}>
                        <Label className="text-white">Job Title</Label>
                        <Input name="jobTitle" className="bg-gray-500" />
                      </TextField>

                      <Select
                        name="jobCategory"
                        defaultValue={jobCategory || ""}
                      >
                        <Label className="text-white">Job Category</Label>
                        <Select.Trigger className="bg-gray-500">
                          <Select.Value />
                          <Select.Indicator className="text-gray-900" />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="technology">
                              Technology
                            </ListBox.Item>
                            <ListBox.Item id="design">Design</ListBox.Item>
                            <ListBox.Item id="marketing">
                              Marketing
                            </ListBox.Item>
                            <ListBox.Item id="sales">Sales</ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select name="jobType" defaultValue={jobType || ""}>
                        <Label className="text-white">Job Type</Label>
                        <Select.Trigger className="bg-gray-500">
                          <Select.Value />
                          <Select.Indicator className="text-gray-900" />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="full-time">
                              Full-time
                            </ListBox.Item>
                            <ListBox.Item id="part-time">
                              Part-time
                            </ListBox.Item>
                            <ListBox.Item id="contract">Contract</ListBox.Item>
                            <ListBox.Item id="internship">
                              Internship
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Salary Range */}
                        <div className="md:col-span-2 space-y-2">
                          <Label className="text-white">Salary Range</Label>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                              name="minSalary"
                              type="number"
                              defaultValue={minSalary}
                              className="w-full bg-gray-500"
                            />
                            <Input
                              name="maxSalary"
                              type="number"
                              defaultValue={maxSalary}
                              className="w-full bg-gray-500"
                            />
                          </div>
                        </div>

                        {/* Currency */}
                        <div className="space-y-2 w-full">
                          <Label className="text-white">Currency</Label>

                          <Select name="currency" defaultValue={currency || ""}>
                            <Select.Trigger className="w-full bg-gray-500">
                              <Select.Value />
                              <Select.Indicator className="text-gray-900" />
                            </Select.Trigger>

                            <Select.Popover>
                              <ListBox>
                                <ListBox.Item id="USD">USD ($)</ListBox.Item>
                                <ListBox.Item id="EUR">EUR (€)</ListBox.Item>
                                <ListBox.Item id="GBP">GBP (£)</ListBox.Item>
                              </ListBox>
                            </Select.Popover>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <Label className="text-white">Location</Label>

                          <Switch
                            isSelected={isRemote}
                            onChange={setIsRemote}
                            size="sm"
                          >
                            <Switch.Control>
                              <Switch.Thumb />
                            </Switch.Control>
                            <Switch.Content className="text-white">
                              Remote
                            </Switch.Content>
                          </Switch>
                        </div>

                        <TextField name="location" defaultValue={location}>
                          <div className="relative flex items-center">
                            <Globe className="absolute left-3 text-zinc-600" />

                            <Input
                              name="location"
                              disabled={isRemote}
                              placeholder={isRemote ? "Remote" : "Location"}
                              className="pl-10 bg-gray-500"
                            />
                          </div>
                        </TextField>
                      </div>

                      <TextField
                        name="deadline"
                        defaultValue={deadline ? deadline.split("T")[0] : ""}
                      >
                        <Label className="text-white">Deadline</Label>
                        <Input
                          name="deadline"
                          type="date"
                          className="bg-gray-500"
                        />
                      </TextField>
                    </div>
                  </Fieldset>

                  {/* DETAILS */}
                  <Fieldset className="space-y-6 w-full">
                    <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-900 pb-2 mb-2">
                      Job Details
                    </legend>

                    <TextField
                      name="responsibilities"
                      defaultValue={responsibilities}
                    >
                      <Label className="text-white">Responsibilities</Label>
                      <TextArea
                        name="responsibilities"
                        rows={4}
                        className="bg-gray-500"
                      />
                    </TextField>

                    <TextField name="requirements" defaultValue={requirements}>
                      <Label className="text-white">Requirements</Label>
                      <TextArea
                        name="requirements"
                        rows={4}
                        className="bg-gray-500"
                      />
                    </TextField>

                    <TextField name="benefits" defaultValue="benefits">
                      <Label className="text-white">Benefits</Label>
                      <TextArea
                        name="benefits"
                        rows={3}
                        className="bg-gray-500"
                      />
                    </TextField>
                  </Fieldset>
                </Form>
              </Surface>
            </Modal.Body>

            {/* FIXED FOOTER (THIS FIXES YOUR BUTTON ISSUE) */}
            <Modal.Footer className="flex justify-end gap-3 border-t border-zinc-800 pt-4 bg-gradient-to-r from-black via-gray-900 to-[#0b1220]">
              <Button
                type="button"
                variant="outline"
                slot="close"
                className="text-white"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-job-form"
                className="bg-white text-black  bg-gradient-to-r
                from-violet-600
                to-indigo-500"
                slot="close"
              >
                Update Job
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditJob;
