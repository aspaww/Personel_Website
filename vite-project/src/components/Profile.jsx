// "useLanguage" adlı özel bağlam (context) içe aktarılıyor.
// Bu bağlam, çoklu dil desteği sağlayan bir çeviri fonksiyonu içeriyor.
import  useLanguage  from "../hooks/useLanguage";

export default function Profile() {
    // useLanguage bağlamından (context) "translate" fonksiyonunu alıyoruz.
    const { translate } = useLanguage();
    
    // "translate" fonksiyonunu kullanarak "profile" nesnesini alıyoruz.
    // Bu nesne, farklı dillerdeki çevirileri içerebilir.
    const profile = translate("profile");

    return (
        <>
            {/* Profil bölümü - Açık ve koyu temalar için farklı arka plan renkleri kullanılmış */}
            <section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] py-24 content-center text-center">
                
                {/* Sol üst köşede pembe bir süsleme şekli (dekoratif şerit) */}
                <div className="w-20 h-32 border-l-16 border-t-16 border-b-16 border-solid border-[#EA2678] rounded-l-full place-self-end -mt-36"></div>

                {/* Profil içeriği, genişlik ayarları ile hizalanmış */}
                <div className="px-[18vw]">
                    
                    {/* Başlık kısmı - profile nesnesinden gelen başlık metni kullanılıyor */}
                    <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">
                        {profile.profileText}
                    </h1>

                    {/* Profil içeriğini içeren kapsayıcı div */}
                    <div className="justify-center content-center text-center flex flex-row flex-wrap">

                        {/* Profil bilgilerini içeren kutu */}
                        <div className="bg-[#52525280] md:w-[26rem] rounded-2xl h-[19rem] w-[20rem]">
                            
                            {/* Profil bilgileri için iç kutu (arka plan rengi açık/koyu temaya göre değişiyor) */}
                            <div className="bg-[#FFFFFF] dark:bg-[#525252] md:w-[26rem] w-[20rem] h-72 flex flex-col rounded-2xl -ml-3">
                                
                                {/* Kartın başlığı (örn. Kişisel Bilgiler gibi) */}
                                <h1 className="self-start ml-5 my-3 font-normal text-2xl text-[#EA2678] leading-8 font-playfair">
                                    {profile.cart.h1}
                                </h1>

                                {/* Profil bilgilerini listeleyen kısım */}
                                <div className="flex flex-row text-wrap text-left ml-5">
                                    <div className="flex flex-col text-lg leading-5 tracking-tight flex-wrap">

                                        {/* Doğum tarihi bilgisi */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.dateOfBirthText}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.dateOfBirth}
                                            </div>
                                        </div>

                                        {/* Şehir bilgisi */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.cityText}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.city}
                                            </div>
                                        </div>

                                        {/* Eğitim bilgisi */}
                                        <div className="flex flex-row my-5 h-14">
                                            <div className="font-semibold text-wrap w-40">
                                                {profile.cart.educationText}
                                            </div>
                                            <div className="text-wrap w-28 md:w-48 md:ml-5">
                                                {profile.cart.education}
                                            </div>
                                        </div>

                                        {/* Rol bilgisi (örn. Frontend Developer) */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.rolText}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.rol}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hakkımda bölümü */}
                        <div className="w-[30rem] ml-6 mt-16 text-left">
                            
                            {/* Üstünde mavi bir çizgi olan başlık */}
                            <div className="border-b-[15px] -ml-1 rounded-md border-solid w-24 -mb-11 border-[#82BBFF] dark:border-[#82BBFF]"></div>
                            
                            {/* Hakkımda başlığı */}
                            <h1 className="m-2 text-2xl font-normal font-playfair">
                                {profile.about.aboutMe}
                            </h1>

                            {/* Hakkımda metinleri */}
                            <p className="m-2">{profile.about.text1}</p>
                            <p className="m-2">{profile.about.text2}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

// Bileşeni dışa aktarıyoruz, böylece başka dosyalarda kullanılabilir.
