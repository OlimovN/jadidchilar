

 import React from "react";
 import { useParams, useNavigate } from "react-router-dom";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
 import"./jadid.css"

 const JadidchiDetails = () => {
   const { id } = useParams();
     const navigate = useNavigate();
   const jadidchi = jadidchilar.find((person) => person.id === parseInt(id));

   if (!jadidchi) {
     return <div className="not-found">Ma'lumot topilmadi</div>;
   }

   const sliderSettings = {
     dots: true,
     infinite: true,
     speed: 800,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     arrows: false,
   };
 const handleBackClick = () => {
   navigate("/"); 
 };
   return (
     <div className="jadidchi-details">
       <h1 className="jadidchi-name">{jadidchi.name}</h1>
       <Slider {...sliderSettings} className="jadidchi-slider">
         {jadidchi.images.map((image, index) => (
           <div key={index}>
             <img
               src={image}
               alt={`${jadidchi.name} image ${index + 1}`}
               className="jadidchi-image"
             />
           </div>
         ))}
       </Slider>
       <div className="jadidchi-content">
         <h2>Jadidchilikga qo'shgan hissalari</h2>
         <p>{jadidchi.biography}</p>
         <h2>Hayotiy faoliyati</h2>
         <p>{jadidchi.desc}</p>
       </div>
       <div className="back" onClick={handleBackClick}>
         Asosiy sahifaga qaytish
       </div>
     </div>
   );
 };

 const jadidchilar = [
   {
     id: 1,
     name: "Abdulla Avloniy",
     biography:
       "Abdulla Avloniy jadidchilik harakatining eng mashhur yetakchilaridan biri bo'lib, o'zining yangi usul maktablarini yaratishda katta hissa qo'shgan. Avloniy o'zbek tilida yangi usulda ta'lim berish va ilm-fan rivojlanishiga katta e'tibor bergan. Uning O'zbek gazetasining tahririyatida faoliyat yuritganligi va yangi ta'lim tizimining joriy etilishida muhim rol o'ynagan. Avloniy ta'limni zamonaviylashtirishni, diniy fanlardan tashqari, umumiy bilimlarni ham o'rgatishni maqsad qilgan. U nafaqat maktablar ochishda, balki yangi o'quv dasturlarini ishlab chiqishda ham faol qatnashgan. Ularning asosiy maqsadi – xalqni xabardor qilish va ilm-fan orqali jamiyatni rivojlantirish edi",
     desc: "Abdulla Avloniy (1878-1934) — o‘zbek jadidchiligining mashhur namoyandasi, yozuvchi, pedagog va davlat arbobi. Avloniy yangi usul maktablarini yaratishda faol ishtirok etgan va O‘zbekistondagi jadidchilik harakatining yetakchilaridan biri bo‘lgan. Uning ta'limni yangilash haqidagi g‘oyalari va maqsadlari jamiyatni ilm-fan orqali rivojlantirishga qaratilgan edi. Abdulla Avloniy O‘zbek gazetasining asoschisi bo‘lib, unda ilmiy, adabiy va siyosiy mavzularda maqolalar chop etgan. U o‘zbek tilida yozilgan birinchi darsliklarni yaratgan va o‘zbek milliy ta'limini yangilashni o‘z faoliyatining asosiy maqsadi deb bilgan. Avloniyning ta'lim tizimiga bo‘lgan e'tibori xalqni zamonaviy bilimlar bilan ta'minlashga, o‘zbekistonlik yoshlarni ilm-fan bilan tarbiyalashga bo‘lgan g‘oyalarini yoritish edi.",
     images: [
       "https://yoshlarportali.uz/upload/book_cover/image_2023-01-27_18-53-58.png",
       "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/avloniy-web-150x150h.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevm4tYvrkNsZL2j436f0Xj-2wWRg6okP-Dw&s",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Abdulla_Avloniy.jpg/360px-Abdulla_Avloniy.jpg",
       "https://oefen.uz/data/documents/048d6502-fbdc-4455-b315-b32a3383dcf7/page_2.png",
       "https://api.mutolaa.com/media/books/2024/03/Jadidlar._Abdulla_Avloniy.jpg",
     ],
   },
   {
     id: 2,
     name: "Fitrat",
     biography:
       "Fitrat o'z zamonining mashhur jadidchisi bo'lib, u ham ta'lim tizimini yangilashga katta e'tibor bergan. U jadidchilik maktablarini tashkil qilishda faol ishtirok etgan va o'zbek tilining taraqqiyoti uchun ko'plab maqolalar yozgan. Fitrat yangi usul ta'limini qo'llab-quvvatlagan, eski madrasalarda faqat diniy fanlar o'qitilgan bo'lsa, yangi maktablar ilm-fan va umumiy bilimlarga e'tibor qaratgan. Fitratning o'zi jadidchilik maktablarida ta'lim olgan va bu maktablarda o'quvchilarga rus tili, tarix, matematika, fizika kabi fanlar ham o'qitilgan. Shuningdek, u o'z zamonasidagi ilmiy va ijtimoiy o'zgarishlarni ilgari surgan.",
     desc: " Fitrat (1890-1938) — O‘zbekistonning mashhur jadidchisi, adibi, ilm-fan namoyandasi va davlat arbobi edi. U o‘zbek adabiyoti, tili va madaniyatini rivojlantirishda muhim rol o‘ynagan. Fitrat o‘zining ta'lim, adabiyot va ijtimoiy g‘oyalari bilan jadidchilik harakatida faol qatnashgan. U dastlab o‘qituvchi sifatida faoliyat yuritgan va yangi usuldagi maktablarning asosiy ideologlaridan bo‘lgan. Fitratning asarlari, shu jumladan Shuhrat, Hayot, Shavkat kabi gazetalar orqali o‘z g‘oyalarini jamoatchilikka taqdim etgan. U turk tilini va o‘zbek adabiyotini rivojlantirishni maqsad qilgan va bu sohada ko‘plab ilmiy ishlanmalar qoldirgan. Fitrat, shuningdek, ilmiy izlanishlarga katta e'tibor qaratgan va zamonaviy dunyoqarashni ilgari surgan",

     images: [
       "https://yoshlarportali.uz/upload/book_cover/image_2023-02-01_12-15-29.png",
       "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/fitrat-web-500x750.jpg",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Fitrat_Buxoro_1908.jpg/220px-Fitrat_Buxoro_1908.jpg",
       "https://assets.asaxiy.uz/product/items/desktop/5a050d89008aa03b86e2606686f25b512024061516320762181C0DQQesYB3.jpg",
       "https://static.zarnews.uz/crop/7/c/720__80_7c2d3a42b804672c59e245f30fdcbf7c.jpeg?img=self&v=1675512876",
     ],
   },
   {
     id: 3,
     name: "Munavvar Qori",
     biography:
       "Munavvar Qori jadidchilik harakatining ilg'or yetakchilaridan biri bo'lib, ta'lim tizimini yangilashda faol ishtirok etgan. U eski madrasalar tizimiga qarshi chiqib, yangi usuldagi maktablarni tashkil qilishga katta e'tibor qaratgan. Munavvar Qori yangi usuldagi maktablarda faqat diniy fanlar emas, balki ilm-fan, matematika, tabiatshunoslik kabi fanlar ham o'qitilishi kerak deb hisoblagan. U o'zining g'oyalarini ilgari surishda, o'zbek tilida yozilgan ko'plab maqolalar va asarlarni chop etgan. Munavvar Qori, shuningdek, diniy va ilmiy tafakkurni uyg'unlashtirishga harakat qilgan. U yangi maktablarda o'qituvchi sifatida faoliyat olib borgan.",
     desc: "Munavvar Qori (1878-1931) — jadidchilik harakatining mashhur yetakchisi va ilmiy arbobi edi. U diniy va ilmiy sohalarda muhim yutuqlarga erishgan. Munavvar Qori, ayniqsa, ta'lim tizimini yangilash borasida faoliyat yuritgan va yangi usuldagi maktablar ochishga katta hissa qo‘shgan. U yangi usuldagi ta'limni joriy etishda, o‘zbek xalqining ijtimoiy va madaniy rivojlanishiga hissa qo‘shishga harakat qilgan. Munavvar Qori ko‘plab ilmiy va ijtimoiy asarlar yozgan va ularning ko‘pchiligida o‘zbek xalqi uchun ta'limni yangilash va rivojlantirishni maqsad qilgan. U jadidchilik g‘oyalarini keng targ‘ib etishda va yangi ta'lim tizimini tashkil etishda muhim rol o‘ynagan.",
     images: [
       "https://namdu.uz/media/Books/img/2024/06/06/NamDU-ARM-Book-Image-4389-Jadidlar._Munavvar_Qori_Abdurashidxonov.png",
       "https://api.mutolaa.com/media/books/2024/02/Jadidlar._Munavvar_qori_Abdurashidxonov.jpg",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Munavvar_qori_Abdurashidxonov.jpg/640px-Munavvar_qori_Abdurashidxonov.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oRciIwJcmtIiZbWjSH_U-uqSHwl3RXQ8cw&s",
       "https://jadid.uz/wp-content/uploads/2024/05/sayyoh-abdurahmon-sayyoh-ibn-hoji-muhammad-sodiqov-16-791x1024.png",
     ],
   },
   {
     id: 4,
     name: "Cholpon",
     biography:
       "Cholpon, o'zining adabiy va siyosiy faoliyati orqali, jadidchilik harakatining rivojlanishiga katta hissa qo'shgan. Cholponning maqsadi o'zbek xalqi orasida yangi usuldagi maktablarni yaratish va ilm-fan rivojlanishiga yordam berish edi. U yangi ta'lim tizimining joriy etilishi uchun ko'plab maqolalar yozgan va yangi usuldagi maktablarning zarurligini ta'kidlagan. Cholponning ta'limni zamonaviylashtirishdagi harakati, o'zbek xalqining madaniy va ilmiy rivojlanishiga katta ta'sir ko'rsatgan. U jadidchilik harakatining bir qismi sifatida, xalqning tafakkurini yangilashga chaqirgan.",
     desc: "Cholpon (1890-1938) — o‘zbek adabiyotining yetakchi namoyandalaridan biri, shuningdek, jadidchilik harakatining faol ishtirokchisidir. U o‘zining she'riyati va adabiy asarlari orqali ijtimoiy o‘zgarishlar haqida keng fikrlar bildirgan. Cholponning asarlari jamiyatdagi o‘zgarishlarni va yangi fikrlarni ilgari surgan. U jadidchilik harakatining maqsadlarini rivojlantirishda adabiyot va san'atning ahamiyatini tushungan. Cholpon o‘z zamonasi uchun birinchi bo‘lib, o‘zbek adabiyotida realistik va yangi uslubdagi asarlarni yaratgan. U Shuhrat, Yangi hayot kabi gazetalarda faoliyat yuritgan va o‘z g‘oyalarini keng jamoatchilikka taqdim etgan.",
     images: [
       "https://uzlib.uz/sites/default/files//styles/large/public/field/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_0.PNG?itok=5jP0GLLC",
       "https://upload.wikimedia.org/wikipedia/commons/9/9c/Abdulhamid_Cholpon.jpg",
       "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/cholpon-web-550x550h.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUErVR6EKz_QgEXNurO6O_q0vDvFUI1hnPG3MddaikLMondavpcrdAc6euAB-IvqXIPQ&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1RTLtkrhSgh86N0X89br2orL0FK-p2j7xerF_YDokzhFUg5A_gOTVGW8Xp02e9pCcYY&usqp=CAU",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZGXHbGkuUjLBqrsVKEQCGz647Bl_g5YvhQowbTZtaY0NcpMTGCDCN2exh5AnXO_sl4Q&usqp=CAU",
     ],
   },
   {
     id: 5,
     name: "Mahmudxoja Behbudiy",
     biography:
       "Behbudiy jadidchilik harakatining faol vakillaridan biri bo'lib, u o'zbek adabiyoti, teatrini rivojlantirish va ta'lim tizimini modernizatsiya qilishda katta ishlar qilgan. Behbudiy yangi maktablarni tashkil etishda va ta'lim tizimini isloh qilishda faol qatnashgan. U jadidchilik harakatining asosiy maqsadlaridan biri – jamiyatni ilm-fan orqali o'zgartirish va yangi tafakkurni shakllantirish edi. Behbudiy o'z zamonasida yangi usuldagi maktablarni tashkil etishga va ularning faoliyatini yaxshilashga ko'plab sa'y-harakatlar qilgan. U, shuningdek, o'z asarlarida jadidchilik g'oyalarini ilgari surgan va ta'limni yangilashni muhim deb bilgan.",
     desc: "Mahmudxo‘ja Behbudiy (1875-1919) — jadidchilik harakatining asoschilaridan biri, o‘zbek adabiyotining yangilanishiga katta hissa qo‘shgan. U o‘zbek xalqining madaniyatini rivojlantirish, yangi usuldagi maktablar ochish va ta'lim tizimini isloh qilish uchun ko‘plab sa'y-harakatlar qilgan. Behbudiy o‘zining Yangi Usul ta'lim tizimini joriy etishga intilgan va o‘zbek xalqining ijtimoiy, madaniy va iqtisodiy rivojlanishiga hissa qo‘shgan. U adabiyotda ham yangiliklarni ilgari surgan va o‘zbek teatrini rivojlantirishda faol ishtirok etgan. Behbudiy jadidchilik harakatining siyosiy va madaniy o‘zgarishlarni amalga oshirishda asosiy arboblardan biri bo‘lib, xalqning tafakkurini yangilashni maqsad qilgan.",
     images: [
       "https://namdu.uz/media/Books/img/2024/06/06/NamDU-ARM-Book-Image-4396-Jadidlar._Mahmudxoja_Behbudiy.png",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6S1BO4NkkUdF3uOLzJMyQJFPnZUSIE_48XbMfqykqTDxYN1ZxZyXOn6D5jVYm0D1Erqo&usqp=CAU",
       "https://corp.uzairways.com/sites/default/files/inline-images/photo_2020-12-01_12-44-51.jpg",
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCePkbVlvq2vtolg3kgmUapUCuxSeyDirVQ&s",
       "https://jadid.uz/wp-content/uploads/2024/05/sayyoh-abdurahmon-sayyoh-ibn-hoji-muhammad-sodiqov-13-791x1024.png",
       "https://assets.asaxiy.uz/product/main_image/desktop//666d796bac19f.jpg",
     ],
   },
 ];

 export default JadidchiDetails;
