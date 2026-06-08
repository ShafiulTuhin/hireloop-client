"use client";

import { updateProfile } from "@/lib/actions/profile";
import { uploadImageToImageBB } from "@/lib/core/server";
import Avatar from "@/assets/avatar.png";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
  Form,
  Fieldset,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

const EditProfile = ({ profile }) => {
  const [image, setImage] = useState(profile?.image || "");
  const [uploading, setUploading] = useState(false);

  const {
    _id,
    name,
    email,
    phone,
    gender,
    education,
    experience,
    facebook,
    github,
    linkedin,
    portfolio,
    resume,
    salary,
    skills,
  } = profile;

  const router = useRouter();

  // IMAGE UPLOAD
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);

      const imageUrl = await uploadImageToImageBB(file);
      setImage(imageUrl);

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setUploading(false);
    }
  };

  // SUBMIT (UNCHANGED LOGIC)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const currentProfile = Object.fromEntries(formData.entries());

      const updatedProfile = {
        ...currentProfile,
        image: image || profile?.image || "",
      };

      const result = await updateProfile(_id, updatedProfile);

      if (result.acknowledged) {
        toast.success("Your profile has been updated");
        router.push("/dashboard/profile");
      } else {
        toast.info("No changes were made");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <Modal>
      <Button className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-6 py-2">
        Edit Profile
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-3xl max-h-[90vh] flex flex-col bg-gradient-to-b from-[#1B1B1B] via-gray-900 to-[#0b1220] text-white rounded-xl">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6 overflow-y-auto flex-1">
              {/* IMAGE SECTION */}
              <div className="flex flex-col items-center gap-4 mb-8">
                <Image
                  src={image || Avatar}
                  alt="profile"
                  width={112}
                  height={112}
                  className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
                />

                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />

                  <span className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm">
                    {uploading ? "Uploading..." : "Upload Photo"}
                  </span>
                </label>
              </div>

              <Surface className="bg-transparent">
                <Form
                  id="edit-job-form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <Fieldset className="space-y-8 w-full">
                    <legend className="text-lg font-medium text-zinc-300 border-b border-zinc-800 pb-3 mb-4">
                      Edit Profile Information
                    </legend>

                    {/* PERSONAL INFO */}
                    <div className="space-y-4">
                      <h3 className="text-sm text-indigo-400 uppercase tracking-wider">
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="name" defaultValue={name}>
                          <Label>Name</Label>
                          <Input name="name" />
                        </TextField>

                        <TextField name="email" defaultValue={email}>
                          <Label>Email</Label>
                          <Input name="email" />
                        </TextField>

                        <TextField name="phone" defaultValue={phone}>
                          <Label>Phone</Label>
                          <Input name="phone" />
                        </TextField>

                        <Select name="gender" defaultValue={gender || ""}>
                          <Label>Gender</Label>
                          <Select.Trigger>
                            <Select.Value />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="male">Male</ListBox.Item>
                              <ListBox.Item id="female">Female</ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>
                    </div>

                    {/* PROFESSIONAL INFO */}
                    <div className="space-y-4">
                      <h3 className="text-sm text-indigo-400 uppercase tracking-wider">
                        Professional Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="education" defaultValue={education}>
                          <Label>Education</Label>
                          <Input name="education" />
                        </TextField>

                        <TextField name="experience" defaultValue={experience}>
                          <Label>Experience</Label>
                          <Input name="experience" type="number" />
                        </TextField>

                        <TextField name="salary" defaultValue={salary}>
                          <Label>Salary</Label>
                          <Input name="salary" type="number" />
                        </TextField>

                        <TextField name="skills" defaultValue={skills}>
                          <Label>Skills</Label>
                          <Input name="skills" />
                        </TextField>
                      </div>
                    </div>

                    {/* LINKS */}
                    <div className="space-y-4">
                      <h3 className="text-sm text-indigo-400 uppercase tracking-wider">
                        Social Links
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField name="github" defaultValue={github}>
                          <Label>GitHub</Label>
                          <Input name="github" />
                        </TextField>

                        <TextField name="linkedin" defaultValue={linkedin}>
                          <Label>LinkedIn</Label>
                          <Input name="linkedin" />
                        </TextField>

                        <TextField name="portfolio" defaultValue={portfolio}>
                          <Label>Portfolio</Label>
                          <Input name="portfolio" />
                        </TextField>

                        <TextField name="facebook" defaultValue={facebook}>
                          <Label>Facebook</Label>
                          <Input name="facebook" />
                        </TextField>

                        <TextField
                          name="resume"
                          defaultValue={resume}
                          className="md:col-span-2"
                        >
                          <Label>Resume URL</Label>
                          <Input name="resume" />
                        </TextField>
                      </div>
                    </div>
                  </Fieldset>
                </Form>
              </Surface>
            </Modal.Body>

            {/* FOOTER */}
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
                className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
              >
                Update Profile
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditProfile;
