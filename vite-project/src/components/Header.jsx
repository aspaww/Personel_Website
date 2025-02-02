import  useLanguage  from "../hooks/useLanguage";
import LanguageChanger from "./LanguageChanger";
import ModeComponent from "./ModeComponent";
// useLanguage bağlamını ve tema/dil değiştirme bileşenlerini içe aktarıyoruz.

export default function Header() {
    const { translate } = useLanguage();  
    // useLanguage hook'unu kullanarak `translate` fonksiyonunu alıyoruz.
    
    const hero = translate("hero");  
    // "hero" anahtar kelimesine bağlı çeviri metinlerini alıyoruz.

    return (
        <>
            <header className="font-Inter text-left pt-24 duration-500 bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] ">
            {/* Arka plan rengi açık tema için açık gri, karanlık tema için koyu gri olacak. 
                Yazı tipi Inter, sol hizalı, geçiş animasyonu 500ms sürecek. */}
            
                <div className="px-[18vw]">
                {/* Sayfanın yatay olarak ortalanması için padding uygulanıyor. */}

                    <div className="w-32 h-32 bg-[#D9D9D9] rounded-full -mt-36 ml-24"></div>
                    {/* Üst sol tarafta yuvarlak bir gri şekil ekleniyor (dekoratif amaçlı). */}

                    <div className='flex flex-row justify-self-end mb-10'>
                        <ModeComponent />
                        {/* Karanlık mod değiştirici bileşeni. */}
                        
                        <p className='font-semibold mx-2 self-center '>| </p>
                        {/* Dik çizgi (ayırıcı öğe). */}
                        
                        <LanguageChanger />
                        {/* Dil değiştirici bileşeni. */}
                    </div>

                    <div className="flex flex-col flex-wrap">
                        {/* Ana içerik bölümü, dikey olarak hizalanan bir flex container. */}

                        <div className="flex flex-row-reverse flex-wrap lg:flex-nowrap justify-between lg:justify-self-start">
                        {/* Büyük ekranlarda (lg) yan yana, küçük ekranlarda alt alta gelecek bir düzen oluşturuyoruz. */}

                            <div className="bg-[#E92577] pt-4 pl-4 rounded-2xl max-w-64 min-w-56 min-h-44 max-h-64 flex m-10">
                            {/* Profil resmi için kırmızı arka planlı bir kutu. */}
                            
                                <img src={hero.profileImg} className="rounded-2xl ms-1 -mb-2"></img>
                                {/* Profil resmi, köşeleri yuvarlatılmış olarak ekleniyor. */}
                            </div>
                            
                            <div className="w-45">
                                <h1 className="font-normal text-3xl leading-9 tracking-wide">{hero.greeting}</h1>
                                {/* Kullanıcıya hitap eden başlık yazısı. */}

                                <div className="border-b-[24px] -ml-4 rounded-lg border-solid w-48 mt-16 border-[#E92577]"></div>
                                {/* Kırmızı bir alt çizgi (vurgulama için). */}

                                <p className="text-5xl -mt-16 font-medium leading-snug tracking-normal">
                                    {hero.profileName}{hero.intro}
                                </p>
                                {/* Kullanıcının adı ve tanıtım yazısı. */}
                            </div>
                        </div>

                        <div className="flex flex-row mt-10">
                        {/* Sosyal medya ikonlarını içeren bir flex container. */}

                            <a href={hero.linkedInLink}>
                                <img src={hero.linkedInSVG} className="dark:stroke-[#2A262B] dark:fill-[#2A262B] mr-5"></img>
                            </a>
                            {/* LinkedIn logosu. Karanlık temada renk değişiyor. */}

                            <a href={hero.githubLink}>
                                <img src={hero.githubSVG} className="dark:stroke-[#2A262B] dark:fill-[#2A262B]"></img>
                            </a>
                            {/* GitHub logosu. */}
                        </div>

                        <p className="mt-5">{hero.heroFooter}</p>
                        {/* Alt bilgi metni. */}

                        <p>
                            {hero.heroFooter2}
                            <a className="text-[#E92577]" href={`mailto:${hero.heroFooterMail}`}>
                                {hero.heroFooterMail}
                            </a>
                        </p>
                        {/* Kullanıcının e-posta adresini içeren paragraf. */}

                    </div>
                </div>

                <div className="w-32 h-16 bg-[#EA2678] rounded-l-full place-self-end"></div>
                {/* Sağ alt köşede pembe renkli yarım daire (dekoratif şekil). */}

                <div className="w-32 h-32 border-[16px] border-solid border-[#D9D9D9] rounded-full place-self-end mr-[25vw] -mb-16"></div>
                {/* Sağ alt köşede büyük bir gri daire (dekoratif şekil). */}
            </header>
        </>
    );
}


// Header bileşeni dışa aktarılıyor ve başka dosyalarda kullanılabilir hale getiriliyor.