"use client";

import React, { useState } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Select,
  ListBox,
  Button,
  toast,
  Modal,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { createCompany } from "@/lib/actions/company";

export default function CreateCompanyProfile({ user }) {
  const [errors, setErrors] = useState({});
  const [logoFile, setLogoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const router = useRouter();
  // Upload image to ImageBB
  const uploadToImageBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();
    return data?.data?.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newErrors = {};
    if (!data.companyname) newErrors.companyname = "Company name is required";
    if (!data.industry) newErrors.industry = "Industry is required";
    if (!data.website) newErrors.website = "Website URL is required";
    if (!data.location) newErrors.location = "Location is required";
    if (!data.employeeRange)
      newErrors.employeeRange = "Employee range is required";
    if (!data.description) newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    setUploading(true);

    let logoUrl = "";

    if (logoFile) {
      logoUrl = await uploadToImageBB(logoFile);
    }

    setUploading(false);

    const payload = {
      companyname: data?.companyname,
      recruiterId: user?.id,
      industry: data.industry,
      website: data.website,
      location: data.location,
      employeeRange: data.employeeRange || "1-10 employees",
      description: data.description,
      logo: logoUrl,
      status: "pending",
    };

    // console.log("Company Payload:", payload);

    const res = await createCompany(payload);

    if (res.insertedId) {
      toast.success("Company Profile created successfully!");
      router.push("/dashboard/recruiter/company");
    }
  };

  const inputClass =
    "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg h-12 px-3 text-sm outline-none transition-all";

  const textAreaClass =
    "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 rounded-lg p-3 text-sm outline-none transition-all";
  const triggerClasses =
    "w-full flex items-center justify-between bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] h-12 rounded-lg px-3 text-white transition-all text-sm outline-none data-[focused=true]:border-zinc-600 data-[invalid=true]:border-danger";
  const popoverClasses =
    "bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg shadow-xl p-1";
  const listItemClasses =
    "flex items-center justify-between p-2 rounded-md hover:bg-zinc-800 cursor-pointer text-sm text-zinc-200 outline-none data-[focused=true]:bg-zinc-800";
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0b1220] text-white py-12 px-4">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-[#0b1220] via-gray-900 to-black border border-zinc-900 rounded-xl p-8 shadow-2xl">
        {/* Header */}
        <div className="border-b border-zinc-800 pb-6 mb-8">
          <h1 className="text-2xl font-semibold">Register New Company</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Enter your business details to start hiring on HireLoop.
          </p>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="space-y-8"
          validationErrors={errors}
          validationBehavior="aria"
        >
          <Fieldset className="space-y-6">
            {/* Company Name */}
            <TextField name="companyname">
              <Label className="text-zinc-400 text-sm">Company Name</Label>
              <Input placeholder="e.g. Acme Corp" className={inputClass} />
              {errors.companyname && (
                <FieldError className="text-danger text-xs">
                  {errors.companyname}
                </FieldError>
              )}
            </TextField>

            {/* Industry + Website */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField name="industry">
                <Label className="text-zinc-400 text-sm">
                  Industry / Category
                </Label>
                <Input placeholder="Technology" className={inputClass} />
                {errors.industry && (
                  <FieldError className="text-danger text-xs">
                    {errors.industry}
                  </FieldError>
                )}
              </TextField>

              <TextField name="website">
                <Label className="text-zinc-400 text-sm">Website URL</Label>
                <Input
                  placeholder="https://company.com"
                  className={inputClass}
                />
              </TextField>
            </div>

            {/* Location + Employee Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField name="location">
                <Label className="text-zinc-400 text-sm">Location</Label>
                <Input placeholder="City, Country" className={inputClass} />
                {errors.location && (
                  <FieldError className="text-danger text-xs">
                    {errors.location}
                  </FieldError>
                )}
              </TextField>

              <TextField
                name="employeeRange"
                isInvalid={!!errors.employeeRange}
              >
                <Label className="text-zinc-400 text-sm">
                  Employee Count Range
                </Label>

                <Select name="employeeRange" className="w-full">
                  <Select.Trigger className={triggerClasses}>
                    <Select.Value placeholder="Select employee range" />
                    <Select.Indicator />
                  </Select.Trigger>

                  <Select.Popover className={popoverClasses}>
                    <ListBox className="outline-none">
                      <ListBox.Item
                        id="1-10"
                        textValue="1-10 employees"
                        className={listItemClasses}
                      >
                        1-10 employees
                      </ListBox.Item>

                      <ListBox.Item
                        id="11-20"
                        textValue="11-20 employees"
                        className={listItemClasses}
                      >
                        11-20 employees
                      </ListBox.Item>

                      <ListBox.Item
                        id="21-30"
                        textValue="21-30 employees"
                        className={listItemClasses}
                      >
                        21-30 employees
                      </ListBox.Item>

                      <ListBox.Item
                        id="31-50"
                        textValue="31-50 employees"
                        className={listItemClasses}
                      >
                        31-50 employees
                      </ListBox.Item>

                      <ListBox.Item
                        id="51-100"
                        textValue="51-100 employees"
                        className={listItemClasses}
                      >
                        51-100 employees
                      </ListBox.Item>

                      <ListBox.Item
                        id="100+"
                        textValue="100+ employees"
                        className={listItemClasses}
                      >
                        100+ employees
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>

                {errors.employeeRange && (
                  <FieldError className="text-danger text-xs">
                    {errors.employeeRange}
                  </FieldError>
                )}
              </TextField>
            </div>

            {/* Logo Upload */}
            {/* <div>
              <Label className="text-zinc-400 text-sm">Company Logo</Label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;

                  setLogoFile(file);
                  setLogoPreview(URL.createObjectURL(file));
                }}
                className="w-full mt-2 text-sm text-zinc-300"
              />
              {logoPreview && (
                <div className="mt-3">
                  <p className="text-xs text-zinc-400 mb-2">Preview:</p>

                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-24 h-24 object-cover rounded-lg border border-zinc-800"
                  />
                </div>
              )}

              <p className="text-xs text-zinc-500 mt-1">
                PNG, JPG up to 5MB (uploaded to ImageBB)
              </p>
            </div> */}
            <div>
              <Label className="text-zinc-400 text-sm">Company Logo</Label>

              <div className="mt-2 relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setUploadingLogo(true);

                    setLogoFile(file);
                    setLogoPreview(URL.createObjectURL(file));

                    setTimeout(() => {
                      setUploadingLogo(false);
                    }, 400);
                  }}
                  className="w-full text-sm text-zinc-300 border border-zinc-800 rounded-lg p-2 bg-[#1c1c1e]"
                />

                {/* Upload signal */}
                {uploadingLogo && (
                  <div className="absolute right-3 top-2 text-xs text-yellow-400 animate-pulse">
                    Processing...
                  </div>
                )}
              </div>

              {/* Preview */}
              {logoPreview && (
                <div className="mt-3">
                  <p className="text-xs text-zinc-400 mb-2">Preview:</p>

                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="w-24 h-24 object-cover rounded-lg border border-zinc-800"
                  />

                  <p className="text-xs text-emerald-500 mt-2 flex items-center gap-1">
                    ✔ Ready to upload
                  </p>
                </div>
              )}

              <p className="text-xs text-zinc-500 mt-2">
                PNG, JPG up to 5MB (uploaded to ImageBB)
              </p>
            </div>

            {/* Description */}
            <TextField name="description">
              <Label className="text-zinc-400 text-sm">Brief Description</Label>
              <TextArea
                rows={4}
                placeholder="Tell us about your company's mission and culture..."
                className={textAreaClass}
              />
              {errors.description && (
                <FieldError className="text-danger text-xs">
                  {errors.description}
                </FieldError>
              )}
            </TextField>
          </Fieldset>

          {/* Actions */}
          <Modal.Footer className="flex justify-end gap-3 border-t border-zinc-800 pt-4">
            <Button
              type="button"
              variant="outline"
              slot="close"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 px-6 h-11"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-gradient-to-r from-violet-600 to-indigo-500 text-black font-semibold px-6 h-11"
              isDisabled={uploading}
            >
              {uploading ? "Uploading..." : "Register Company"}
            </Button>
          </Modal.Footer>
        </Form>
      </div>
    </div>
  );
}
