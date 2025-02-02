// LanguageContext içerisindeki useLanguage fonksiyonunu içe aktarıyoruz.
// Bu fonksiyon, dil çevirisiyle ilgili işlemleri yapmamıza olanak tanır.
import  useLanguage  from "../hooks/useLanguage";

export default function Skills() {
    // useLanguage fonksiyonunu kullanarak translate fonksiyonunu elde ediyoruz.
    // translate, verilen anahtar değerine göre uygun dildeki metni veya veriyi döndürür.
    const { translate } = useLanguage();
    
    // "skills" anahtarını kullanarak skills adlı nesneyi alıyoruz.
    // Bu nesne içerisinde başlık (h1) ve image bilgileri (images) bulunuyor.
    const skills = translate("skills");
    
    // skills nesnesinden images dizisini alıyoruz.
    const images = skills.images;
    
    return (
        <>
            {/* Ana bölüm: Beceriler kısmını temsil eden section */}
            <section className="pb-24 min-h-80 content-center bg-[#FFFFFF] text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
                {/* Dekoratif yuvarlak şekil: Belirli bir konumda yer alan bir border'a sahip daire */}
                <div className="w-32 h-32 border-[16px] border-solid border-[#D9D9D9] rounded-full place-self-end mr-[25vw] -mt-16"></div>
                
                {/* İçerik kapsayıcısı: Padding ile içerik merkezleniyor */}
                <div className="px-[18vw]">
                    {/* Başlık: skills nesnesinden gelen h1 değeri */}
                    <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">{skills.h1}</h1>
                    
                    {/* Resimlerin bulunduğu container: Flexbox kullanılarak resimler eşit aralıklı ve sarmalanabilir şekilde yerleştiriliyor */}
                    <div className="flex flex-row justify-evenly flex-wrap">
                        {
                            // images dizisini map fonksiyonu ile dönüyoruz.
                            // Her image için bir <div> oluşturuluyor.
                            images.map((image, index) => {
                                return (
                                    // Her image ve açıklaması için ayrı bir container.
                                    // "key" prop'u React için liste elemanlarının benzersizliğini sağlamak amacıyla kullanılır.
                                    <div className="flex flex-col size-24 ml-[4vw] mt-10" key={index}>
                                        {/* Resim elemanı: image nesnesinden SRC ve Alt değerleri kullanılarak oluşturuluyor */}
                                        <img src={image.SRC} alt={image.Alt} />
                                        {/* Resme ait açıklama metni */}
                                        <p className="font-medium text-base m-1 leading-9 opacity-65 dark:text-[#D9D9D9] text-[#777777]">
                                            {image.Alt}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                
                {/* Sağ alt kısımda yer alan bir diğer dekoratif element */}
                <div className="w-20 h-12 bg-[#525252] rounded-r-full place-self-start"></div>
            </section>
        </>
    );
}

// Skills bileşenini dışa aktarıyoruz.
