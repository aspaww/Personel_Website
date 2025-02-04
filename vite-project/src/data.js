const languagesData = {
	en: {
	    changeLanguage: "TÜRKÇE",
	    hero: {
		  greeting: "Hi! 👋",
		  intro: " I'm a front-end developer. I can craft solid and scalable front-end products. Let's meet!",
		  profileImg: "/assests/cv.jpg",
		  profileName: "I'm Şükrü.",
		  linkedInSVG: "/assests/linkedIn.svg",
		  linkedInLink: "www.linkedin.com/in/şükrü-keleş-59a0a0228",
		  githubSVG: "/assests/github.svg",
		  githubLink: "https://github.com/aspaww",
		  heroFooter: "Currently Freelancing for UX,UI, & Web Design Project.",
		  heroFooter2: "Invite me to join your team -> ",
		  heroFooterMail: "skrcnklsss@mail.com",
	    },
	    skills: {
		  h1: "Skills",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assests/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assests/react.png",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assests/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assests/node.png",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assests/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assests/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profile",
		  cart: {
			h1: "Basic Information",
			dateOfBirthText: "Date of Birth",
			dateOfBirth: "01.06.2001",
			cityText: "City of residence",
			city: "Trabzon",
			educationText: "Educational background",
			education: "Trakya Üniversitesi, Bilişim sistemleri ve teknolojileri",
			rolText: "Preferred Role",
			rol: "Frontend, UI"
		  },
		  about: {
			aboutMe: "About me",
			text1: "I graduated from Trakya University with a degree in Information Systems and Technologies. Holding on to my passion for technology and innovation, I took my software development journey to the next level and am currently specializing in front-end technologies such as HTML, CSS, JavaScript, React and Tailwind CSS through the Full Stack Development program at Workintech. This program allows me to combine my analytical skills with creativity, allowing me to create user-friendly interfaces and improve the overall user experience. My goal is to continue expanding my knowledge and specialize in full-stack development, integrating both front-end and back-end technologies to create comprehensive and efficient solutions.",
			text2: "I have a strong passion for exploring new concepts and technologies, with a continuous focus on self-improvement throughout the process. Leveraging my quick learning ability, I enhance my knowledge and skills through in-depth research within my field. My curiosity and commitment drive me to actively seek learning opportunities and stay informed on the latest advancements in my area of expertise."
		  }
	    },
	    projects: {
		  h1: "Projects",
		  myProjects: [
			{
			    id:"witflix",
			    h1: "WitFlix",
			    text: "A web application that replicates the essential features of Netflix, facilitating the search for movies and TV series for users. This project was developed as a personal initiative to enhance my web development expertise.",
			    materials: [ "html","css"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/aspaww/Witflix-",
			    appText: "Go to app ->",
			    appLink: "",
			    imgLink: "",
			},
		 
			{
			    id:"pizzareact",
			    h1: "Pizza Challenge React",
			    text: "A pizza ordering website built with React components, allowing users to navigate the homepage, proceed to the pizza ordering page, and customize their pizza by selecting the dough, size, and additional toppings. Users can also add a custom order note. The price of the order adjusts based on the toppings and quantity of pizzas selected. Upon placing the order, a request is sent to the API 'https://reqres.in/api/pizza', and a confirmation page is displayed with the order details.",
			    materials: ["react","router","axios","state management"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/aspaww/Pizza",
			    appText: "Go to app ->",
			    appLink: "https://pizza-ecru-nine.vercel.app/",
			    imgLink: "assets/images/reactPizza.png",
			},
		  ],
	    },
	    footer: {
		  h1: "Let's work together on your next product.",
		  githubText: "Github",
		  githubLink: "",
		  personelBlogText: "Personel Blog",
		  personelBlogLink: "",
		  linkedInText: "Linkedin",
		  linkedInLink: "",
		  emailText: "Email",
		  emailLink: "",
	    }
	},
	tr: {
	    changeLanguage: "ENGLISH",
	    hero: {
		  greeting: "Merhaba! 👋",
		  intro: " Ben bir ön yüz geliştiricisiyim. Sağlam ve ölçeklenebilir ön yüz ürünleri oluşturabilirim. Tanışalım!",
		  profileImg: "/assests/cv.jpg",
		  profileName: "Ben Şükrü.",
		  linkedInSVG: "/assests/linkedIn.svg",
		  linkedInLink: "www.linkedin.com/in/şükrü-keleş-59a0a0228",
		  githubSVG: "/assests/github.svg",
		  githubLink: "https://github.com/aspaww",
		  heroFooter: "Şu anda UX, UI ve Web Tasarım projeleri için serbest çalışıyorum.",
		  heroFooter2: "Beni ekibinize davet edin -> ",
		  heroFooterMail: "skrcnklsss@gmail.com",
	    },
	    skills: {
		  h1: "Yetenekler",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assests/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assests/react.png",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assests/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assests/node.png",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assests/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assests/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profil",
		  cart: {
			h1: "Temel Bilgiler",
			dateOfBirthText: "Doğum tarihi",
			dateOfBirth: "01.06.2001",
			cityText: "İkamet Şehri",
			city: "Trabzon",
			educationText: "Eğitim Durumu",
			education: "Trakya Üniversitesi,Bilişim Sistemleri ve Teknolojileri",
			rolText: "Tercih Ettiği Rol",
			rol: "Frontend, UI"
		  },
		  about: {
			aboutMe: "Hakkımda",
			text1: "Trakya Üniversitesi Bilişim Sistemleri ve Teknolojileri bölümünden mezun oldum. Teknolojiye ve yeniliğe olan tutkumu koruyarak yazılım geliştirme yolculuğumu bir üst seviyeye taşıdım ve şu anda Workintech'te Full Stack Development programı ile HTML, CSS, JavaScript, React ve Tailwind CSS gibi ön uç teknolojilerinde uzmanlaşıyorum. Bu program, analitik becerilerimi yaratıcılıkla birleştirmemi sağlayarak kullanıcı dostu arayüzler oluşturmama ve genel kullanıcı deneyimini iyileştirmeme olanak tanıyor. Hedefim, kapsamlı ve verimli çözümler oluşturmak için hem ön uç hem de arka uç teknolojilerini entegre ederek bilgimi genişletmeye devam etmek ve tam yığın geliştirme konusunda uzmanlaşmak.",
			text2: "Süreç boyunca sürekli olarak kendimi geliştirmeye odaklanarak yeni konseptleri ve teknolojileri keşfetmeye karşı güçlü bir tutkum var. Hızlı öğrenme yeteneğimi kullanarak, alanımdaki derinlemesine araştırmalar yoluyla bilgi ve becerilerimi geliştiriyorum. Merakım ve bağlılığım, öğrenme fırsatlarını aktif olarak aramamı ve uzmanlık alanımdaki en son gelişmelerden haberdar olmamı sağlıyor."
		  }
	    },
  
	    projects: {
		  h1: "Projects",
		  myProjects: [
			{
			    id:"witflix",
			    h1: "WitFlix",
			    text: "Netflix'in temel özelliklerini kopyalayan, kullanıcıların film ve TV dizilerini aramasını kolaylaştıran bir web uygulaması. Bu proje, web geliştirme uzmanlığımı geliştirmek için kişisel bir girişim olarak geliştirildi.",
			    materials: ["html","css"],
			    viewText: "Github' ta göster",
			    viewLink: "https://github.com/aspaww/Witflix-",
			    appText: "Uygulamaya git ->",
			    appLink: "",
			    imgLink: "",
			},
			 
			{
			    id:"pizzareact",
			    h1: "Pizza Challenge React",
			    text: "React bileşenleriyle oluşturulmuş bir pizza sipariş sitesi, kullanıcıların ana sayfada gezinmesine, pizza sipariş sayfasına geçmesine ve hamur, boyut ve ek malzemeleri seçerek pizzalarını özelleştirmesine olanak tanır. Kullanıcılar ayrıca özel bir sipariş notu ekleyebilir. Siparişin fiyatı, seçilen malzemelere ve pizzaların miktarına göre ayarlanır. Sipariş verildikten sonra, 'https://reqres.in/api/pizza' API'sine bir istek gönderilir ve sipariş ayrıntılarıyla bir onay sayfası görüntülenir.",
			    materials: ["vercel", "react","router","axios","state management"],
			    viewText: "Github' ta göster",
			    viewLink: "https://github.com/aspaww/Pizza",
			    appText: "Uygulamaya git ->",
			    appLink: "https://pizza-ecru-nine.vercel.app/",
			    imgLink: "/assests/reactPizza.png",
			},
		  ],
	    },
	    footer: {
		  h1: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
		  githubText: "Github",
		  githubLink: "https://github.com/aspaww",
		  personelBlogText: "Personel Blog",
		  personelBlogLink: "",
		  linkedInText: "Linkedin",
		  linkedInLink: "www.linkedin.com/in/şükrü-keleş-59a0a0228",
		  emailText: "Email",
		  emailLink: "skrcnklsss@gmail.com",
	    }
	}
  }
  export default languagesData;