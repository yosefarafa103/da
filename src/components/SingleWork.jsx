const SingleWork = ({ children, workTitle }) => {
  return (
    <section className="flex flex-col">
      <section className="h-[35vh]">{children}</section>
      <section className="h-[50vh] font-en max-sm:text-center flex justify-end mt-[20px] tracking-[4px] font-bold text-[6.5vw]">
        {/* {workTitle
          .split("")
          .reverse()
          .map((e) => (
            <div key={e + "*"} className="overflow-hidden  !h-fit">
              <span className="inline-block s">{e}</span>
            </div>
          ))} */}
        {workTitle}
      </section>
    </section>
  );
};

export default SingleWork;
