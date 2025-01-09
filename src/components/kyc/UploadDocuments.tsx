import { useRef, useState } from "react";
import Image from "next/image";

interface UploadDocumentsProps {
  handleInputs: (e: { target: { name: string; value: string } }) => void;
}

interface DocumentsProps {
  title: string;
  description: string;
  imageRef: React.RefObject<HTMLInputElement>;
  imageUrl: string;
  altText: string;
}
interface ImagePlaceholderProps {
  imageUrl: string;
  altText: string;
  containerStyle?: string;
}

export const ImagePlaceholder = ({
  imageUrl,
  altText,
  containerStyle = "",
}: ImagePlaceholderProps) => {
  return (
    <div
      className={`w-1/2 h-[70px] max-h-[70px] border-2 border-dashed border-gray-100 p-2 rounded cursor-pointer ${containerStyle}`}
    >
      {imageUrl ? (
        <Image src={imageUrl} width="100" height="100" alt={altText} />
      ) : (
        <div className="w-full h-full bg-gray-100 rounded relative">
          <div className="w-4 h-4 text-white flex justify-center items-center cursor-pointer absolute right-0 top-0 bg-green-100 rounded-full translate-x-1/2 -translate-y-1/2">
            <span className="text-xs">x</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Documents = ({
  title,
  description,
  imageRef,
  imageUrl,
  altText,
}: DocumentsProps) => {
  return (
    <div
      className="flex justify-between items-center border-b-2 border-gray-100"
      onClick={() => imageRef.current?.click()}
    >
      <div className="w-1/2 flex flex-col">
        <label className={`text-primary-100`}>{title}</label>
        <p className="text-sm my-4 font-normal">{description}</p>
      </div>
      <ImagePlaceholder
        imageUrl={imageUrl}
        altText={altText}
        containerStyle="min-w-[100px] m-8"
      />
    </div>
  );
};

const UploadDocuments = ({ handleInputs }: UploadDocumentsProps) => {
  const panImageRef = useRef<HTMLInputElement>(null);
  const signImageRef = useRef<HTMLInputElement>(null);
  const [panImage, setPanImages] = useState("");
  const [signImage, setSignImages] = useState("");

  const handlePanImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPanImages(url);
      handleInputs({
        target: {
          name: "panImage",
          value: url,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };
  const handleSignImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length === 1) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setSignImages(url);
      handleInputs({
        target: {
          name: "signImage",
          value: url,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div>
      <Documents
        imageRef={panImageRef}
        imageUrl={panImage}
        title="PAN Card"
        description="Click a picture of your PAN Card and upload"
        altText="PAN Image"
      />
      <Documents
        imageRef={signImageRef}
        imageUrl={signImage}
        title="Signature"
        description="Sign on a black white paper (same as in Bank records). Click a picture and upload"
        altText="Sign Image"
      />

      <div>
        <input
          type="file"
          className="hidden"
          accept=".jpg, .jpeg, .png"
          ref={panImageRef}
          onChange={handlePanImage}
        />
        <input
          type="file"
          className="hidden"
          accept=".jpg, .jpeg, .png"
          ref={signImageRef}
          onChange={handleSignImage}
        />
      </div>
    </div>
  );
};

export default UploadDocuments;
