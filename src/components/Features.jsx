const Features = () => {
  return (
    <section className="min-h-[90vh] bg-white py-[30px] px-[2.3vw]">
      <section className="flex items-center whitespace-nowrap font-[helveticaNeue] gap-[10px]">
        <h2 className="max-[576px]:text-[30px] text-[30px] md:text-[44px] font-[900] ">
          مَا يُميّز
        </h2>
        <h4 className="md:text-[44px] text-[30px] font-[900]">
          دبــــــــــــــــــــــــــــــــــــــــــــــــــــوس
        </h4>
      </section>
      <section className="flex items-center">
        <section className="md:w-[70%] max-sm:px-[15px] mt-[100px]">
          <section className="grid-cols-4 mt-[50px] md:grid-cols-2 max-sm:grid-cols-1 gap-[30px] grid ">
            {[
              ` الاحترافية: نلتزم بأعلى معايير الاحترافية في كل جوانب عملنا. من التواصل مع العملاء إلى تنفيذ الحملات التسويقية.`,
              `الإبداع: نحن نؤمن بأن الإبداع هو مفتاح النجاح في التسويق لتقديم حلول مبتكرة ومختلفة تلبي لذلك؛ نسعى دائمًا احتياجات عملائنا. `,
              `التعاون: نحن نؤمن بأهمية التعاون والشراكة مع عملائنا، نعمل جنبًا إلى جنب معهم لتحقيق أهدافهم ونجاحهم.
نعمل جنًبا إىل جنبمعهم لتحقيق أهدافهم ونجاحهم`,
              `الابتكار: 
نحن نشجع على التفكير الإبداعي والابتكار في كل ما نقوم به لنضمن تقديم حلول تسويقية مبتكرة وفعالة. `,
            ].map((element, index) => (
              <section className="flex flex-col gap-[10px]">
                <h3 className="font-[900] text-[35px] text-[#ADADAD]">
                  0{index + 1}
                </h3>
                <div className="font-[900] font-[helveticaNeue] text-[18px]">
                  {" "}
                  {element}
                </div>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Features;
