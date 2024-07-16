function DaposWorks({ children }) {
  return (
    <>
      <section className="mt-[120px] min-h-[80vh] py-[3vw] px-[2.2vw] bg-white font-[helveticaNeue]">
        <h3 className="text-[4vw] font-[900]">
          بعض من اعـمال دبــــــــــــــــــــــــــــــوس
        </h3>
        <section className="mt-[100px]">{children}</section>
      </section>
    </>
  );
}

export default DaposWorks;
