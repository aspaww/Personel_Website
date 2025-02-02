import  useLanguage  from "../hooks/useLanguage"; 
// useLanguage adlı özel hook'u içe aktarıyoruz. Bu hook, çeviri işlevselliğini sağlayan bir bağlam (context) kullanır.

function Footer() {
    const { translate } = useLanguage();  
    // useLanguage hook'u aracılığıyla `translate` fonksiyonunu elde ediyoruz.
    // Bu fonksiyon, dili değiştirdiğimizde bile dinamik olarak metinlerin çevrilmesini sağlar.

    const footer = translate("footer");  
    // Çeviri işlevini kullanarak `footer` nesnesini alıyoruz.
    // Bu nesne, farklı diller için çeviri metinlerini içerir.

    return (
        <>
            <footer className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] px-[18vw] py-24 content-center text-center">
            {/* Footer alanını belirtiyoruz. Arka plan rengi açık tema için açık gri, karanlık tema için koyu gri tonunda olacak. */}
            
                <div className="flex flex-row justify-center">
                {/* İçeriği yatay olarak hizalamak için `flex` container kullanıyoruz. */}

                    <div className="flex flex-col justify-center w-96">
                    {/* Footer başlığının bulunduğu sol kısım, dikey olarak ortalanıyor ve genişliği 96px olarak ayarlanıyor. */}

                        <div className="border-b-[15px] rounded-md border-solid md:w-48 w-36 self-end mr-16 -mb-10 border-[#82BBFF] dark:border-[#3968A0]"></div>
                        {/* Bu div, alt kısımda bir çizgi oluşturarak görsel bir vurgu sağlar. Karanlık temada rengi daha koyu olur. */}

                        <h1 className="text-right mr-10 font-medium text-3xl tracking-normal">
                            {footer.h1}
                        </h1>
                        {/* Footer başlığı buraya yerleştiriliyor. Sağ tarafa yaslanmış ve belirlenen boyutta görüntüleniyor. */}
                    </div>

                    <div className="flex flex-col text-left content-center font-medium text-nowrap">
                    {/* Linklerin bulunduğu sağ kısım, dikey olarak hizalanmış ve soldan hizalanmıştır. */}

                        <a href={footer.githubLink} className="text-[#82BBFF]">
                            {footer.githubText}
                        </a>
                        {/* GitHub bağlantısı için mavi renkte bir metin oluşturuluyor. */}

                        <a href={footer.personelBlogLink} className="text-[#0A0A14] dark:text-[#FFFFFF]">
                            {footer.personelBlogText}
                        </a>
                        {/* Kişisel blog linki. Açık temada siyah, karanlık temada beyaz renkte gösteriliyor. */}

                        <a href={footer.linkedInLink} className="text-[#419CCB]">
                            {footer.linkedInText}
                        </a>
                        {/* LinkedIn bağlantısı için mavi tonlu bir renk kullanılıyor. */}

                        <a href={footer.emailLink} className="text-[#EA2678]">
                            {footer.emailText}
                        </a>
                        {/* E-posta bağlantısı, pembe-kırmızı tonunda gösteriliyor. */}
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
// Footer bileşeni dışa aktarılıyor ve başka dosyalarda kullanılabilir hale getiriliyor.