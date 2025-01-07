import { DECLARTION_LIST } from "../../constants/common";

const Documents = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-100">
      <div className="w-1/2 flex flex-col">
        <label className={`text-primary-100`}>PAN Card</label>
        <p className="text-sm my-4 font-normal">
          Click a picture of your PAN Card and upload
        </p>
      </div>
      <div className="w-1/2 min-w-[100px] m-8 h-[70px] border-2 border-dashed border-gray-100 p-2 rounded ">
        <div className="w-full h-full bg-gray-100 rounded relative">
          <span className="w-4 h-4 text-white flex justify-center items-center content-center cursor-pointer absolute right-0 top-0 bg-green-100 rounded-full transform translate-x-1/2 -translate-y-1/2">
            x
          </span>
        </div>
      </div>
    </div>
  );
};

const UploadDocuments = () => {
  return (
    <div>
      <Documents />
    </div>
  );
};

export default UploadDocuments;
