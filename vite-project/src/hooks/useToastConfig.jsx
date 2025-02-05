// Toast bileşenlerinin varsayılan yapılandırma ayarlarını içeren özel bir hook tanımlıyoruz.
const useToastConfig = () => ({
  // Toast bildiriminin ekranda nerede görüneceği belirlenir (sağ üst).
  position: "top-right", 
  
  // Bildirimin otomatik olarak kapanma süresi (ms cinsinden).
  autoClose: 3000, 
  
  // İlerleme çubuğunun görünürlüğü ayarlanır.
  hideProgressBar: false, 
  
  // Yeni bildirimler eskilerin üstünde görüntülenir mi?
  newestOnTop: false, 
  
  // Bildirim tıklanarak kapatılabilir mi?
  closeOnClick: true, 
  
  // Sağdan sola (RTL) dil düzeni desteği.
  rtl: false, 
  
  // Odak kaybedildiğinde bildirimin kapanmasını durdurur.
  pauseOnFocusLoss: true, 
  
  // Bildirim sürüklenerek taşınabilir mi?
  draggable: true, 
  
  // Fare üzerine geldiğinde kapanmayı durdurur.
  pauseOnHover: true, 
  
  // Bildirim temasını belirler ("colored", "light", "dark" vb.).
  theme: "colored", 
  
  // Bildirim stil ayarları.
  style: { 
    fontSize: '14px', // Yazı boyutu.
    letterSpacing: '0.5px' // Harf aralığı.
  }
});

export default useToastConfig;
