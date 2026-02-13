"use client";
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-[100vh]">
      <div className="text-2xl">Opsss nimadur hato kettdi</div>
      <div className="text-3xl">500</div>
      <div className="text-2xl">error habar:{error.message}</div>
    </div>
  );
};

export default Error;
