import axios from "axios";
import { CloudUpload, Loader } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

export default function UploadImage({
  id,
  onChange,
}: {
  id: string;
  onChange: (value: string) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const files = event.currentTarget.files;
    const body = new FormData();
    if (!files) return;
    body.append("file", files[0]);
    const res = await axios.post("/api/upload-image", body);
    onChange(res.data.secure_url);
    setImage(res.data.secure_url);
    setLoading(false);
  };
  return (
    <div className="relative flex h-36 items-center justify-center rounded-sm border overflow-hidden">
      {image && (
        <Image
          className="h-full w-full object-cover opacity-30"
          width={500}
          height={500}
          alt=""
          src={image}
        />
      )}

      <label
        htmlFor={id}
        className={
          "absolute flex w-full cursor-pointer flex-col items-center justify-center gap-3"
        }
      >
        {loading ? <Loader className="animate-spin" /> : <CloudUpload />}
        <p>Select Image</p>
        <input
          disabled={loading}
          onChange={handleChange}
          type="file"
          id={id}
          className="hidden"
        />
      </label>
    </div>
  );
}
